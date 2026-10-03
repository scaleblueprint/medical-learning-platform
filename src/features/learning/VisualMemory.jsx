import { useState } from 'react';
import { getCardiovascularVisualMemory } from '../../data/learning/visualMemoryRegistry.js';

function CirculationLoopDiagram() {
  return <svg className="vm-svg" viewBox="0 0 820 300" role="img" aria-labelledby="vm-circulation-title vm-circulation-desc">
    <title id="vm-circulation-title">Simplified circulation loop</title>
    <desc id="vm-circulation-desc">Body to right heart to lungs to left heart and back to body, with one-way arrows.</desc>
    <defs><marker id="vm-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z"/></marker></defs>
    <rect x="35" y="92" width="150" height="110" rx="26" className="vm-node vm-body"/><text x="110" y="132" textAnchor="middle" className="vm-kicker">BODY</text><text x="110" y="160" textAnchor="middle" className="vm-label">Systemic tissues</text>
    <rect x="245" y="62" width="140" height="170" rx="34" className="vm-node vm-heart-right"/><text x="315" y="122" textAnchor="middle" className="vm-kicker">RIGHT HEART</text><text x="315" y="151" textAnchor="middle" className="vm-label">Pulmonary pump</text><text x="315" y="181" textAnchor="middle" className="vm-small">RA → RV</text>
    <rect x="445" y="92" width="140" height="110" rx="55" className="vm-node vm-lungs"/><text x="515" y="132" textAnchor="middle" className="vm-kicker">LUNGS</text><text x="515" y="160" textAnchor="middle" className="vm-label">Gas exchange</text>
    <rect x="645" y="62" width="140" height="170" rx="34" className="vm-node vm-heart-left"/><text x="715" y="122" textAnchor="middle" className="vm-kicker">LEFT HEART</text><text x="715" y="151" textAnchor="middle" className="vm-label">Systemic pump</text><text x="715" y="181" textAnchor="middle" className="vm-small">LA → LV</text>
    <path d="M185 135 C215 135 215 120 245 120" className="vm-flow" markerEnd="url(#vm-arrow)"/>
    <path d="M385 120 C415 120 415 135 445 135" className="vm-flow" markerEnd="url(#vm-arrow)"/>
    <path d="M585 160 C615 160 615 178 645 178" className="vm-flow" markerEnd="url(#vm-arrow)"/>
    <path d="M715 232 C715 274 110 274 110 202" className="vm-flow" markerEnd="url(#vm-arrow)"/>
    <text x="315" y="278" textAnchor="middle" className="vm-caption">One continuous circuit · two pumps in series</text>
  </svg>;
}

function CycleWheelDiagram() {
  const phases=[['1','FILL','AV open'],['2','ISO CONTRACTION','all closed · S1'],['3','EJECT','semilunar open'],['4','ISO RELAXATION','all closed · S2']];
  return <div className="vm-cycle-wheel" role="img" aria-label="Four repeating phases of the ventricular cardiac cycle">
    <div className="vm-cycle-center"><strong>Pressure decides</strong><span>which valve can open</span></div>
    {phases.map(([n,title,note],i)=><div className={`vm-cycle-phase p${i+1}`} key={title}><span>{n}</span><strong>{title}</strong><small>{note}</small></div>)}
    <div className="vm-cycle-arrow a1">→</div><div className="vm-cycle-arrow a2">↓</div><div className="vm-cycle-arrow a3">←</div><div className="vm-cycle-arrow a4">↑</div>
  </div>;
}

function OutputEquationDiagram() {
  return <div className="vm-output-diagram" role="img" aria-label="Cardiac output equals heart rate multiplied by stroke volume, with stroke volume influenced by preload, contractility and afterload">
    <div className="vm-equation-box"><small>HOW OFTEN?</small><strong>Heart rate</strong><span>beats / min</span></div><b>×</b><div className="vm-equation-box"><small>HOW MUCH EACH BEAT?</small><strong>Stroke volume</strong><span>mL / beat</span></div><b>=</b><div className="vm-equation-box result"><small>TOTAL EACH MINUTE</small><strong>Cardiac output</strong><span>L / min</span></div>
    <div className="vm-sv-tree"><span>Stroke volume is shaped by</span><div><strong>Preload</strong><strong>Contractility</strong><strong>Afterload</strong></div></div>
  </div>;
}

function PressurePipeDiagram() {
  return <svg className="vm-svg" viewBox="0 0 820 300" role="img" aria-labelledby="vm-pressure-title vm-pressure-desc">
    <title id="vm-pressure-title">Simplified pressure, flow and resistance diagram</title><desc id="vm-pressure-desc">A heart pump sends flow into a vessel, with an adjustable arteriole representing resistance.</desc>
    <rect x="45" y="85" width="170" height="130" rx="34" className="vm-node vm-heart-left"/><text x="130" y="128" textAnchor="middle" className="vm-kicker">HEART</text><text x="130" y="158" textAnchor="middle" className="vm-label">Cardiac output</text><text x="130" y="185" textAnchor="middle" className="vm-small">creates flow</text>
    <path d="M215 150 H575" className="vm-vessel"/><path d="M575 150 H755" className="vm-vessel vm-vessel-narrow"/>
    <circle cx="390" cy="150" r="46" className="vm-pressure-bubble"/><text x="390" y="145" textAnchor="middle" className="vm-kicker">PRESSURE</text><text x="390" y="170" textAnchor="middle" className="vm-small">flow meets resistance</text>
    <rect x="575" y="105" width="180" height="90" rx="24" className="vm-node vm-resistance"/><text x="665" y="142" textAnchor="middle" className="vm-kicker">ARTERIOLES</text><text x="665" y="169" textAnchor="middle" className="vm-label">Adjustable resistance</text>
    <text x="390" y="258" textAnchor="middle" className="vm-caption">Pressure tendency ≈ cardiac output × vascular resistance</text>
  </svg>;
}

function FeedbackLoopDiagram() {
  const steps=[['1','PRESSURE CHANGES','disturbance'],['2','BARORECEPTORS','sensor'],['3','BRAINSTEM','integrator'],['4','HEART + VESSELS','effectors']];
  return <div className="vm-feedback" role="img" aria-label="Negative feedback loop for rapid blood pressure regulation">
    {steps.map(([n,title,role],i)=><div className="vm-feedback-step" key={title}><span>{n}</span><strong>{title}</strong><small>{role}</small>{i<steps.length-1&&<b aria-hidden="true">→</b>}</div>)}
    <div className="vm-feedback-return">↶ response opposes the original pressure change · negative feedback</div>
    <div className="vm-feedback-kidney"><strong>Longer term:</strong> kidneys and body-fluid balance help regulate volume and pressure.</div>
  </div>;
}

function Diagram({ type }) {
  if(type==='circulation-loop') return <CirculationLoopDiagram/>;
  if(type==='cycle-wheel') return <CycleWheelDiagram/>;
  if(type==='output-equation') return <OutputEquationDiagram/>;
  if(type==='pressure-pipe') return <PressurePipeDiagram/>;
  if(type==='feedback-loop') return <FeedbackLoopDiagram/>;
  return null;
}

export default function VisualMemory({ lesson }) {
  const visual=getCardiovascularVisualMemory(lesson?.id);
  const [analogyMode,setAnalogyMode]=useState('simple');
  const [vivaOpen,setVivaOpen]=useState(null);
  if(!visual) return null;
  const confusions=lesson.study?.misconceptions?.slice(0,3)||[];
  return <section className="visual-memory" aria-label="Visual learning and memory layer">
    <header className="vm-head">
      <div><span className="stage-tag">SEE IT · MAP IT · REMEMBER IT</span><h2>{visual.title}</h2><p>{visual.subtitle}</p></div>
      <span className="vm-original-badge">Original learning diagram</span>
    </header>

    <div className="vm-diagram-card"><Diagram type={visual.diagram}/><p className="vm-diagram-note">Simplified concept diagram. It intentionally leaves out detail that is not needed for this learning objective.</p></div>

    <div className="vm-analogy">
      <div className="vm-analogy-head"><div><span className="stage-tag">ANALOGY → MEDICAL MAP</span><h3>{visual.analogy.title}</h3></div><div className="vm-toggle" role="group" aria-label="Analogy detail"><button className={analogyMode==='simple'?'active':''} onClick={()=>setAnalogyMode('simple')}>Simple idea</button><button className={analogyMode==='medical'?'active':''} onClick={()=>setAnalogyMode('medical')}>Medical mapping</button></div></div>
      <p>{analogyMode==='simple'?visual.analogy.everyday:visual.analogy.medical}</p>
      <small><strong>Where the analogy stops:</strong> {visual.analogy.limit}</small>
    </div>

    <div className="vm-memory-grid">
      <article className="vm-memory-anchor"><span className="stage-tag">MEMORY ANCHOR</span><h3>{visual.memory.rule}</h3><ul>{visual.memory.cues.map(cue=><li key={cue}>{cue}</li>)}</ul></article>
      <article className="vm-redraw"><span className="stage-tag">REDRAW FROM MEMORY</span><h3>{visual.redraw.title}</h3><ol>{visual.redraw.steps.map(step=><li key={step}>{step}</li>)}</ol><p>Close the lesson for a moment and try it without looking. The goal is the relationship, not artistic accuracy.</p></article>
    </div>

    {confusions.length>0&&<div className="vm-confusions"><div><span className="stage-tag">COMMON CONFUSION</span><h3>Catch the mistakes before they stick.</h3></div><div className="vm-confusion-grid">{confusions.map(item=><article key={item.myth}><strong>{item.myth}</strong><p>{item.correction}</p></article>)}</div></div>}

    <div className="vm-viva"><div className="vm-viva-head"><span className="stage-tag">VIVA QUICK ANSWER</span><h3>Answer in one line first. Build only if asked.</h3></div>{visual.viva.map((item,index)=><article key={item.question} className="vm-viva-card"><button type="button" onClick={()=>setVivaOpen(vivaOpen===index?null:index)} aria-expanded={vivaOpen===index}><span>{item.question}</span><b>{vivaOpen===index?'−':'+'}</b></button>{vivaOpen===index&&<div><p><strong>One-line answer:</strong> {item.oneLine}</p><div><strong>If the examiner asks you to continue:</strong><ul>{item.buildOut.map(point=><li key={point}>{point}</li>)}</ul></div></div>}</article>)}</div>
  </section>;
}
