const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const url = 'https://sttsgjppamwekojxudfv.supabase.co';
const serviceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0dHNnanBwYW13ZWtvanh1ZGZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTQ0NzA2NiwiZXhwIjoyMTA1MDIzMDY2fQ.TbJEpl6Q6K7pv119DuBY3SwutBjr6DOMm6cHVQSvlhQ';

const supabase = createClient(url, serviceKey);

async function runSeed() {
  console.log('--- BẮT ĐẦU SEED DỮ LIỆU LÊN SUPABASE ---');

  const topicsPath = path.resolve(__dirname, '../../seed_topics.json');
  const vocabPath = path.resolve(__dirname, '../../seed_vocab.json');

  const topicsData = JSON.parse(fs.readFileSync(topicsPath, 'utf-8'));
  const vocabData = JSON.parse(fs.readFileSync(vocabPath, 'utf-8'));

  const phaseIdByOrder = {};

  // 1. Insert phases and topics
  for (const phase of topicsData.phases) {
    console.log(`Đang nạp Giai đoạn ${phase.order_index}: ${phase.title}`);
    
    // Check if phase exists
    let { data: existingPhase } = await supabase
      .from('phases')
      .select('id')
      .eq('order_index', phase.order_index)
      .maybeSingle();

    let phaseId;
    if (existingPhase) {
      phaseId = existingPhase.id;
    } else {
      const { data: p, error: pErr } = await supabase
        .from('phases')
        .insert({ order_index: phase.order_index, title: phase.title })
        .select()
        .single();
      if (pErr) {
        console.error('Lỗi khi thêm phase:', pErr);
        continue;
      }
      phaseId = p.id;
    }

    phaseIdByOrder[phase.order_index] = phaseId;

    for (const t of phase.topics) {
      // Check if topic exists
      let { data: existingTopic } = await supabase
        .from('topics')
        .select('id')
        .eq('phase_id', phaseId)
        .eq('order_index', t.order_index)
        .maybeSingle();

      let topicId;
      if (existingTopic) {
        topicId = existingTopic.id;
      } else {
        const { data: topicRow, error: tErr } = await supabase
          .from('topics')
          .insert({
            phase_id: phaseId,
            order_index: t.order_index,
            title: t.title,
            theory_md: t.theory_md,
            book1_ref: t.book1_ref || null,
            book2_p1_ref: t.book2_p1_ref || null,
            book2_p2_ref: t.book2_p2_ref || null,
          })
          .select()
          .single();

        if (tErr) {
          console.error(`Lỗi thêm topic #${t.order_index}:`, tErr);
          continue;
        }
        topicId = topicRow.id;

        if (t.examples && t.examples.length > 0) {
          await supabase.from('topic_examples').insert(
            t.examples.map((content, i) => ({
              topic_id: topicId,
              order_index: i + 1,
              content,
            }))
          );
        }
      }
    }
  }

  // 2. Insert vocabulary words
  console.log('Đang nạp bộ từ vựng nền...');
  const { count: existingVocabCount } = await supabase
    .from('vocab_words')
    .select('*', { count: 'exact', head: true });

  if (existingVocabCount === 0) {
    const vocabRows = vocabData.words.map((w) => ({
      word: w.word,
      ipa: w.ipa || null,
      audio_url: null,
      meaning_vi: w.meaning_vi,
      example_sentence: w.example_sentence || null,
      phase_id: phaseIdByOrder[w.phase_order] || phaseIdByOrder[4] || 4,
      theme: w.theme || 'General',
      is_base: true,
    }));

    const { error: vErr } = await supabase.from('vocab_words').insert(vocabRows);
    if (vErr) {
      console.error('Lỗi khi nạp từ vựng:', vErr);
    } else {
      console.log(`Đã nạp thành công ${vocabRows.length} từ vựng nền!`);
    }
  } else {
    console.log(`Đã có ${existingVocabCount} từ vựng trong DB, bỏ qua bước insert từ vựng.`);
  }

  console.log('--- HOÀN THÀNH SEED DỮ LIỆU LÊN SUPABASE! ---');
}

runSeed().catch(console.error);
