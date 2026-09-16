const fs = require('fs');
const path = require('path');

const phase1 = require('./phase1');
const phase2 = require('./phase2');
const phase3 = require('./phase3');
const phase4 = require('./phase4');

const seedPath = path.join(__dirname, '../../seed_topics.json');
const originalSeed = JSON.parse(fs.readFileSync(seedPath, 'utf8'));

const phasesData = [
  { order_index: 1, title: "Giai đoạn 1 — Ngữ âm & Từ loại nền tảng", topics: phase1 },
  { order_index: 2, title: "Giai đoạn 2 — Ngữ pháp cốt lõi", topics: phase2 },
  { order_index: 3, title: "Giai đoạn 3 — Cấu trúc nâng cao & Từ vựng chuyên sâu", topics: phase3 },
  { order_index: 4, title: "Giai đoạn 4 — Kỹ năng Đọc hiểu & Viết", topics: phase4 },
];

let totalTopics = 0;
const enrichedPhases = phasesData.map(p => {
  totalTopics += p.topics.length;
  return {
    order_index: p.order_index,
    title: p.title,
    topics: p.topics.map(t => {
      if (!t.theory_md || t.theory_md.length < 50) {
        throw new Error(`Topic ${t.title} has invalid theory_md`);
      }
      if (!t.examples || t.examples.length !== 3) {
        throw new Error(`Topic ${t.title} does not have 3 examples`);
      }
      return {
        order_index: t.order_index,
        title: t.title,
        theory_md: t.theory_md,
        book1_ref: t.book1_ref || null,
        book2_p1_ref: t.book2_p1_ref || null,
        book2_p2_ref: t.book2_p2_ref || null,
        examples: t.examples,
      };
    }),
  };
});

const output = {
  phases: enrichedPhases,
};

fs.writeFileSync(seedPath, JSON.stringify(output, null, 2), 'utf8');

console.log(`✅ Successfully updated seed_topics.json!`);
console.log(`📊 Total phases: ${output.phases.length}`);
console.log(`📊 Total topics: ${totalTopics}`);
let totalChars = 0;
output.phases.forEach(p => {
  p.topics.forEach(t => {
    totalChars += t.theory_md.length;
  });
});
console.log(`📝 Total theory characters: ${totalChars} (avg ${(totalChars / totalTopics).toFixed(0)} chars/topic)`);
