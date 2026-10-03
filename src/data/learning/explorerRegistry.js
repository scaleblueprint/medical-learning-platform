export const cardiovascularExplorerRegistry = {
  'heart-as-a-pump': 'heart-pump',
  'cardiac-cycle': 'cardiac-cycle',
  'cardiac-output': 'cardiac-output',
  'blood-pressure': 'blood-pressure',
  'bp-regulation': 'baroreflex',
};

export const getCardiovascularExplorer = (lessonId) => cardiovascularExplorerRegistry[lessonId] || null;
