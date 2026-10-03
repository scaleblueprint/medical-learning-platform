import { useState } from 'react';
import { getDiabetesDeepLearning, getDiabetesMiniTopic } from '../../data/therapeuticAreas/diabetesDeepLearning.js';

function Diagram({ type }) {
  if (type === 'glucose-homeostasis') return <div className="dl-diagram dl-homeostasis"><Node a="MEAL" b="Glucose enters blood"/><Arrow/><Node a="PANCREAS" b="Insulin ↑"/><Arrow/><Node a="LIVER · MUSCLE · FAT" b="Use / store fuel"/><Arrow/><Node a="REGULATION" b="Glucose moves toward range"/></div>;
  if (type === 'metabolic-crossroads') return <div className="dl-diagram dl-crossroads"><div className="dl-center">GLUCOSE</div><div className="dl-branches"><Node a="USE" b="Glycolysis"/><Node a="STORE" b="Glycogenesis"/><Node a="RELEASE" b="Glycogenolysis"/><Node a="MAKE NEW" b="Gluconeogenesis"/></div></div>;
  if (type === 'type1-type2-pathology') return <div className="dl-split-diagram"><div><small>TYPE 1</small><strong>Beta-cell destruction</strong><span>↓ insulin</span><b>→</b><span>Hyperglycaemia</span></div><div><small>TYPE 2</small><strong>Insulin resistance + beta-cell dysfunction</strong><span>Insulin effect becomes inadequate</span><b>→</b><span>Hyperglycaemia</span></div><div className="dl-shared"><strong>Shared downstream problem</strong><span>Persistent metabolic stress → tissue-specific complications</span></div></div>;
  if (type === 'drug-sites') return <div className="dl-drug-map"><Node a="PANCREAS" b="Insulin secretion"/><Node a="LIVER" b="Glucose production"/><Node a="MUSCLE / FAT" b="Insulin response"/><Node a="KIDNEY" b="Glucose reabsorption"/><Node a="INCRETIN SYSTEM" b="Glucose-dependent signalling"/><div className="dl-drug-core">DRUG CLASSES<br/><small>Map mechanism to physiology</small></div></div>;
  return null;
}

function Node({a,b}) { return <div className="dl-node"><small>{a}</small><strong>{b}</strong></div>; }
function Arrow() { return <span className="dl-arrow">→</span>; }

function TermCard({ item }) {
  const [open,setOpen] = useState(false);
  return <article className="dl-term-card"><button onClick={()=>setOpen(!open)} aria-expanded={open}><span>{item.term}</span><b>{open?'−':'+'}</b></button><p>{item.plain}</p>{open&&<div><small>Medical definition</small><p>{item.medical}</p></div>}</article>;
}

export default function DiabetesDeepLearning({ topicId, navigate }) {
  const data = getDiabetesDeepLearning(topicId);
  if (!data) return null;
  return <section className="dl-layer" aria-label="Deep understanding">
    <header className="dl-head"><div><span className="stage-tag">UNDERSTAND DEEPLY · OPTIONAL LAYER</span><h2>Go deeper without cluttering the main syllabus page.</h2></div><p>Start with the visual and plain-language explanation. Open definitions, mechanisms or recap topics only when you need them.</p></header>

    <div className="dl-beginner-grid">
      <article className="dl-start-card"><span className="stage-tag">START HERE</span><p>{data.beginnerIntro}</p><div className="dl-takeaways">{data.keyTakeaways.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><p>{item}</p></div>)}</div></article>
      <article className="dl-visual-card"><span className="stage-tag">ONE-PICTURE MODEL</span><Diagram type={data.diagram}/><small>Simplified concept diagram. Use it to organise the mechanism, not as a complete anatomical or biochemical representation.</small></article>
    </div>

    <details className="dl-section" open>
      <summary><span>Medical terms for a first-timer</span><small>Plain meaning first · formal definition on demand</small></summary>
      <div className="dl-terms-grid">{data.terms.map(item=><TermCard key={item.term} item={item}/>)}</div>
    </details>

    <details className="dl-section">
      <summary><span>Mechanism step by step</span><small>Open when you want the deeper biological explanation</small></summary>
      <div className="dl-mechanisms">{data.mechanisms.map(item=><article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
    </details>

    <section className="dl-linked-topics">
      <div className="dl-linked-heading"><div><span className="stage-tag">RECAP FROM EARLIER SUBJECTS</span><h3>Forgot the foundation? Rebuild it separately.</h3></div><p>These open as focused mini-topics so the current syllabus lens stays clean.</p></div>
      <div className="dl-link-grid">{data.recaps.map(id=>{const mini=getDiabetesMiniTopic(id);return mini?<button key={id} onClick={()=>navigate(`therapeutic/diabetes/learn/${id}?from=${topicId}`)}><span>RECAP</span><strong>{mini.title}</strong><small>{mini.subtitle}</small><b>Open mini-topic →</b></button>:null})}</div>
    </section>

    <section className="dl-linked-topics dl-more-topics">
      <div className="dl-linked-heading"><div><span className="stage-tag">NEED MORE DETAIL?</span><h3>Optional deep-dives.</h3></div><p>Use these only when the main explanation raises another question.</p></div>
      <div className="dl-link-grid">{data.learnMore.map(id=>{const mini=getDiabetesMiniTopic(id);return mini?<button key={id} onClick={()=>navigate(`therapeutic/diabetes/learn/${id}?from=${topicId}`)}><span>LEARN MORE</span><strong>{mini.title}</strong><small>{mini.subtitle}</small><b>Open deep-dive →</b></button>:null})}</div>
    </section>

    <details className="dl-sources"><summary>Learning sources used for this prototype</summary><ul>{data.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul><p>Educational prototype only. Content remains faculty-review-required and is not patient-specific medical advice.</p></details>
  </section>;
}
