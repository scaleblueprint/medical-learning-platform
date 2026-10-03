export const diabetesTherapeuticArea = {
  id: 'diabetes',
  title: 'Diabetes through MBBS',
  shortTitle: 'Diabetes',
  status: 'prototype',
  review: 'faculty-review-required',
  subtitle: 'Follow one therapeutic area through the subjects and phases in which an MBBS student meets it.',
  curriculum: 'NMC CBME Curriculum 2024',
  curriculumNote: 'Phase and subject placement follows the current MBBS curriculum structure. Exact competency codes are shown only where verified; remaining mappings are explicitly pending faculty verification.',
  sourceUrl: 'https://www.nmc.org.in/wp-content/uploads/2026/02/12bCompetencyBasedMedicalEducationCBMECurriculum12092024.pdf',
  phases: [
    {
      id: 'phase-i',
      label: 'Phase I',
      yearLabel: 'First Professional',
      purpose: 'Build the normal physiology and biochemistry before learning the disease.',
      topics: [
        {
          id: 'glucose-homeostasis',
          subject: 'Physiology',
          title: 'How does the body normally control blood glucose?',
          kind: 'foundation',
          mapping: 'Phase I physiology integration — exact competency mapping pending faculty verification',
          question: 'After a meal, how does the body keep circulating glucose within a regulated range?',
          concepts: ['Fed vs fasting state', 'Pancreatic endocrine signals', 'Insulin and glucagon', 'Liver, muscle and adipose responses', 'Homeostasis and feedback'],
          flow: ['Meal', 'Blood glucose rises', 'Pancreatic response', 'Tissue response', 'Glucose returns toward regulated range'],
          analogy: {
            title: 'A city managing fuel after a delivery',
            simple: 'A large fuel delivery arrives after a meal. The control system decides what should be used now, stored, or released later.',
            medical: 'Insulin and glucagon coordinate tissue-specific handling of glucose between fed and fasting states.',
            limit: 'Insulin is not a universal “key” that simply opens every cell. Liver, muscle and adipose tissue respond differently and use different transport/control mechanisms.'
          },
          remember: 'Normal first: understand how glucose is regulated before asking what goes wrong in diabetes.',
          next: 'glucose-metabolism'
        },
        {
          id: 'glucose-metabolism',
          subject: 'Biochemistry',
          title: 'Where does glucose come from, go to and get stored?',
          kind: 'foundation',
          mapping: 'NMC 2024 Biochemistry — Chemistry and Metabolism of Carbohydrates; diabetes-related competency mapping pending faculty verification',
          question: 'How do carbohydrate pathways explain the rise, use, storage and production of glucose?',
          concepts: ['Glycolysis', 'Glycogenesis', 'Glycogenolysis', 'Gluconeogenesis', 'Carbohydrate metabolism in fed and fasting states'],
          flow: ['Dietary carbohydrate', 'Glucose', 'Immediate ATP use', 'Glycogen / storage pathways', 'Fasting glucose production'],
          analogy: {
            title: 'Income, spending, savings and emergency funds',
            simple: 'Glucose can be spent immediately, stored for later, or produced when incoming supply is low.',
            medical: 'Biochemical pathways shift with hormonal state so tissues can use, store or generate fuels appropriately.',
            limit: 'Metabolism is not one central bank account. Different tissues have different enzymes, priorities and fuel choices.'
          },
          remember: 'Glycolysis uses glucose; glycogenesis stores it; glycogenolysis releases stored glucose; gluconeogenesis makes new glucose.',
          next: 'diabetes-pathology'
        }
      ]
    },
    {
      id: 'phase-ii',
      label: 'Phase II',
      yearLabel: 'Second Professional',
      purpose: 'Move from normal regulation to disease mechanisms and drug actions.',
      topics: [
        {
          id: 'diabetes-pathology',
          subject: 'Pathology',
          title: 'What changes in diabetes, and how does persistent hyperglycaemia cause damage?',
          kind: 'core',
          mapping: 'Phase II Pathology — diabetes mellitus disease mechanisms and complications; exact competency mapping pending faculty verification',
          question: 'How do insulin deficiency, insulin resistance and chronic hyperglycaemia lead to characteristic pathology?',
          concepts: ['Type 1 vs Type 2 disease mechanisms', 'Insulin deficiency', 'Insulin resistance', 'Chronic hyperglycaemia', 'Microvascular and macrovascular complications'],
          flow: ['Disordered insulin action', 'Persistent hyperglycaemia', 'Metabolic / vascular stress', 'Tissue injury', 'Clinical complications'],
          analogy: {
            title: 'A transport network with a signalling problem',
            simple: 'Fuel is present in the circulation, but the system that decides how it is used and stored is impaired.',
            medical: 'Type 1 and Type 2 diabetes reach hyperglycaemia through different mechanisms; chronic exposure then affects multiple tissues.',
            limit: 'Type 1 and Type 2 diabetes are not simply “no insulin” versus “too much sugar.” Their pathogenesis is more complex and evolves over time.'
          },
          remember: 'Separate the mechanism that causes hyperglycaemia from the mechanisms by which long-term hyperglycaemia contributes to complications.',
          next: 'diabetes-pharmacology'
        },
        {
          id: 'diabetes-pharmacology',
          subject: 'Pharmacology',
          title: 'Where do diabetes medicines act in the physiology?',
          kind: 'core',
          mapping: 'PH7.1 — verified NMC 2024 Pharmacology competency',
          question: 'Instead of memorising drug lists, can you place each drug class onto the physiology it changes?',
          concepts: ['Insulin preparations', 'Insulin secretion', 'Insulin sensitivity', 'Hepatic glucose production', 'Renal glucose handling', 'Incretin-related pathways', 'Adverse drug reactions'],
          flow: ['Physiological problem', 'Drug target / mechanism', 'Glucose effect', 'Benefits and adverse effects', 'Patient-context considerations'],
          analogy: {
            title: 'Different repair teams for different parts of the system',
            simple: 'One treatment may reduce excess production, another improve signalling, another increase insulin availability, and another alter renal glucose handling.',
            medical: 'Antidiabetic drug classes act through different mechanisms and have different kinetics, adverse effects and clinical roles.',
            limit: 'The same drug class is not appropriate for every person. This learning map explains mechanisms, not individual treatment selection.'
          },
          remember: 'Learn the physiological problem first, then attach the drug class to the mechanism it modifies.',
          verifiedCompetency: 'PH7.1',
          next: 'diabetes-public-health'
        }
      ]
    },
    {
      id: 'phase-iii-a',
      label: 'Phase III Part I',
      yearLabel: 'Clinical integration I',
      purpose: 'See diabetes as a population-health problem and recognise important organ-specific consequences.',
      topics: [
        {
          id: 'diabetes-public-health',
          subject: 'Community Medicine',
          title: 'How is diabetes approached as a non-communicable disease?',
          kind: 'core',
          mapping: 'Phase III Part I Community Medicine — NCD prevention, screening and counselling; exact diabetes competency mapping pending faculty verification',
          question: 'What changes when the unit of thinking becomes a population rather than one patient?',
          concepts: ['Risk factors', 'Prevention', 'Screening principles', 'Lifestyle counselling', 'Population burden', 'Continuity of care'],
          flow: ['Population risk', 'Prevention', 'Screening', 'Early detection', 'Long-term follow-up'],
          analogy: {
            title: 'Fire prevention across a city, not just firefighting one building',
            simple: 'Clinical care treats individuals; public health also asks how to reduce risk and detect disease earlier across a community.',
            medical: 'Community Medicine frames diabetes within non-communicable disease prevention, screening, counselling and health-system follow-up.',
            limit: 'Screening is not the same as diagnosis, and population recommendations still require appropriate clinical confirmation.'
          },
          remember: 'Community Medicine asks who is at risk, how to prevent disease, who to screen and how systems support long-term care.',
          next: 'diabetic-retinopathy'
        },
        {
          id: 'diabetic-retinopathy',
          subject: 'Ophthalmology',
          title: 'Why does diabetes affect the retina?',
          kind: 'integrated',
          mapping: 'Phase III Part I Ophthalmology integration — diabetic retinopathy mapping pending faculty verification',
          question: 'How does a systemic metabolic disease become an eye disease?',
          concepts: ['Retinal microvasculature', 'Chronic hyperglycaemia', 'Microvascular damage', 'Retinopathy progression', 'Screening relevance'],
          flow: ['Chronic diabetes', 'Retinal microvascular stress', 'Retinal changes', 'Visual risk', 'Detection / follow-up'],
          analogy: {
            title: 'A delicate camera sensor supplied by tiny vessels',
            simple: 'The retina needs a precise microvascular supply; damage to that supply can progressively disturb the visual system.',
            medical: 'Diabetic retinopathy is a microvascular complication whose recognition and surveillance belong to ophthalmic care.',
            limit: 'The retina is living neural tissue, not a camera sensor; the analogy only helps locate why small-vessel damage matters.'
          },
          remember: 'Diabetes is systemic; complications reveal how chronic metabolic disturbance affects specialised organs.',
          next: 'clinical-diabetes'
        }
      ]
    },
    {
      id: 'phase-iii-b',
      label: 'Phase III Part II',
      yearLabel: 'Final Professional',
      purpose: 'Integrate mechanisms, diagnosis, complications and management principles in clinical medicine and special situations.',
      topics: [
        {
          id: 'clinical-diabetes',
          subject: 'General Medicine',
          title: 'Bring the whole diabetes story together clinically',
          kind: 'core',
          mapping: 'NMC 2024 General Medicine — dedicated Diabetes Mellitus topic; exact individual competency codes to be mapped during faculty review',
          question: 'How does a clinician connect symptoms, investigations, classification, complications and management principles?',
          concepts: ['Classification', 'Clinical presentation', 'Diagnostic investigations', 'Type 1 and Type 2 diabetes', 'Acute and chronic complications', 'Management principles', 'Monitoring'],
          flow: ['Presentation / risk', 'Investigate', 'Classify', 'Assess complications', 'Management plan', 'Monitoring'],
          analogy: {
            title: 'Assembling the full map after learning each district separately',
            simple: 'Earlier subjects taught the pieces. Medicine asks you to connect them around a real clinical problem.',
            medical: 'General Medicine integrates pathophysiology, diagnosis, complications, therapeutics and monitoring in patient care.',
            limit: 'Clinical decisions require individual history, examination, investigations and supervision; this prototype is educational, not patient-specific medical advice.'
          },
          remember: 'Final-year medicine is integration: recognise, investigate, classify, look for complications, manage and monitor.',
          next: 'gestational-diabetes'
        },
        {
          id: 'gestational-diabetes',
          subject: 'Obstetrics & Gynaecology',
          title: 'What changes when glucose intolerance appears in pregnancy?',
          kind: 'integrated',
          mapping: 'Phase III Part II Obstetrics integration — gestational diabetes mapping pending faculty verification',
          question: 'Why does pregnancy change glucose physiology, risk and monitoring?',
          concepts: ['Pregnancy-related insulin resistance', 'Maternal and fetal considerations', 'Screening / diagnosis concepts', 'Monitoring principles', 'Post-pregnancy follow-up'],
          flow: ['Pregnancy physiology', 'Altered insulin sensitivity', 'Hyperglycaemia risk', 'Maternal / fetal implications', 'Monitoring and follow-up'],
          analogy: {
            title: 'A system operating under a temporary new load',
            simple: 'Pregnancy changes metabolic demands and hormone signals, so glucose regulation is tested under different conditions.',
            medical: 'Gestational diabetes is a pregnancy-specific clinical context requiring obstetric and metabolic integration.',
            limit: 'Pregnancy physiology is not simply “extra insulin resistance”; diagnosis and management follow pregnancy-specific clinical guidance.'
          },
          remember: 'The disease concept is familiar, but pregnancy changes physiology, consequences and clinical priorities.',
          next: 'childhood-diabetes'
        },
        {
          id: 'childhood-diabetes',
          subject: 'Paediatrics',
          title: 'How does diabetes present and matter differently in children?',
          kind: 'integrated',
          mapping: 'Phase III Part II Paediatrics integration — childhood diabetes mapping pending faculty verification',
          question: 'How do age, growth, family support and Type 1 disease change the clinical picture?',
          concepts: ['Type 1 diabetes emphasis', 'Symptoms and presentation', 'Growth and development', 'Family / self-management education', 'Acute-risk awareness'],
          flow: ['Symptoms', 'Recognition', 'Confirm diagnosis', 'Insulin-dependent management principles', 'Growth / family follow-up'],
          analogy: {
            title: 'The same control problem inside a growing system',
            simple: 'The physiology of glucose is familiar, but the patient is still growing and depends on family, school and developmental support.',
            medical: 'Paediatric diabetes combines endocrine physiology with age-specific clinical, developmental and education needs.',
            limit: 'Children are not simply “small adults”; presentation, dosing, education and psychosocial context differ.'
          },
          remember: 'Paediatrics adds growth, development and family context to the diabetes framework.',
          next: null
        }
      ]
    }
  ]
};

export const diabetesTopics = diabetesTherapeuticArea.phases.flatMap(phase => phase.topics.map(topic => ({...topic, phaseId: phase.id, phaseLabel: phase.label, yearLabel: phase.yearLabel, phasePurpose: phase.purpose})));

export const getDiabetesTopic = (id) => diabetesTopics.find(topic => topic.id === id) || null;
