import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log("Starting seed process...");

  const topicsPath = path.resolve(__dirname, "../../seed_topics.json");
  const vocabPath = path.resolve(__dirname, "../../seed_vocab.json");

  const topicsData = JSON.parse(fs.readFileSync(topicsPath, "utf-8"));
  const vocabData = JSON.parse(fs.readFileSync(vocabPath, "utf-8"));

  const phaseIdByOrder: Record<number, number> = {};

  for (const phase of topicsData.phases) {
    console.log(`Inserting Phase ${phase.order_index}: ${phase.title}`);
    const { data: p, error: pError } = await supabase
      .from("phases")
      .upsert({ order_index: phase.order_index, title: phase.title }, { onConflict: "order_index" })
      .select()
      .single();

    if (pError || !p) {
      console.error("Error inserting phase:", pError);
      continue;
    }

    phaseIdByOrder[phase.order_index] = p.id;

    for (const t of phase.topics) {
      const { data: topicRow, error: tError } = await supabase
        .from("topics")
        .insert({
          phase_id: p.id,
          order_index: t.order_index,
          title: t.title,
          theory_md: t.theory_md,
          book1_ref: t.book1_ref,
          book2_p1_ref: t.book2_p1_ref,
          book2_p2_ref: t.book2_p2_ref,
        })
        .select()
        .single();

      if (tError || !topicRow) {
        console.error("Error inserting topic:", tError);
        continue;
      }

      if (t.examples && t.examples.length > 0) {
        await supabase.from("topic_examples").insert(
          t.examples.map((content: string, i: number) => ({
            topic_id: topicRow.id,
            order_index: i + 1,
            content,
          }))
        );
      }
    }
  }

  console.log("Inserting vocabulary words...");
  const vocabRows = vocabData.words.map((w: any) => ({
    word: w.word,
    ipa: w.ipa,
    audio_url: w.audio_url ?? null,
    meaning_vi: w.meaning_vi,
    example_sentence: w.example_sentence,
    phase_id: phaseIdByOrder[w.phase_order] ?? 3,
    theme: w.theme,
    is_base: true,
  }));

  const { error: vError } = await supabase.from("vocab_words").insert(vocabRows);
  if (vError) {
    console.error("Error inserting vocab:", vError);
  } else {
    console.log(`Successfully seeded ${vocabRows.length} vocab words!`);
  }

  console.log("Seed finished!");
}

run().catch(console.error);
