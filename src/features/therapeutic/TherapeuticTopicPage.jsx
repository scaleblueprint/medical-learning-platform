import { diabetesTherapeuticArea, diabetesTopics, getDiabetesTopic } from '../../data/therapeuticAreas/diabetes.js';
import DiabetesDeepLearning from './DiabetesDeepLearning.jsx';

export default function TherapeuticTopicPage({ areaId, topicId, navigate }) {
  if (areaId !== 'diabetes') return null;
  const topic = getDiabetesTopic(topicId);
  if (!topic) return <div className="ta-not-found"><p className="eyebrow">DIABETES THROUGH MBBS</p><h1>This syllabus lens is not available.</h1><button className="primary" onClick={()=>navigate('therapeutic/diabetes')}>Back to Diabetes map</button></div>;
  const index = diabetesTopics.findIndex(item=>item.id===topic.id);
  const previous = diabetesTopics[index-1] || null;
  const next = diabetesTopics[index+1] || null;

  return <main className="ta-topic-page">
    <div className="ta-topic-topnav"><button onClick={()=>navigate('therapeutic/diabetes')}>← Diabetes through MBBS</button><span>{topic.phaseLabel} · {topic.subject}</span><span>{index+1} / {diabetesTopics.length}</span></div>

    <header className="ta-topic-hero">
      <p className="eyebrow">{topic.phaseLabel} · {topic.yearLabel} · {topic.subject}</p>
      <h1>{topic.title}</h1><p>{topic.question}</p>
      <div className="ta-topic-route-context">
        <div><span>WHAT CAME BEFORE</span><strong>{previous ? `${previous.subject}: ${previous.title}` : 'Start of the therapeutic-area journey'}</strong></div>
        <div><span>THIS SUBJECT ADDS</span><strong>{topic.concepts.slice(0,3).join(' · ')}</strong></div>
        <div><span>WHERE IT RETURNS NEXT</span><strong>{next ? `${next.subject}: ${next.title}` : 'End of this prototype path'}</strong></div>
      </div>
    </header>

    <section className="ta-lens-block">
      <div className="ta-lens-heading"><span className="stage-tag">SUBJECT LENS</span><h2>What should the student understand here?</h2></div>
      <div className="ta-lens-concepts">{topic.concepts.map((concept,i)=><article key={concept}><span>{String(i+1).padStart(2,'0')}</span><strong>{concept}</strong></article>)}</div>
    </section>

    <section className="ta-flow-block">
      <div className="ta-lens-heading"><span className="stage-tag">PICTURE THE IDEA</span><h2>See the concept as a sequence first.</h2></div>
      <div className="ta-flow">{topic.flow.map((step,index)=><div key={step} className="ta-flow-step"><span>{String(index+1).padStart(2,'0')}</span><strong>{step}</strong>{index<topic.flow.length-1&&<b>→</b>}</div>)}</div>
    </section>

    <section className="ta-analogy-block">
      <div><span className="stage-tag">ANALOGY</span><h2>{topic.analogy.title}</h2><p>{topic.analogy.simple}</p></div>
      <div><span className="stage-tag">MEDICAL MAPPING</span><p>{topic.analogy.medical}</p><aside><strong>Where the analogy stops</strong><span>{topic.analogy.limit}</span></aside></div>
    </section>

    <DiabetesDeepLearning topicId={topic.id} navigate={navigate}/>

    <section className="ta-memory-block"><span className="stage-tag">MEMORY ANCHOR</span><h2>{topic.remember}</h2><p>Use this as a recall cue, then rebuild the full mechanism from the subject concepts above.</p></section>

    <section className="ta-mapping-block">
      <div><span className="stage-tag">CURRICULUM PLACEMENT</span><h3>{topic.mapping}</h3></div>
      <div><strong>{diabetesTherapeuticArea.curriculum}</strong><p>Prototype teaching content remains faculty-review-required. The therapeutic-area route reorganises the syllabus; it does not replace subject teaching or official competency mapping.</p></div>
    </section>

    <nav className="ta-topic-nav" aria-label="Therapeutic area topic navigation">
      <div>{previous ? <button onClick={()=>navigate(`therapeutic/diabetes/${previous.id}`)}>← <span><small>Previous · {previous.subject}</small><strong>{previous.title}</strong></span></button> : <span/>}</div>
      <div>{next ? <button onClick={()=>navigate(`therapeutic/diabetes/${next.id}`)}><span><small>Next · {next.subject}</small><strong>{next.title}</strong></span> →</button> : <button onClick={()=>navigate('therapeutic/diabetes')}><span><small>Path complete</small><strong>Return to Diabetes map</strong></span> →</button>}</div>
    </nav>
  </main>;
}
