const SOURCES = {
  nmc: { label: 'National Medical Commission — CBME Curriculum 2024', url: 'https://nmc.org.in/page/rules-regulations-rules-regulations-nmc' },
  cardiacPhysiology: { label: 'OpenStax Anatomy & Physiology 2e — Cardiac Physiology', url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology' },
  vascularRegulation: { label: 'OpenStax Anatomy & Physiology 2e — Homeostatic Regulation of the Vascular System', url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-4-homeostatic-regulation-of-the-vascular-system' },
  cardiacCycle: { label: 'NCBI Bookshelf — Physiology, Cardiac Cycle', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459327/' },
  arterialPressure: { label: 'NCBI Bookshelf — Physiology, Arterial Pressure Regulation', url: 'https://www.ncbi.nlm.nih.gov/books/NBK538509/' },
};

export const cardiovascularLessons = [
  {
    id: 'heart-as-a-pump',
    title: 'How does the heart actually move blood?',
    kicker: 'Start with the problem the body is solving, then build the pump mechanics.',
    minutes: 22,
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
        heading: 'The heart is two coordinated pumps arranged in series',
        body: 'The right heart receives systemic venous blood and sends it through the pulmonary circulation. The left heart receives pulmonary venous blood and sends it through the systemic circulation. Blood moves because pressure differs between connected regions, while valves favor forward flow by opening and closing in response to pressure gradients.'
      },
      connect: ['Anatomy: chambers, septa and valves', 'Physiology: pressure, flow and ventricular function', 'Biochemistry: ATP-dependent excitation–contraction coupling'],
      apply: {
        question: 'During exercise, venous return rises and the heart contracts more forcefully. What broad effect would you expect on blood moved per minute?',
        answer: 'Cardiac output generally rises because the circulation is matching increased tissue metabolic demand through changes in heart rate and stroke volume.'
      },
      check: {
        question: 'Which statement best describes the core job of the cardiovascular system?',
        options: ['Create oxygen', 'Transport substances between tissues', 'Digest nutrients', 'Produce hormones'],
        answer: 1
      }
    },
    study: {
      objectives: [
        'Trace blood through the right heart, pulmonary circulation, left heart and systemic circulation.',
        'Explain how pressure gradients and valves produce directional blood flow.',
        'Distinguish filling from ejection and relate them to diastole and systole.',
        'Describe how preload, contractility and afterload influence ventricular pumping.'
      ],
      prerequisites: [
        'Basic anatomy of the four cardiac chambers and four major valves.',
        'The idea that fluids flow from higher pressure toward lower pressure when a pathway is open.',
        'A basic distinction between pulmonary and systemic circulation.'
      ],
      mechanisms: [
        {
          title: 'Two circulations, one continuous loop',
          body: 'The right and left sides of the heart work in series. Over time, the amount entering and leaving each side must match closely; otherwise blood would progressively accumulate in one circulation.',
          points: ['Right ventricle → pulmonary circulation → left atrium.', 'Left ventricle → systemic circulation → right atrium.', 'The pulmonary circuit normally operates at lower pressures than the systemic circuit.']
        },
        {
          title: 'Filling depends on pressure differences',
          body: 'During ventricular relaxation, ventricular pressure falls. When atrial pressure exceeds ventricular pressure, the atrioventricular valves open and ventricular filling can occur. Atrial contraction contributes additional filling near the end of ventricular diastole.'
        },
        {
          title: 'Ejection begins only after pressure is high enough',
          body: 'When ventricular contraction begins, ventricular pressure rises. The atrioventricular valves close once ventricular pressure exceeds atrial pressure. Ejection begins only when ventricular pressure exceeds pressure in the pulmonary artery or aorta and the semilunar valve opens.'
        },
        {
          title: 'Pump performance is not determined by heart rate alone',
          body: 'Ventricular output also depends on filling, contractile state and the pressure the ventricle must eject against. These are commonly organized using the concepts of preload, contractility and afterload.'
        }
      ],
      relationships: [
        { formula: 'Flow = pressure difference ÷ resistance', meaning: 'A useful simplified relationship for understanding why a pressure gradient is required to move blood through the circulation.', note: 'Real cardiovascular flow is pulsatile and vessel properties add complexity, so this is a conceptual starting model.' }
      ],
      terms: [
        { term: 'Systole', meaning: 'The period associated with ventricular contraction and ejection.' },
        { term: 'Diastole', meaning: 'The period associated with ventricular relaxation and filling.' },
        { term: 'Preload', meaning: 'The degree of ventricular filling/stretch before contraction, commonly related to end-diastolic volume.' },
        { term: 'Afterload', meaning: 'The load the ventricle must overcome to eject blood.' },
        { term: 'Contractility', meaning: 'The intrinsic ability of myocardium to generate force at a given loading condition.' }
      ],
      misconceptions: [
        { myth: 'The valves actively pull themselves open.', correction: 'Normal cardiac valves mainly open and close because pressure gradients across them change.' },
        { myth: 'The right and left hearts pump unrelated amounts of blood.', correction: 'They operate in series, so their average outputs must remain closely matched over time.' },
        { myth: 'A faster heart rate always means better cardiac output.', correction: 'Extremely rapid rates can reduce filling time; cardiac output depends on both rate and stroke volume.' }
      ],
      viva: [
        { question: 'Why are cardiac valves important if blood already flows from high to low pressure?', answer: 'They help ensure that the available pressure gradient produces forward rather than backward flow.' },
        { question: 'Why is left ventricular work greater than right ventricular work?', answer: 'The left ventricle ejects into the higher-resistance systemic circulation and therefore generates much higher pressures.' },
        { question: 'Name three major determinants of stroke volume.', answer: 'Preload, contractility and afterload are the classic organizing determinants.' }
      ],
      summary: [
        'The right and left sides of the heart are pumps in series.',
        'Pressure gradients determine when valves open and where blood flows.',
        'Diastole supports ventricular filling; systole supports ventricular ejection.',
        'Pump performance depends on loading conditions and contractile state, not just heart rate.'
      ],
      sources: [SOURCES.nmc, SOURCES.cardiacPhysiology]
    }
  },
  {
    id: 'cardiac-cycle',
    title: 'Understanding the cardiac cycle',
    kicker: 'Turn a memorised sequence into a pressure, volume, valve and heart-sound story.',
    minutes: 28,
    review: 'faculty-review-required',
    competency: 'Prototype mapping — verify against current NMC competency sheet',
    stages: {
      experience: { title: 'Doors open because pressure changes', body: 'A valve does not need to decide when to open. It responds to pressure differences across it. That simple idea helps explain much of the cardiac cycle.', prompt: 'What would happen to a valve if pressure became greater behind it than in front of it?' },
      predict: { question: 'When ventricular pressure rises above atrial pressure, what should happen to the atrioventricular valves?', options: ['Open wider', 'Close', 'Remain unaffected'], answer: 1, explanation: 'They close as the pressure gradient reverses, helping prevent backward flow.' },
      understand: { heading: 'Follow four signals together: pressure, volume, valves and heart sounds', body: 'The cardiac cycle is best understood by tracking how atrial, ventricular and arterial pressures change, how ventricular volume changes, which valves are open or closed, and when the major heart sounds occur.' },
      connect: ['Anatomy: valve position and chamber geometry', 'Physiology: pressure–volume events', 'Clinical examination: timing of S1 and S2'],
      apply: { question: 'If ventricular pressure has not yet exceeded arterial pressure, would ejection have started?', answer: 'No. The semilunar valve opens only after ventricular pressure rises above the pressure in the artery beyond it.' },
      check: { question: 'What most directly determines whether a passive cardiac valve opens?', options: ['Electrical activity alone', 'Pressure difference across the valve', 'Blood oxygen level', 'Body temperature'], answer: 1 }
    },
    study: {
      objectives: [
        'List the major phases of the cardiac cycle in correct sequence.',
        'Relate valve opening/closure to pressure gradients.',
        'Explain how ventricular volume changes during filling and ejection.',
        'Relate S1 and S2 to mechanical events of the cycle.'
      ],
      prerequisites: ['Four cardiac chambers and valves.', 'Basic meaning of systole and diastole.', 'Basic distinction between electrical activation and mechanical contraction.'],
      mechanisms: [
        {
          title: 'Ventricular filling',
          body: 'When ventricular pressure is below atrial pressure, the atrioventricular valves are open and the semilunar valves are closed. Filling is initially rapid, then slows; atrial systole contributes the final part of filling.'
        },
        {
          title: 'Isovolumetric contraction',
          body: 'Ventricular contraction begins and the atrioventricular valves close. All valves are briefly closed, so ventricular pressure rises while ventricular volume remains essentially unchanged. Closure of the atrioventricular valves contributes to the first heart sound, S1.'
        },
        {
          title: 'Ventricular ejection',
          body: 'When ventricular pressure exceeds aortic or pulmonary arterial pressure, the corresponding semilunar valve opens. Ventricular volume falls as blood is ejected. Ejection is more rapid early and slower later in systole.'
        },
        {
          title: 'Isovolumetric relaxation',
          body: 'As ventricular muscle relaxes, ventricular pressure falls. The semilunar valves close when arterial pressure exceeds ventricular pressure; this contributes to S2. With all valves closed, pressure falls at nearly constant ventricular volume until the atrioventricular valve can open again.'
        }
      ],
      relationships: [
        { formula: 'Stroke volume = end-diastolic volume − end-systolic volume', meaning: 'The volume ejected by a ventricle in one beat is the difference between the volume before ejection and the volume remaining after ejection.' }
      ],
      terms: [
        { term: 'End-diastolic volume (EDV)', meaning: 'Ventricular volume at the end of filling, just before systolic ejection begins.' },
        { term: 'End-systolic volume (ESV)', meaning: 'Volume remaining in the ventricle after systolic ejection.' },
        { term: 'Isovolumetric contraction', meaning: 'Early systole when pressure rises while all valves are closed and ventricular volume does not change appreciably.' },
        { term: 'Isovolumetric relaxation', meaning: 'Early diastole when pressure falls while all valves are closed and ventricular volume does not change appreciably.' },
        { term: 'S1', meaning: 'The first heart sound, associated mainly with closure of the mitral and tricuspid valves near the onset of ventricular systole.' },
        { term: 'S2', meaning: 'The second heart sound, associated mainly with closure of the aortic and pulmonary valves near the end of ventricular systole.' }
      ],
      misconceptions: [
        { myth: 'Valves open because an electrical impulse reaches the valve.', correction: 'Valve movement is primarily driven by pressure gradients; electrical activity affects the myocardium, which then changes pressures.' },
        { myth: 'Ventricular contraction immediately causes ejection.', correction: 'There is first an isovolumetric phase in which pressure rises with all valves closed.' },
        { myth: 'S1 and S2 are produced by blood hitting chamber walls.', correction: 'They reflect vibrations associated with valve closure and the surrounding cardiohemic system.' }
      ],
      viva: [
        { question: 'What is happening to ventricular volume during isovolumetric contraction?', answer: 'It is essentially unchanged because both inlet and outlet valves are closed.' },
        { question: 'What event marks the beginning of ventricular ejection?', answer: 'Ventricular pressure exceeds arterial pressure and the appropriate semilunar valve opens.' },
        { question: 'Why does S2 occur near the end of systole?', answer: 'Falling ventricular pressure allows arterial pressure to exceed ventricular pressure, closing the semilunar valves.' }
      ],
      summary: [
        'Track pressure first; valve position follows the pressure gradient.',
        'All valves are closed during the two isovolumetric phases.',
        'Ventricular volume rises during filling and falls during ejection.',
        'S1 accompanies atrioventricular valve closure; S2 accompanies semilunar valve closure.'
      ],
      sources: [SOURCES.nmc, SOURCES.cardiacCycle, SOURCES.cardiacPhysiology]
    }
  },
  {
    id: 'cardiac-output',
    title: 'Heart rate, stroke volume & cardiac output',
    kicker: 'Manipulate the two variables, then understand what determines each one.',
    minutes: 24,
    review: 'faculty-review-required',
    competency: 'Prototype mapping — verify against current NMC competency sheet',
    interactive: 'cardiac-output',
    stages: {
      experience: { title: 'How much blood moves in one minute?', body: 'A heart that beats more often or ejects more blood with each beat can move more blood per minute. Cardiac output captures this idea in one quantity.', prompt: 'Before seeing the equation, which two measurements would you combine?' },
      predict: { question: 'If heart rate increases while stroke volume stays the same, what happens to cardiac output?', options: ['It decreases', 'It increases', 'It must stay constant'], answer: 1, explanation: 'With stroke volume unchanged, more beats per minute means more volume moved per minute.' },
      understand: { heading: 'Cardiac output combines rate with volume per beat', body: 'Cardiac output is the volume ejected by one ventricle per minute. It equals heart rate multiplied by stroke volume. Stroke volume itself reflects ventricular filling, contractility and afterload, so cardiac output is the result of several interacting mechanisms.' },
      connect: ['Autonomic nervous system: modifies heart rate and contractility', 'Venous return: influences preload and stroke volume', 'Vascular load: influences afterload and ejection'],
      apply: { question: 'A learner increases both heart rate and stroke volume in the model. What should happen to calculated cardiac output?', answer: 'It increases because both factors in the product increase.' },
      check: { question: 'A heart rate of 70 beats/min and stroke volume of 70 mL/beat gives approximately:', options: ['0.49 L/min', '4.9 L/min', '49 L/min', '490 L/min'], answer: 1 }
    },
    study: {
      objectives: [
        'Define cardiac output and stroke volume.',
        'Calculate cardiac output from heart rate and stroke volume.',
        'Explain how preload, contractility and afterload alter stroke volume.',
        'Explain why changes in heart rate do not always translate linearly into output in real physiology.'
      ],
      prerequisites: ['Cardiac cycle and ventricular filling/ejection.', 'Basic autonomic control of heart rate.', 'Meaning of end-diastolic and end-systolic volume.'],
      mechanisms: [
        {
          title: 'Heart rate sets how often the pump cycles',
          body: 'Within a physiological range, an increase in heart rate can increase output if stroke volume is maintained. At very high rates, shortened diastole can limit ventricular filling and may reduce stroke volume.'
        },
        {
          title: 'Preload influences force through the Frank–Starling mechanism',
          body: 'Greater ventricular filling within physiological limits increases myocardial fiber stretch before contraction and can increase the force of contraction and stroke volume.'
        },
        {
          title: 'Contractility changes ejection at a given loading condition',
          body: 'Increased sympathetic stimulation can increase myocardial contractility, tending to reduce end-systolic volume and increase stroke volume when other factors are comparable.'
        },
        {
          title: 'Afterload opposes ejection',
          body: 'A greater pressure load against which the ventricle must eject tends to make ejection more difficult and can reduce stroke volume if compensatory mechanisms do not offset it.'
        }
      ],
      relationships: [
        { formula: 'Cardiac output = heart rate × stroke volume', meaning: 'Volume per minute equals beats per minute multiplied by volume ejected per beat.' },
        { formula: 'Stroke volume = EDV − ESV', meaning: 'Stroke volume is the difference between ventricular volume before and after ejection.' }
      ],
      typicalValues: [
        { label: 'Resting heart rate', value: 'about 60–100 beats/min', note: 'A broad resting adult teaching range; trained individuals may be lower.' },
        { label: 'Stroke volume', value: 'about 55–100 mL/beat', note: 'Varies substantially with body size, posture, exercise and loading conditions.' },
        { label: 'Cardiac output', value: 'about 4–8 L/min at rest', note: 'A broad adult teaching range; exercise can increase output markedly.' }
      ],
      terms: [
        { term: 'Cardiac output', meaning: 'Volume of blood pumped by one ventricle per minute.' },
        { term: 'Stroke volume', meaning: 'Volume ejected by one ventricle in one beat.' },
        { term: 'Ejection fraction', meaning: 'The fraction of end-diastolic volume ejected during systole, usually expressed as a percentage.' },
        { term: 'Frank–Starling mechanism', meaning: 'The intrinsic tendency of the heart to increase force of contraction when ventricular filling increases within physiological limits.' }
      ],
      misconceptions: [
        { myth: 'Doubling heart rate always doubles cardiac output.', correction: 'That is true only if stroke volume stays unchanged; real physiology may alter filling and stroke volume.' },
        { myth: 'Stroke volume is fixed.', correction: 'It changes with preload, contractility, afterload and physiological state.' },
        { myth: 'Cardiac output means the combined output of both ventricles added together.', correction: 'It is conventionally the output of either ventricle per minute; in steady state right and left ventricular outputs are approximately equal.' }
      ],
      viva: [
        { question: 'What is the equation for cardiac output?', answer: 'Cardiac output equals heart rate multiplied by stroke volume.' },
        { question: 'What happens to stroke volume when end-systolic volume falls but end-diastolic volume is unchanged?', answer: 'Stroke volume rises because SV = EDV − ESV.' },
        { question: 'Why can a very high heart rate reduce stroke volume?', answer: 'It shortens diastolic filling time, which may reduce ventricular filling.' }
      ],
      summary: [
        'Cardiac output combines how often the heart beats with how much it ejects each beat.',
        'Stroke volume depends on preload, contractility and afterload.',
        'Venous return and ventricular filling are central to output regulation.',
        'Simple equations support reasoning, but real physiological variables interact dynamically.'
      ],
      sources: [SOURCES.nmc, SOURCES.cardiacPhysiology]
    }
  },
  {
    id: 'blood-pressure',
    title: 'Understanding blood pressure',
    kicker: 'Connect arterial pressure to flow, resistance and arterial properties.',
    minutes: 25,
    review: 'faculty-review-required',
    competency: 'Prototype mapping — verify against current NMC competency sheet',
    stages: {
      experience: { title: 'Flow through a network meets resistance', body: 'Blood leaves the heart and travels through vessels of very different sizes. Pressure helps drive that flow, while vessel properties influence resistance.', prompt: 'If small arteries become narrower, would you expect resistance to flow to rise or fall?' },
      predict: { question: 'If vascular resistance rises while other major factors are unchanged, which direction would arterial pressure tend to move?', options: ['Lower', 'Higher', 'No relationship'], answer: 1, explanation: 'Greater resistance to flow tends to increase the pressure required to maintain a given flow and can raise arterial pressure when other determinants are unchanged.' },
      understand: { heading: 'Arterial pressure reflects flow meeting vascular resistance', body: 'Arterial pressure is generated by intermittent ventricular ejection into an elastic arterial system and shaped by runoff into the peripheral circulation. Cardiac output, total peripheral resistance, arterial compliance and blood volume all contribute to the pressure waveform and its mean level.' },
      connect: ['Heart: generates pulsatile flow', 'Arterioles: major adjustable resistance vessels', 'Kidneys: regulate body fluid volume over longer time scales'],
      apply: { question: 'Why can two people with similar heart rates still have different blood pressures?', answer: 'Heart rate is only one contributor. Stroke volume, cardiac output, vascular resistance, arterial compliance, blood volume and regulatory mechanisms also influence arterial pressure.' },
      check: { question: 'Which vessels are especially important in adjusting peripheral resistance?', options: ['Arterioles', 'Large veins only', 'Capillaries only', 'Heart valves'], answer: 0 }
    },
    study: {
      objectives: [
        'Define systolic, diastolic, pulse and mean arterial pressure.',
        'Relate mean arterial pressure conceptually to cardiac output and total peripheral resistance.',
        'Explain why arteriolar radius strongly affects resistance.',
        'Distinguish determinants of pulse pressure from determinants of mean pressure.'
      ],
      prerequisites: ['Cardiac output.', 'Basic vessel structure and the arterial–arteriolar–capillary–venous sequence.', 'The concepts of pressure gradient and resistance to flow.'],
      mechanisms: [
        {
          title: 'Systolic and diastolic pressures are points on a pulsatile waveform',
          body: 'Systolic pressure is the peak arterial pressure reached during ventricular systole. Diastolic pressure is the lowest arterial pressure reached before the next systolic rise. Elastic recoil of large arteries helps maintain pressure and flow during diastole.'
        },
        {
          title: 'Mean arterial pressure represents the time-averaged driving pressure',
          body: 'Because the heart spends different amounts of time in systole and diastole, mean arterial pressure is not simply the arithmetic average of systolic and diastolic pressure. A common resting approximation uses diastolic pressure plus about one third of pulse pressure.'
        },
        {
          title: 'Arterioles are key resistance vessels',
          body: 'Small changes in arteriolar radius can markedly change resistance. This allows local metabolic control and sympathetic vascular control to redistribute blood flow and influence systemic vascular resistance.'
        },
        {
          title: 'Pulse pressure is influenced by stroke volume and arterial compliance',
          body: 'A larger stroke volume tends to increase the systolic rise in pressure, while reduced arterial compliance causes a given ejected volume to produce a larger pressure change.'
        }
      ],
      relationships: [
        { formula: 'Pulse pressure = systolic pressure − diastolic pressure', meaning: 'The size of the arterial pressure swing during each cardiac cycle.' },
        { formula: 'MAP ≈ diastolic pressure + ⅓ pulse pressure', meaning: 'A commonly used resting approximation when heart rate is in a usual physiological range.', note: 'The approximation becomes less accurate when the duration of systole and diastole changes substantially.' },
        { formula: 'MAP ≈ cardiac output × total peripheral resistance', meaning: 'A simplified systemic relationship used to organize the major determinants of mean arterial pressure.', note: 'Central venous pressure is often small relative to mean arterial pressure in this conceptual model.' },
        { formula: 'Flow = pressure difference ÷ resistance', meaning: 'For a vascular bed, flow depends on the pressure gradient across the bed and its resistance.' }
      ],
      terms: [
        { term: 'Systolic arterial pressure', meaning: 'Peak arterial pressure during the cardiac cycle.' },
        { term: 'Diastolic arterial pressure', meaning: 'Lowest arterial pressure before the next systolic rise.' },
        { term: 'Pulse pressure', meaning: 'Difference between systolic and diastolic pressure.' },
        { term: 'Mean arterial pressure (MAP)', meaning: 'Time-averaged arterial pressure over the cardiac cycle.' },
        { term: 'Total peripheral resistance (TPR)', meaning: 'The overall resistance to systemic blood flow, strongly influenced by arteriolar tone.' },
        { term: 'Compliance', meaning: 'Change in volume produced by a given change in pressure; large elastic arteries are important pressure reservoirs.' }
      ],
      misconceptions: [
        { myth: 'Blood pressure is determined mainly by heart rate.', correction: 'It reflects interacting effects of cardiac output, vascular resistance, arterial compliance, blood volume and regulation.' },
        { myth: 'Systolic and diastolic pressure should simply be averaged to get MAP.', correction: 'Diastole usually occupies more of the cardiac cycle at ordinary resting rates, so MAP is weighted toward diastolic pressure.' },
        { myth: 'Large arteries are the main site of adjustable peripheral resistance.', correction: 'Arterioles are the major adjustable resistance vessels in the systemic circulation.' }
      ],
      viva: [
        { question: 'What is pulse pressure?', answer: 'Systolic pressure minus diastolic pressure.' },
        { question: 'Why do arterioles have a large influence on total peripheral resistance?', answer: 'Their small muscular lumens can change radius substantially, causing large changes in resistance.' },
        { question: 'Why does arterial compliance matter?', answer: 'It determines how much pressure changes for a given change in arterial volume and helps smooth pulsatile ventricular ejection.' }
      ],
      summary: [
        'Blood pressure is a dynamic result of cardiac pumping and vascular properties.',
        'Arterioles provide a major adjustable component of systemic resistance.',
        'Pulse pressure and mean arterial pressure describe different features of the arterial pressure waveform.',
        'Use equations as organizing relationships, not as substitutes for physiological reasoning.'
      ],
      sources: [SOURCES.nmc, SOURCES.vascularRegulation, SOURCES.cardiacPhysiology]
    }
  },
  {
    id: 'bp-regulation',
    title: 'How does the body regulate blood pressure?',
    kicker: 'Follow rapid neural feedback, then connect it to longer-term volume control.',
    minutes: 30,
    review: 'faculty-review-required',
    competency: 'Prototype mapping — verify against current NMC competency sheet',
    stages: {
      experience: { title: 'Stand up quickly', body: 'When posture changes, gravity briefly redistributes blood toward dependent regions. Venous return and arterial pressure can fall transiently, so rapid compensatory mechanisms are needed to support cerebral perfusion and systemic pressure.', prompt: 'What kind of control system is useful when a regulated variable suddenly moves away from its usual range?' },
      predict: { question: 'A rapid fall in arterial pressure would normally trigger which broad response?', options: ['Responses that further lower pressure', 'Compensatory responses that support pressure', 'No short-term response'], answer: 1, explanation: 'Short-term cardiovascular reflexes act as negative-feedback systems that oppose the initial change.' },
      understand: { heading: 'Sense → integrate → alter autonomic output → restore pressure', body: 'Arterial baroreceptors detect stretch in the carotid sinus and aortic arch. Their sensory input reaches medullary cardiovascular centers, which adjust sympathetic and parasympathetic activity to the heart and blood vessels. Longer-term pressure control also depends strongly on renal regulation of sodium, water and blood volume.' },
      connect: ['Nervous system: baroreceptor afferents and autonomic efferents', 'Cardiovascular system: heart rate, contractility and vascular tone', 'Renal/endocrine systems: longer-term volume and hormonal regulation'],
      apply: { question: 'Why is the baroreceptor reflex a good example of negative feedback?', answer: 'Because the response generated by a pressure disturbance acts in a direction that opposes the initial change and supports restoration toward the regulated range.' },
      check: { question: 'A useful way to organise a homeostatic reflex is:', options: ['Stimulus → sensor → integrator → effector', 'Effector → stimulus → random response', 'Hormone → anatomy → memory', 'Pressure → digestion → movement'], answer: 0 }
    },
    study: {
      objectives: [
        'Describe the components of the arterial baroreceptor reflex.',
        'Predict autonomic responses to an acute rise or fall in arterial pressure.',
        'Explain how heart rate, contractility and vascular tone participate in short-term compensation.',
        'Distinguish rapid neural regulation from slower renal and hormonal regulation.'
      ],
      prerequisites: ['Mean arterial pressure and total peripheral resistance.', 'Autonomic effects on heart rate and vascular smooth muscle.', 'Basic location of carotid sinus, aortic arch and medulla.'],
      mechanisms: [
        {
          title: 'Sensors: arterial baroreceptors detect stretch',
          body: 'Stretch-sensitive receptors in the carotid sinus and aortic arch alter their firing rate as arterial wall stretch changes. More pressure generally means more stretch and a higher afferent firing rate; less pressure means the opposite.'
        },
        {
          title: 'Afferent pathways carry the signal to the brainstem',
          body: 'Carotid sinus afferent information travels mainly through the glossopharyngeal nerve, while aortic arch afferent information travels mainly through the vagus nerve. These inputs are integrated in medullary cardiovascular control networks.'
        },
        {
          title: 'A fall in pressure increases sympathetic support',
          body: 'Reduced baroreceptor firing favors increased sympathetic and reduced parasympathetic activity. Heart rate and contractility can rise, arterioles constrict to raise systemic resistance, and venous constriction can support venous return.'
        },
        {
          title: 'A rise in pressure produces the opposite short-term pattern',
          body: 'Increased baroreceptor firing favors reduced sympathetic and increased parasympathetic influence, lowering cardiac drive and reducing vascular tone so arterial pressure moves back toward its prior range.'
        },
        {
          title: 'Longer-term pressure control depends heavily on body-fluid balance',
          body: 'Over hours to days, the kidneys regulate sodium and water excretion and therefore extracellular fluid and blood volume. Hormonal systems such as the renin–angiotensin–aldosterone system and vasopressin interact with renal and vascular mechanisms.'
        }
      ],
      relationships: [
        { formula: 'Acute pressure fall → ↓ baroreceptor firing → ↑ sympathetic / ↓ parasympathetic drive', meaning: 'A reasoning chain for predicting the rapid reflex response.' },
        { formula: 'Acute pressure rise → ↑ baroreceptor firing → ↓ sympathetic / ↑ parasympathetic drive', meaning: 'The opposite reasoning chain for an acute pressure increase.' }
      ],
      terms: [
        { term: 'Baroreceptor', meaning: 'A stretch-sensitive mechanoreceptor that signals changes in vessel or chamber distension.' },
        { term: 'Carotid sinus', meaning: 'A region near the origin of the internal carotid artery containing important high-pressure arterial baroreceptors.' },
        { term: 'Aortic arch baroreceptors', meaning: 'Stretch receptors in the aortic arch that contribute afferent information about arterial pressure.' },
        { term: 'Negative feedback', meaning: 'A control pattern in which the response opposes the initiating disturbance.' },
        { term: 'Renin–angiotensin–aldosterone system', meaning: 'A hormonal system linking renal perfusion/sodium handling with vascular tone and sodium retention.' }
      ],
      misconceptions: [
        { myth: 'Baroreceptors directly constrict blood vessels.', correction: 'They are sensors; autonomic efferent pathways and vascular smooth muscle produce the effector response.' },
        { myth: 'The baroreceptor reflex is the main mechanism setting arterial pressure over weeks and months.', correction: 'It is especially important for rapid buffering; renal-body fluid mechanisms are central to longer-term pressure regulation.' },
        { myth: 'Standing up should normally cause a sustained fall in arterial pressure.', correction: 'A transient gravitational challenge usually triggers compensatory neural responses that help restore pressure and perfusion.' }
      ],
      viva: [
        { question: 'What happens to baroreceptor firing when arterial pressure falls?', answer: 'Arterial stretch and baroreceptor firing decrease.' },
        { question: 'Which cranial nerves carry the major carotid sinus and aortic arch baroreceptor afferents?', answer: 'Glossopharyngeal nerve for the carotid sinus and vagus nerve for the aortic arch.' },
        { question: 'Why are kidneys important for long-term arterial pressure?', answer: 'They regulate sodium and water balance, which strongly influences extracellular fluid volume, blood volume and long-term pressure.' }
      ],
      summary: [
        'Baroreceptors provide rapid feedback about arterial stretch.',
        'Pressure falls generally increase sympathetic and reduce parasympathetic influence; pressure rises do the opposite.',
        'Short-term regulation changes cardiac function and vascular tone.',
        'Long-term regulation is strongly linked to renal sodium/water handling and hormonal systems.'
      ],
      sources: [SOURCES.nmc, SOURCES.arterialPressure, SOURCES.vascularRegulation]
    }
  }
];
