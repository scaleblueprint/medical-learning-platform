import { cardiovascularLessons } from '../src/data/lessons/cardiovascular.js';
import { cardiovascularExplorerRegistry, getCardiovascularExplorer } from '../src/data/learning/explorerRegistry.js';
import { cardiovascularVisualMemory, getCardiovascularVisualMemory } from '../src/data/learning/visualMemoryRegistry.js';
import { getLessonNavigation, lessonRoute } from '../src/platform/catalog/learningNavigation.js';

const errors = [];
const ids = new Set();
const allowedDiagrams = new Set(['circulation-loop','cycle-wheel','output-equation','pressure-pipe','feedback-loop']);
for (const lesson of cardiovascularLessons) {
  if (!lesson.id || ids.has(lesson.id)) errors.push(`Invalid or duplicate lesson id: ${lesson.id}`);
  ids.add(lesson.id);
  for (const key of ['experience','predict','understand','connect','apply','check']) {
    if (!lesson.stages?.[key]) errors.push(`${lesson.id}: missing stage ${key}`);
  }
  if (!getCardiovascularExplorer(lesson.id)) errors.push(`${lesson.id}: missing concept-specific Explore stage`);
  if (lesson.review !== 'faculty-review-required') errors.push(`${lesson.id}: prototype lesson must require faculty review`);

  const study = lesson.study;
  if (!study) errors.push(`${lesson.id}: missing study-depth layer`);
  for (const key of ['objectives','prerequisites','mechanisms','terms','misconceptions','viva','summary','sources']) {
    if (!Array.isArray(study?.[key]) || study[key].length === 0) errors.push(`${lesson.id}: study.${key} must be a non-empty array`);
  }
  if ((study?.objectives?.length || 0) < 3) errors.push(`${lesson.id}: requires at least 3 learning objectives`);
  if ((study?.mechanisms?.length || 0) < 3) errors.push(`${lesson.id}: requires at least 3 mechanism sections`);
  if ((study?.terms?.length || 0) < 4) errors.push(`${lesson.id}: requires at least 4 key terms`);
  if ((study?.viva?.length || 0) < 3) errors.push(`${lesson.id}: requires at least 3 viva prompts`);
  if ((study?.sources?.length || 0) < 2) errors.push(`${lesson.id}: requires at least 2 reference sources`);
  for (const source of study?.sources || []) {
    if (!source.label || !/^https:\/\//.test(source.url || '')) errors.push(`${lesson.id}: invalid study reference source`);
  }

  const visual = getCardiovascularVisualMemory(lesson.id);
  if (!visual) errors.push(`${lesson.id}: missing visual-memory layer`);
  if (visual && !allowedDiagrams.has(visual.diagram)) errors.push(`${lesson.id}: unsupported visual diagram ${visual.diagram}`);
  for (const key of ['title','subtitle']) if (!visual?.[key]) errors.push(`${lesson.id}: visual.${key} is required`);
  for (const key of ['title','everyday','medical','limit']) if (!visual?.analogy?.[key]) errors.push(`${lesson.id}: visual.analogy.${key} is required`);
  if (!visual?.memory?.rule || (visual?.memory?.cues?.length || 0) < 3) errors.push(`${lesson.id}: visual memory anchor requires a rule and at least 3 cues`);
  if (!visual?.redraw?.title || (visual?.redraw?.steps?.length || 0) < 3) errors.push(`${lesson.id}: redraw exercise requires at least 3 steps`);
  if ((visual?.viva?.length || 0) < 2) errors.push(`${lesson.id}: visual viva requires at least 2 quick-answer prompts`);
  for (const item of visual?.viva || []) {
    if (!item.question || !item.oneLine || (item.buildOut?.length || 0) < 2) errors.push(`${lesson.id}: each visual viva item needs a question, one-line answer and build-out points`);
  }
}
if (cardiovascularLessons.length !== 5) errors.push(`Expected 5 prototype cardiovascular lessons, found ${cardiovascularLessons.length}`);
if (Object.keys(cardiovascularExplorerRegistry).length !== cardiovascularLessons.length) errors.push('Explorer registry must cover exactly the current cardiovascular lesson set');
for (const lessonId of Object.keys(cardiovascularExplorerRegistry)) {
  if (!ids.has(lessonId)) errors.push(`Explorer registry contains unknown lesson: ${lessonId}`);
}
if (Object.keys(cardiovascularVisualMemory).length !== cardiovascularLessons.length) errors.push('Visual memory registry must cover exactly the current cardiovascular lesson set');
for (const lessonId of Object.keys(cardiovascularVisualMemory)) {
  if (!ids.has(lessonId)) errors.push(`Visual memory registry contains unknown lesson: ${lessonId}`);
}

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
console.log(`Content validation passed: ${cardiovascularLessons.length} seven-stage lessons with concept explorers, visual-memory maps, study depth, review flags, scoped routes and ordered navigation.`);
