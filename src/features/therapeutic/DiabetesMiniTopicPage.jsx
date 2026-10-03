import { getDiabetesMiniTopic } from '../../data/therapeuticAreas/diabetesDeepLearning.js';

function MiniDiagram({ type }) {
  const label = (type||'concept').replaceAll('-',' ');
  if (type === 'insulin-glucagon') return <div className="dm-diagram dm-two"><div><small>FED</small><strong>Insulin</strong><span>Use · store · suppress liver output</span></div><b>↔</b><div><small>FASTING</small><strong>Glucagon</strong><span>Liver glycogenolysis · gluconeogenesis</span></div></div>;
  if (type === 'fed-fasting') return <div className="dm-diagram dm-two"><div><small>AFTER A MEAL</small><strong>Use + store</strong><span>Insulin influence rises</span></div><b>→</b><div><small>BETWEEN MEALS</small><strong>Mobilise + make</strong><span>Glucagon influence rises</span></div></div>;
  if (type === 'four-pathways') return <div className="dm-diagram dm-four"><div>Glycolysis<small>use glucose</small></div><div>Glycogenesis<small>store glucose</small></div><div>Glycogenolysis<small>open glycogen</small></div><div>Gluconeogenesis<small>make new glucose</small></div></div>;
  if (type === 'type1-type2') return <div className="dm-diagram dm-two"><div><small>TYPE 1</small><strong>Beta-cell destruction</strong><span>Severe insulin deficiency</span></div><b>≠</b><div><small>TYPE 2</small><strong>Insulin resistance + beta-cell dysfunction</strong><span>Insulin effect becomes inadequate</span></div></div>;
  if (type === 'micro-macro') return <div className="dm-diagram dm-two"><div><small>MICROVASCULAR</small><strong>Retina · kidney · nerves</strong><span>Small-vessel/specialised tissue injury</span></div><b>+</b><div><small>MACROVASCULAR</small><strong>Heart · brain · peripheral arteries</strong><span>Atherosclerotic disease</span></div></div>;
  if (type === 'drug-map') return <div className="dm-diagram dm-drugs"><div>Liver<small>reduce glucose output</small></div><div>Pancreas<small>change insulin secretion</small></div><div>Kidney<small>reduce glucose reabsorption</small></div><div>Incretin system<small>modify glucose-dependent signalling</small></div><div className="center">DRUG CLASSES</div></div>;
  return <div className="dm-diagram dm-generic"><strong>{label}</strong><span>Focused explanatory model</span></div>;
}

export default function DiabetesMiniTopicPage({ miniId, fromTopicId, navigate }) {
  const mini = getDiabetesMiniTopic(miniId);
  if (!mini) return <main className="dm-page"><p className="eyebrow">DIABETES DEEP LEARNING</p><h1>Mini-topic not found.</h1><button className="primary" onClick={()=>navigate('therapeutic/diabetes')}>Back to Diabetes map</button></main>;
  const back = fromTopicId ? `therapeutic/diabetes/${fromTopicId}` : 'therapeutic/diabetes';
  return <main className="dm-page">
    <button className="back-link" onClick={()=>navigate(back)}>← {fromTopicId ? 'Back to syllabus lens' : 'Diabetes through MBBS'}</button>
    <header className="dm-hero"><p className="eyebrow">OPTIONAL RECAP / DEEP-DIVE</p><h1>{mini.title}</h1><p>{mini.subtitle}</p><div>{mini.parentSubjects.map(subject=><span key={subject}>{subject}</span>)}</div></header>

    <section className="dm-first"><div><span className="stage-tag">FIRST-TIMER EXPLANATION</span><p>{mini.plain}</p></div><MiniDiagram type={mini.diagram}/></section>

    <section className="dm-sections">{mini.sections.map((section,index)=><article key={section.title}><span>{String(index+1).padStart(2,'0')}</span><div><h2>{section.title}</h2><p>{section.body}</p></div></article>)}</section>

    <section className="dm-terms"><span className="stage-tag">TERMS YOU SHOULD RECOGNISE</span><div>{mini.terms.map(term=><span key={term}>{term}</span>)}</div></section>

    <section className="dm-memory"><span className="stage-tag">MEMORY ANCHOR</span><h2>{mini.remember}</h2></section>

    <details className="dm-sources"><summary>Prototype learning sources</summary><ul>{mini.sources.map(url=><li key={url}><a href={url} target="_blank" rel="noopener noreferrer">Reference source ↗</a></li>)}</ul><p>This mini-topic is educational and faculty-review-required. It does not provide patient-specific diagnosis or treatment advice.</p></details>

    <div className="dm-bottom"><button className="primary" onClick={()=>navigate(back)}>Return to {fromTopicId ? 'current syllabus lens' : 'Diabetes map'} →</button></div>
  </main>;
}
