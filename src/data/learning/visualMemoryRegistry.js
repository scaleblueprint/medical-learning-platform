export const cardiovascularVisualMemory = {
  'heart-as-a-pump': {
    diagram: 'circulation-loop',
    title: 'See the circulation as two pumps in one loop',
    subtitle: 'Follow one continuous route instead of memorising four chambers separately.',
    analogy: {
      title: 'Think of two pumping stations in series',
      everyday: 'Imagine two pumps connected in one water circuit. The first sends fluid to a treatment unit; the second sends it to the entire building. If either pump stops moving fluid forward, the whole circuit is affected.',
      medical: 'The right heart sends blood through the pulmonary circulation. The left heart sends blood through the systemic circulation. Both pumps normally move closely matched average volumes over time.',
      limit: 'The heart is not a rigid mechanical pump: filling, contraction, vascular resistance, autonomic control and myocardial properties all interact.'
    },
    memory: {
      rule: 'Right → lungs. Left → body. Pressure gradients open the path.',
      cues: ['Right heart = pulmonary pump', 'Left heart = systemic pump', 'Filling needs inlet pressure > ventricular pressure', 'Ejection needs ventricular pressure > arterial pressure']
    },
    redraw: {
      title: 'Redraw this in 20 seconds',
      steps: ['Draw four boxes in a loop: Body → Right heart → Lungs → Left heart.', 'Add arrows showing one-way flow.', 'Write “low-pressure pulmonary” near the lungs and “high-pressure systemic” near the body.', 'Add AV valves on the filling side and semilunar valves on the outflow side.']
    },
    viva: [
      { question: 'Why are the right and left sides called pumps in series?', oneLine: 'Blood leaving one side must pass through a circulation before returning to the other side.', buildOut: ['Right ventricle ejects into pulmonary circulation.', 'Pulmonary veins return blood to the left atrium.', 'Left ventricle ejects into systemic circulation.', 'Systemic veins return blood to the right atrium.'] },
      { question: 'What mainly makes a cardiac valve open?', oneLine: 'A favorable pressure gradient across the valve.', buildOut: ['Valves do not require their own active contraction.', 'They move according to pressure differences and leaflet mechanics.', 'The surrounding myocardial contraction changes those pressures.'] }
    ]
  },
  'cardiac-cycle': {
    diagram: 'cycle-wheel',
    title: 'Turn the cardiac cycle into four repeating states',
    subtitle: 'Track valves, pressure and volume together rather than learning isolated phase names.',
    analogy: {
      title: 'Think of a room with an entrance door and an exit door',
      everyday: 'A room fills when the entrance can open and empties when the exit can open. Between those moments, both doors can be shut while pressure inside the room changes.',
      medical: 'The ventricle fills through an AV valve, develops pressure with all valves closed, ejects through a semilunar valve, then relaxes with all valves closed before filling restarts.',
      limit: 'Cardiac valves respond to pressure gradients rather than being timed doors, and actual pressure/flow curves are continuous rather than four perfectly separated blocks.'
    },
    memory: {
      rule: 'Fill → squeeze closed → eject → relax closed.',
      cues: ['Filling: AV open', 'Isovolumetric contraction: all closed + S1', 'Ejection: semilunar open', 'Isovolumetric relaxation: all closed + S2']
    },
    redraw: {
      title: 'Redraw this in 20 seconds',
      steps: ['Draw a circle split into four quarters.', 'Label: Filling → Iso contraction → Ejection → Iso relaxation.', 'Mark AV OPEN only in filling.', 'Mark semilunar OPEN only in ejection; write S1 at AV closure and S2 at semilunar closure.']
    },
    viva: [
      { question: 'Why is ventricular volume unchanged during isovolumetric contraction?', oneLine: 'Both inlet and outlet valves are closed.', buildOut: ['The myocardium is contracting.', 'Pressure rises rapidly.', 'The AV valves have already closed.', 'The semilunar valves have not yet opened.'] },
      { question: 'What event starts ventricular ejection?', oneLine: 'Ventricular pressure rises above the pressure in the outflow artery.', buildOut: ['The pressure gradient reverses across the semilunar valve.', 'The semilunar valve opens.', 'Ventricular volume then begins to fall as blood is ejected.'] }
    ]
  },
  'cardiac-output': {
    diagram: 'output-equation',
    title: 'See cardiac output as frequency × amount per beat',
    subtitle: 'Separate “how often” from “how much each time,” then connect stroke volume to its determinants.',
    analogy: {
      title: 'Think of moving water with a bucket',
      everyday: 'Total water moved in one minute depends on how many bucket trips you make and how much water is carried on each trip.',
      medical: 'Heart rate is beats per minute. Stroke volume is volume ejected per beat. Multiplying them gives cardiac output, the volume ejected by one ventricle per minute.',
      limit: 'The heart is not an unlimited bucket system. Very high rates can shorten filling time, and stroke volume changes with preload, contractility and afterload.'
    },
    memory: {
      rule: 'CO = HR × SV; SV depends on preload, contractility and afterload.',
      cues: ['HR = beats/min', 'SV = mL/beat', 'CO = L/min', 'Very rapid HR may reduce filling time']
    },
    redraw: {
      title: 'Redraw this in 20 seconds',
      steps: ['Draw three boxes: HR × SV = CO.', 'Under SV, draw three branches: preload, contractility, afterload.', 'Add an up arrow beside preload and contractility as common reasons SV can rise.', 'Add a caution beside HR: “too fast → less filling time.”']
    },
    viva: [
      { question: 'Define cardiac output.', oneLine: 'The volume of blood ejected by one ventricle per minute.', buildOut: ['Cardiac output = heart rate × stroke volume.', 'It changes with metabolic demand and autonomic state.', 'Stroke volume is influenced by preload, contractility and afterload.'] },
      { question: 'Why may a very high heart rate fail to increase cardiac output further?', oneLine: 'Marked tachycardia can shorten diastolic filling time and reduce stroke volume.', buildOut: ['Less filling can reduce end-diastolic volume.', 'Lower filling can reduce stroke volume.', 'Therefore the simple HR × SV relationship must be interpreted with physiology, not as an unlimited linear rule.'] }
    ]
  },
  'blood-pressure': {
    diagram: 'pressure-pipe',
    title: 'See pressure as flow meeting resistance',
    subtitle: 'Link the heart’s output with the adjustable resistance of small arteries and arterioles.',
    analogy: {
      title: 'Think of a pump pushing water through adjustable pipes',
      everyday: 'A stronger pump can move more water, while narrowing an adjustable outlet makes it harder for water to pass. Both alter the pressure needed in the system.',
      medical: 'Cardiac output represents flow generated by the heart. Systemic vascular resistance reflects opposition to flow, with arterioles being especially important adjustable resistance vessels.',
      limit: 'Blood vessels are elastic and actively regulated, and arterial pressure also depends on blood volume, arterial compliance, viscosity and reflex/hormonal control.'
    },
    memory: {
      rule: 'Pressure tendency rises when flow rises or resistance rises, all else equal.',
      cues: ['Heart → flow', 'Arterioles → adjustable resistance', 'SBP = systolic peak', 'DBP = diastolic minimum before the next beat']
    },
    redraw: {
      title: 'Redraw this in 20 seconds',
      steps: ['Draw a pump on the left and a narrow adjustable tube on the right.', 'Write CO under the pump and SVR under the tube.', 'Between them write “Pressure tendency ≈ CO × SVR”.', 'Add “arterioles = main adjustable resistance vessels.”']
    },
    viva: [
      { question: 'Why are arterioles called resistance vessels?', oneLine: 'Their small, adjustable radius strongly influences resistance to blood flow.', buildOut: ['Arteriolar smooth muscle can change vessel radius.', 'Small changes in radius can markedly change resistance.', 'This makes arterioles important in distributing flow and regulating arterial pressure.'] },
      { question: 'What is pulse pressure?', oneLine: 'Systolic pressure minus diastolic pressure.', buildOut: ['It represents the pressure excursion during one cardiac cycle.', 'It is influenced by stroke volume and arterial compliance among other factors.'] }
    ]
  },
  'bp-regulation': {
    diagram: 'feedback-loop',
    title: 'See blood-pressure regulation as a closed feedback loop',
    subtitle: 'Follow the information: disturbance → sensor → integration → effectors → correction.',
    analogy: {
      title: 'Think of a thermostat correcting room temperature',
      everyday: 'A thermostat detects that temperature has moved away from its target, sends that information to a controller, and turns heating or cooling on in the direction that opposes the change.',
      medical: 'Arterial baroreceptors sense vessel stretch, brainstem cardiovascular centres integrate the input, and autonomic output changes heart and vessel function to oppose rapid pressure disturbances.',
      limit: 'Blood-pressure regulation has multiple interacting controllers. Baroreflexes are especially important for rapid changes, while renal/body-fluid mechanisms contribute strongly over longer time scales.'
    },
    memory: {
      rule: 'Sensor → integrator → effector → correction.',
      cues: ['Pressure falls → baroreceptor firing tends to fall', 'Sympathetic drive tends to rise', 'Heart + arterioles respond', 'Kidneys dominate longer-term volume control']
    },
    redraw: {
      title: 'Redraw this in 20 seconds',
      steps: ['Draw four boxes in a loop: Pressure → Baroreceptors → Brainstem → Heart/vessels.', 'Add an arrow from heart/vessels back to Pressure.', 'Write “negative feedback” in the centre.', 'Below the loop add “Kidneys: slower, longer-term volume control.”']
    },
    viva: [
      { question: 'Describe the baroreceptor reflex when arterial pressure falls suddenly.', oneLine: 'Reduced stretch lowers baroreceptor firing and shifts autonomic output toward restoring pressure.', buildOut: ['Reduced afferent baroreceptor activity reaches brainstem cardiovascular centres.', 'Sympathetic activity tends to increase and parasympathetic activity tends to decrease.', 'Heart rate/contractility and arteriolar tone can increase.', 'These responses oppose the initial fall in pressure.'] },
      { question: 'Why is the baroreflex described as negative feedback?', oneLine: 'Its response acts in the direction opposite to the initiating pressure change.', buildOut: ['A fall in pressure triggers responses that support pressure.', 'A rise in pressure triggers responses that oppose the rise.', 'The purpose is stabilization, not amplification, of the disturbance.'] }
    ]
  }
};

export const getCardiovascularVisualMemory = lessonId => cardiovascularVisualMemory[lessonId] || null;
