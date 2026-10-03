import { cardiovascularLessons } from '../src/data/lessons/cardiovascular.js';
import { getLessonNavigation, lessonRoute } from '../src/platform/catalog/learningNavigation.js';

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

const routes = new Set();
for (let index = 0; index < cardiovascularLessons.length; index += 1) {
  const lesson = cardiovascularLessons[index];
  const route = lessonRoute('cardiovascular', lesson.id);
  if (routes.has(route)) errors.push(`Duplicate lesson route: ${route}`);
  routes.add(route);
  const nav = getLessonNavigation('cardiovascular', lesson.id);
  if (nav.current?.id !== lesson.id) errors.push(`${lesson.id}: navigation does not resolve current lesson`);
  if (nav.index !== index) errors.push(`${lesson.id}: navigation index ${nav.index} does not match ${index}`);
  const expectedPrevious = cardiovascularLessons[index - 1]?.id || null;
  const expectedNext = cardiovascularLessons[index + 1]?.id || null;
  if ((nav.previous?.id || null) !== expectedPrevious) errors.push(`${lesson.id}: incorrect previous lesson`);
  if ((nav.next?.id || null) !== expectedNext) errors.push(`${lesson.id}: incorrect next lesson`);
}
const invalid = getLessonNavigation('cardiovascular', 'not-a-real-lesson');
if (invalid.current !== null) errors.push('Invalid lesson must not silently resolve to another lesson');

if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Content validation passed: ${cardiovascularLessons.length} lessons, unique IDs, review flags, scoped routes and ordered navigation present.`);
