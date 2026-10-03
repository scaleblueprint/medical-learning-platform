import { cardiovascularLessons } from '../src/data/lessons/cardiovascular.js';
const errors = [];
const ids = new Set();
for (const lesson of cardiovascularLessons) {
  if (!lesson.id || ids.has(lesson.id)) errors.push(`Invalid or duplicate lesson id: ${lesson.id}`);
  ids.add(lesson.id);
  for (const key of ['experience','predict','understand','connect','apply','check']) {
    if (!lesson.stages?.[key]) errors.push(`${lesson.id}: missing stage ${key}`);
  }
  if (lesson.review !== 'faculty-review-required') errors.push(`${lesson.id}: prototype lesson must require faculty review`);
}
if (cardiovascularLessons.length !== 5) errors.push(`Expected 5 prototype cardiovascular lessons, found ${cardiovascularLessons.length}`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Content validation passed: ${cardiovascularLessons.length} lessons, unique IDs, required stages and review flags present.`);
