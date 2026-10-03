export const PLATFORM = {
  id: 'medical-learning-lab',
  title: 'Medical Learning Lab',
  eyebrow: 'AN AMBERTHEORY EXPLORATION',
  description: 'Learn the body as a connected system — experience first, terminology second.',
};

export const catalogRegistry = {
  programs: [
    { id: 'mbbs', short: 'MBBS', title: 'Bachelor of Medicine & Bachelor of Surgery' },
  ],
  professionalYears: [
    { id: 'first-professional', title: 'First Professional', subtitle: 'Build the foundations of the human body', status: 'available' },
    { id: 'second-professional', title: 'Second Professional', subtitle: 'Connect mechanisms with disease', status: 'preview' },
    { id: 'third-professional', title: 'Third Professional', subtitle: 'Expand into clinical disciplines', status: 'preview' },
    { id: 'final-professional', title: 'Final Professional', subtitle: 'Integrate knowledge for patient care', status: 'preview' },
  ],
  subjects: [
    { id: 'physiology', yearId: 'first-professional', title: 'Physiology', short: 'PHY', overview: 'Understand how the body works, adapts and maintains balance.', status: 'available' },
    { id: 'anatomy', yearId: 'first-professional', title: 'Anatomy', short: 'ANA', overview: 'Explore structure, relationships and spatial organisation.', status: 'preview' },
    { id: 'biochemistry', yearId: 'first-professional', title: 'Biochemistry', short: 'BIO', overview: 'Connect molecules, metabolism and cellular function.', status: 'preview' },
  ],
  systems: [
    { id: 'general-physiology', subjectId: 'physiology', title: 'General Physiology', status: 'preview' },
    { id: 'cardiovascular', subjectId: 'physiology', title: 'Cardiovascular System', status: 'available' },
    { id: 'respiratory', subjectId: 'physiology', title: 'Respiratory System', status: 'preview' },
    { id: 'renal', subjectId: 'physiology', title: 'Renal Physiology', status: 'preview' },
    { id: 'nervous', subjectId: 'physiology', title: 'Nervous System', status: 'preview' },
    { id: 'endocrine', subjectId: 'physiology', title: 'Endocrine System', status: 'preview' },
  ],
};
