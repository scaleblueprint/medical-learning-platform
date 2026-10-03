import { getLessons, getSystem } from './catalogRepository.js';

export function lessonRoute(systemId, lessonId) {
  return `lesson/${systemId}/${lessonId}`;
}

export function getLessonNavigation(systemId, lessonId) {
  const system = getSystem(systemId);
  const lessons = getLessons(systemId);
  const index = lessons.findIndex(lesson => lesson.id === lessonId);
  if (!system || index < 0) {
    return { system, lessons, current: null, previous: null, next: null, index: -1, total: lessons.length };
  }
  return {
    system,
    lessons,
    current: lessons[index],
    previous: lessons[index - 1] || null,
    next: lessons[index + 1] || null,
    index,
    total: lessons.length,
  };
}

export function findLessonSystem(lessonId) {
  for (const systemId of ['cardiovascular']) {
    if (getLessons(systemId).some(lesson => lesson.id === lessonId)) return systemId;
  }
  return null;
}
