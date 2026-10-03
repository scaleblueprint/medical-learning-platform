import { useMemo, useState } from 'react';
import CardiacOutputModel from './CardiacOutputModel.jsx';

const Arrow = ({ children }) => <span className="cv-arrow">{children}</span>;

function ExplorerFrame({ eyebrow, title, intro, children, note }) {
  return <div className="cv-explorer">
    <div className="cv-explorer-head"><div><span className="stage-tag">{eyebrow}</span><h3>{title}</h3><p>{intro}</p></div><span className="cv-explorer-badge">Interactive model</span></div>
    {children}
    <p className="cv-explorer-note">{note || 'Simplified educational model for concept learning. It is not a patient-monitoring or diagnostic tool.'}</p>
  </div>;
}

function HeartPumpExplorer() {
  const [phase, setPhase] = useState('filling');
  const filling = phase === 'filling';
  return <ExplorerFrame eyebrow="PUMP PHASE EXPLORER" title="Two pumps, one continuous circuit" intro="Switch between filling and ejection. Notice that the right and left hearts work at the same time, but serve different circulations.">
    <div className="cv-segmented" role="group" aria-label="Pump phase">
      <button className={filling?'active':''} onClick={()=>setPhase('filling')}>Ventricular filling</button>
      <button className={!filling?'active':''} onClick={()=>setPhase('ejection')}>Ventricular ejection</button>
    </div>
    <div className="cv-circuit" aria-label="Simplified two-pump circulation">
      <div className="cv-node systemic"><small>BODY</small><strong>Systemic circulation</strong><span>{filling?'Venous blood is returning to the right heart':'Blood is receiving left-ventricular output'}</span></div>
      <Arrow>→</Arrow>
      <div className="cv-pump right"><small>RIGHT HEART</small><strong>{filling?'Filling':'Ejecting'}</strong><span>AV valve {filling?'open':'closed'} · pulmonary valve {filling?'closed':'open'}</span></div>
      <Arrow>→</Arrow>
      <div className="cv-node lungs"><small>LUNGS</small><strong>Pulmonary circulation</strong><span>{filling?'Pulmonary venous return continues toward the left heart':'Blood is receiving right-ventricular output'}</span></div>
      <Arrow>→</Arrow>
      <div className="cv-pump left"><small>LEFT HEART</small><strong>{filling?'Filling':'Ejecting'}</strong><span>AV valve {filling?'open':'closed'} · aortic valve {filling?'closed':'open'}</span></div>
    </div>
    <div className="cv-insight"><strong>{filling?'What creates filling?':'What creates ejection?'}</strong><p>{filling?'Ventricular relaxation lowers ventricular pressure. When atrial pressure is greater, the atrioventricular valves can open and blood moves into the ventricles.':'Ventricular contraction raises ventricular pressure. Ejection begins only after ventricular pressure exceeds pressure in the pulmonary artery or aorta.'}</p></div>
  </ExplorerFrame>;
}

const cyclePhases = [
  { name:'Ventricular filling', valves:'AV open · semilunar closed', volume:'Volume rising', pressure:'Ventricular pressure low', sound:'No major closure sound at phase start', marker:'Fill' },
  { name:'Isovolumetric contraction', valves:'All valves closed', volume:'Volume nearly constant', pressure:'Ventricular pressure rising rapidly', sound:'S1 follows AV-valve closure', marker:'S1' },
  { name:'Ventricular ejection', valves:'AV closed · semilunar open', volume:'Volume falling', pressure:'Ventricular pressure high, then falling', sound:'No major closure sound at phase start', marker:'Eject' },
  { name:'Isovolumetric relaxation', valves:'All valves closed', volume:'Volume nearly constant', pressure:'Ventricular pressure falling rapidly', sound:'S2 follows semilunar-valve closure', marker:'S2' },
];

function CardiacCycleExplorer() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const phase = cyclePhases[phaseIndex];
  return <ExplorerFrame eyebrow="CARDIAC CYCLE EXPLORER" title="Follow pressure, valves and volume together" intro="Move through the four major ventricular phases. The phase only changes when the relevant pressure relationship changes.">
    <input className="cv-phase-slider" aria-label="Cardiac cycle phase" type="range" min="0" max="3" step="1" value={phaseIndex} onChange={e=>setPhaseIndex(Number(e.target.value))}/>
    <div className="cv-phase-labels">{cyclePhases.map((item,index)=><button key={item.name} className={index===phaseIndex?'active':''} onClick={()=>setPhaseIndex(index)}><span>{index+1}</span>{item.name}</button>)}</div>
    <div className="cv-cycle-panel">
      <div><small>CURRENT PHASE</small><strong>{phase.name}</strong><span>{phase.marker}</span></div>
      <dl><div><dt>Valves</dt><dd>{phase.valves}</dd></div><div><dt>Ventricular volume</dt><dd>{phase.volume}</dd></div><div><dt>Ventricular pressure</dt><dd>{phase.pressure}</dd></div><div><dt>Heart sound link</dt><dd>{phase.sound}</dd></div></dl>
    </div>
    <div className="cv-mini-chart" aria-label="Conceptual ventricular pressure and volume changes">
      <div className="cv-chart-row"><span>Pressure</span><div className={`pressure p${phaseIndex}`}><i/></div></div>
      <div className="cv-chart-row"><span>Volume</span><div className={`volume v${phaseIndex}`}><i/></div></div>
    </div>
  </ExplorerFrame>;
}

function BloodPressureExplorer() {
  const [output, setOutput] = useState(5);
  const [resistance, setResistance] = useState(1);
  const relativePressure = useMemo(()=>Math.round(93 * (output/5) * resistance),[output,resistance]);
  const direction = relativePressure > 100 ? 'higher than the teaching baseline' : relativePressure < 86 ? 'lower than the teaching baseline' : 'near the teaching baseline';
  return <ExplorerFrame eyebrow="PRESSURE–FLOW EXPLORER" title="What happens when flow meets resistance?" intro="Change cardiac output and relative peripheral resistance. The display uses a deliberately simplified relationship to show direction, not to estimate a person’s blood pressure.">
    <div className="cv-pressure-grid">
      <label><span>Cardiac output</span><strong>{output.toFixed(1)} L/min</strong><input type="range" min="3" max="7" step="0.1" value={output} onChange={e=>setOutput(Number(e.target.value))}/></label>
      <label><span>Relative arteriolar resistance</span><strong>{resistance.toFixed(2)}×</strong><input type="range" min="0.7" max="1.5" step="0.05" value={resistance} onChange={e=>setResistance(Number(e.target.value))}/></label>
    </div>
    <div className="cv-pressure-result"><small>ILLUSTRATIVE PRESSURE INDEX</small><strong>{relativePressure}</strong><span>{direction}</span></div>
    <div className="cv-equation-strip"><span>Pressure tendency</span><b>≈</b><span>cardiac output</span><b>×</b><span>vascular resistance</span></div>
    <div className="cv-insight"><strong>Reason from the relationship</strong><p>With the other variable held constant, increasing flow or increasing resistance raises the pressure tendency in this simplified model. Real arterial pressure also depends on blood volume, arterial compliance, viscosity, reflex control and other factors.</p></div>
  </ExplorerFrame>;
}

function BaroreflexExplorer() {
  const [change, setChange] = useState(-12);
  const low = change < -3, high = change > 3;
  const state = low ? {
    sensed:'Reduced arterial stretch → reduced baroreceptor firing', sympathetic:'↑ sympathetic', parasympathetic:'↓ parasympathetic', heart:'Heart rate & contractility tend to rise', vessels:'Arteriolar tone tends to rise', result:'Responses support arterial pressure toward baseline'
  } : high ? {
    sensed:'Increased arterial stretch → increased baroreceptor firing', sympathetic:'↓ sympathetic', parasympathetic:'↑ parasympathetic', heart:'Heart rate tends to fall', vessels:'Arteriolar tone tends to fall', result:'Responses oppose the pressure rise toward baseline'
  } : {
    sensed:'Stretch is close to the teaching baseline', sympathetic:'Balanced trend', parasympathetic:'Balanced trend', heart:'No large reflex change illustrated', vessels:'No large reflex change illustrated', result:'The feedback loop is near its reference state'
  };
  return <ExplorerFrame eyebrow="BAROREFLEX EXPLORER" title="Sense → integrate → respond" intro="Move arterial pressure away from the teaching baseline and follow the direction of the short-term reflex response.">
    <label className="cv-reflex-slider"><span>Initial arterial-pressure disturbance</span><strong>{change>0?'+':''}{change} relative units</strong><input type="range" min="-20" max="20" step="1" value={change} onChange={e=>setChange(Number(e.target.value))}/></label>
    <div className="cv-reflex-flow">
      <div><small>1 · SENSOR</small><strong>Carotid / aortic baroreceptors</strong><span>{state.sensed}</span></div>
      <Arrow>→</Arrow>
      <div><small>2 · INTEGRATION</small><strong>Brainstem cardiovascular control</strong><span>{state.sympathetic} · {state.parasympathetic}</span></div>
      <Arrow>→</Arrow>
      <div><small>3 · EFFECTORS</small><strong>Heart + resistance vessels</strong><span>{state.heart}<br/>{state.vessels}</span></div>
    </div>
    <div className="cv-reflex-result"><strong>Negative-feedback outcome</strong><span>{state.result}</span></div>
  </ExplorerFrame>;
}

export default function CardiovascularExplorer({ explorerId }) {
  if (explorerId === 'heart-pump') return <HeartPumpExplorer/>;
  if (explorerId === 'cardiac-cycle') return <CardiacCycleExplorer/>;
  if (explorerId === 'cardiac-output') return <ExplorerFrame eyebrow="CARDIAC OUTPUT EXPLORER" title="Change rate and volume per beat" intro="Manipulate heart rate and stroke volume and observe their product."><CardiacOutputModel/></ExplorerFrame>;
  if (explorerId === 'blood-pressure') return <BloodPressureExplorer/>;
  if (explorerId === 'baroreflex') return <BaroreflexExplorer/>;
  return null;
}
