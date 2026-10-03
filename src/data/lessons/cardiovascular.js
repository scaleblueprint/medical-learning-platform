export const cardiovascularLessons = [
  {
    id: 'heart-as-a-pump',
    title: 'How does the heart actually move blood?',
    kicker: 'Start with the problem the body is solving.',
    minutes: 8,
    review: 'faculty-review-required',
    competency: 'Prototype mapping — verify against current NMC competency sheet',
    stages: {
      experience: {
        title: 'Your muscles suddenly need more oxygen',
        body: 'Imagine walking up several flights of stairs. Your muscles demand more oxygen and nutrients within seconds. The circulation must move more blood without you consciously controlling it.',
        prompt: 'What has to change first: the amount of blood moved, the route it takes, or both?'
      },
      predict: {
        question: 'If the body needs more oxygen each minute, what would you expect the heart to do?',
        options: ['Beat faster only', 'Pump more blood per beat only', 'Change both rate and amount per beat'],
        answer: 2,
        explanation: 'Both can change. Heart rate and stroke volume together determine how much blood the heart moves each minute.'
      },
      understand: {
        heading: 'The heart is two coordinated pumps',
        body: 'The right side sends blood toward the lungs. The left side sends oxygenated blood to the body. Valves keep flow moving in the intended direction while contraction and relaxation create pressure differences.'
      },
      connect: ['Anatomy: chambers and valves', 'Physiology: pressure and flow', 'Biochemistry: ATP supports contraction'],
      apply: {
        question: 'During exercise, venous return rises and the heart contracts more forcefully. What broad effect would you expect on blood moved per minute?',
        answer: 'It generally increases because the circulation is matching increased metabolic demand.'
      },
      check: {
        question: 'Which statement best describes the core job of the cardiovascular system?',
        options: ['Create oxygen', 'Transport substances between tissues', 'Digest nutrients', 'Produce hormones'],
        answer: 1
      }
    }
  },
  {
    id: 'cardiac-cycle',
    title: 'Understanding the cardiac cycle',
    kicker: 'Turn a memorised sequence into a pressure-and-flow story.',
    minutes: 10,
    review: 'faculty-review-required',
    competency: 'Prototype mapping — verify against current NMC competency sheet',
    stages: {
      experience: { title: 'Doors open because pressure changes', body: 'A valve does not need to decide when to open. It responds to pressure differences across it. That simple idea helps explain much of the cardiac cycle.', prompt: 'What would happen to a valve if pressure became greater behind it than in front of it?' },
      predict: { question: 'When ventricular pressure rises above atrial pressure, what should happen to the atrioventricular valves?', options: ['Open wider', 'Close', 'Remain unaffected'], answer: 1, explanation: 'They close as the pressure gradient reverses, helping prevent backward flow.' },
      understand: { heading: 'Follow pressure, then flow', body: 'The cardiac cycle alternates filling and ejection. Rather than memorising isolated phases, track which chamber has the greater pressure and which valves are therefore open or closed.' },
      connect: ['Anatomy: valve positions', 'Physiology: chamber pressures', 'Clinical examination: heart sounds'],
      apply: { question: 'If ventricular pressure has not yet exceeded arterial pressure, would ejection have started?', answer: 'No. The outflow valve opens only after the ventricular pressure becomes high enough to overcome the pressure beyond it.' },
      check: { question: 'What most directly determines whether a passive cardiac valve opens?', options: ['Electrical activity alone', 'Pressure difference across the valve', 'Blood oxygen level', 'Body temperature'], answer: 1 }
    }
  },
  {
    id: 'cardiac-output',
    title: 'Heart rate, stroke volume & cardiac output',
    kicker: 'Manipulate the two variables and watch the circulation respond.',
    minutes: 9,
    review: 'faculty-review-required',
    competency: 'Prototype mapping — verify against current NMC competency sheet',
    interactive: 'cardiac-output',
    stages: {
      experience: { title: 'How much blood moves in one minute?', body: 'A heart that beats more often or ejects more blood with each beat can move more blood per minute. Cardiac output captures this idea in one quantity.', prompt: 'Before seeing the equation, which two measurements would you combine?' },
      predict: { question: 'If heart rate increases while stroke volume stays the same, what happens to cardiac output?', options: ['It decreases', 'It increases', 'It must stay constant'], answer: 1, explanation: 'With stroke volume unchanged, more beats per minute means more volume moved per minute.' },
      understand: { heading: 'Cardiac output = heart rate × stroke volume', body: 'Heart rate is beats per minute. Stroke volume is volume ejected per beat. Multiplying them gives volume per minute. The relationship is useful for reasoning, but real physiology also includes limits and compensatory responses.' },
      connect: ['Autonomic nervous system: heart rate', 'Venous return: influences filling', 'Contractility: influences ejection'],
      apply: { question: 'A learner increases both heart rate and stroke volume in the model. What should happen to calculated cardiac output?', answer: 'It increases because both factors in the product increase.' },
      check: { question: 'A heart rate of 70 beats/min and stroke volume of 70 mL/beat gives approximately:', options: ['0.49 L/min', '4.9 L/min', '49 L/min', '490 L/min'], answer: 1 }
    }
  },
  {
    id: 'blood-pressure',
    title: 'Understanding blood pressure',
    kicker: 'See pressure as a consequence of flow meeting resistance.',
    minutes: 9,
    review: 'faculty-review-required',
    competency: 'Prototype mapping — verify against current NMC competency sheet',
    stages: {
      experience: { title: 'Flow through a network meets resistance', body: 'Blood leaves the heart and travels through vessels of very different sizes. Pressure helps drive that flow, while vessel properties influence resistance.', prompt: 'If small arteries become narrower, would you expect resistance to flow to rise or fall?' },
      predict: { question: 'If vascular resistance rises while other major factors are unchanged, which direction would arterial pressure tend to move?', options: ['Lower', 'Higher', 'No relationship'], answer: 1, explanation: 'Greater resistance to flow tends to require or produce a larger pressure gradient.' },
      understand: { heading: 'Think in relationships, not isolated numbers', body: 'Arterial pressure reflects the interaction of cardiac pumping, vascular resistance and blood volume, among other factors. The prototype uses simplified models to build intuition before adding physiological complexity.' },
      connect: ['Heart: generates flow', 'Arterioles: major resistance vessels', 'Kidneys: long-term volume regulation'],
      apply: { question: 'Why can two people with similar heart rates still have different blood pressures?', answer: 'Heart rate is only one contributor; stroke volume, vascular resistance, volume and regulatory mechanisms also matter.' },
      check: { question: 'Which vessels are especially important in adjusting peripheral resistance?', options: ['Arterioles', 'Large veins only', 'Capillaries only', 'Heart valves'], answer: 0 }
    }
  },
  {
    id: 'bp-regulation',
    title: 'How does the body regulate blood pressure?',
    kicker: 'Explore a feedback loop rather than memorising a list.',
    minutes: 11,
    review: 'faculty-review-required',
    competency: 'Prototype mapping — verify against current NMC competency sheet',
    stages: {
      experience: { title: 'Stand up quickly', body: 'When posture changes, gravity briefly redistributes blood. The body senses the resulting change and adjusts cardiovascular function rapidly.', prompt: 'What kind of control system is useful when a variable moves away from its desired range?' },
      predict: { question: 'A rapid fall in arterial pressure would normally trigger which broad response?', options: ['Responses that further lower pressure', 'Compensatory responses that support pressure', 'No short-term response'], answer: 1, explanation: 'Short-term cardiovascular reflexes act as negative-feedback systems that oppose the initial change.' },
      understand: { heading: 'Sense → integrate → respond', body: 'Pressure-sensitive receptors provide input to cardiovascular control centres, which alter autonomic output to the heart and blood vessels. The important learning pattern is the closed feedback loop.' },
      connect: ['Nervous system: autonomic control', 'Cardiovascular system: heart and vessels', 'Renal system: longer-term regulation'],
      apply: { question: 'Why is this a good example of negative feedback?', answer: 'Because the response acts in a direction that opposes the initial disturbance and supports restoration toward the regulated range.' },
      check: { question: 'A useful way to organise a homeostatic reflex is:', options: ['Stimulus → sensor → integrator → effector', 'Effector → stimulus → random response', 'Hormone → anatomy → memory', 'Pressure → digestion → movement'], answer: 0 }
    }
  }
];
