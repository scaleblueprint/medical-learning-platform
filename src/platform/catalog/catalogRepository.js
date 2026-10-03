import { catalogRegistry, PLATFORM } from '../../data/catalog/registry.js';
import { cardiovascularLessons } from '../../data/lessons/cardiovascular.js';

export const getPlatform = () => PLATFORM;
export const getYears = () => catalogRegistry.professionalYears;
export const getSubjects = (yearId) => catalogRegistry.subjects.filter(s => !yearId || s.yearId === yearId);
export const getSubject = (id) => catalogRegistry.subjects.find(s => s.id === id) || null;
export const getSystems = (subjectId) => catalogRegistry.systems.filter(s => !subjectId || s.subjectId === subjectId);
export const getSystem = (id) => catalogRegistry.systems.find(s => s.id === id) || null;
export const getLessons = (systemId) => systemId === 'cardiovascular' ? cardiovascularLessons : [];
export const getLesson = (id) => cardiovascularLessons.find(l => l.id === id) || null;
