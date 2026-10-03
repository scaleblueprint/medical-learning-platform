import { diabetesTherapeuticArea } from '../../data/therapeuticAreas/diabetes.js';

const kindLabel = { foundation: 'Foundation', core: 'Core syllabus lens', integrated: 'Integrated clinical lens' };

export default function TherapeuticAreaPage({ id, navigate }) {
  if (id !== 'diabetes') return <div className="ta-not-found"><p className="eyebrow">THERAPEUTIC AREA</p><h1>This therapeutic-area prototype is not available yet.</h1><button className="primary" onClick={()=>navigate('home')}>Back to Medical Learning Lab</button></div>;
  const area = diabetesTherapeuticArea;
  const total = area.phases.reduce((sum, phase)=>sum + phase.topics.length, 0);
  return <main className="ta-page">
    <button className="back-link" onClick={()=>navigate('home')}>← Medical Learning Lab</button>
    <header className="ta-hero">
      <div><p className="eyebrow">THERAPEUTIC AREA · VERTICAL MBBS PATH</p><h1>{area.title}</h1><p>{area.subtitle}</p></div>
      <aside><strong>{area.phases.length} curriculum phases</strong><span>{total} subject lenses</span><small>Faculty review required</small></aside>
    </header>

    <section className="ta-mode-explainer">
      <div><span>CURRICULUM-FIRST</span><strong>“What am I studying this year?”</strong><p>Traditional subject/course navigation remains available.</p></div>
      <div className="ta-mode-arrow">→</div>
      <div><span>THERAPEUTIC-AREA VIEW</span><strong>“How does one condition evolve across MBBS?”</strong><p>The same syllabus is reorganised vertically without changing where each subject teaches it.</p></div>
    </section>

    <section className="ta-curriculum-note">
      <div><p className="eyebrow">CURRICULUM BASIS</p><h2>Same syllabus. A different way to connect it.</h2></div>
      <p>{area.curriculumNote}</p>
    </section>

    <div className="ta-phase-list">
      {area.phases.map((phase,phaseIndex)=><section className="ta-phase" key={phase.id}>
        <aside className="ta-phase-marker"><span>{String(phaseIndex+1).padStart(2,'0')}</span><b>{phase.label}</b><small>{phase.yearLabel}</small></aside>
        <div className="ta-phase-content">
          <header><h2>{phase.purpose}</h2><span>{phase.topics.length} subject {phase.topics.length===1?'lens':'lenses'}</span></header>
          <div className="ta-topic-grid">
            {phase.topics.map((topic,index)=><article className={`ta-topic-card ${topic.kind}`} key={topic.id}>
              <div className="ta-topic-meta"><span>{topic.subject}</span><span>{kindLabel[topic.kind]}</span></div>
              <h3>{topic.title}</h3><p>{topic.question}</p>
              <div className="ta-topic-concepts">{topic.concepts.slice(0,4).map(item=><span key={item}>{item}</span>)}</div>
              <div className="ta-topic-bottom"><small>{topic.verifiedCompetency ? `Verified competency · ${topic.verifiedCompetency}` : 'Competency mapping · faculty verification pending'}</small><button onClick={()=>navigate(`therapeutic/diabetes/${topic.id}`)}>Open this syllabus lens →</button></div>
            </article>)}
          </div>
        </div>
      </section>)}
    </div>

    <section className="ta-thread-map">
      <p className="eyebrow">THE THREAD ACROSS MBBS</p>
      <h2>Normal regulation → metabolism → disease → medicines → prevention → complications → clinical integration</h2>
      <div>{['Normal glucose control','Carbohydrate metabolism','Pathogenesis','Pharmacology','Public health','Organ complications','Clinical medicine','Special situations'].map((item,index)=><span key={item}><b>{String(index+1).padStart(2,'0')}</b>{item}</span>)}</div>
    </section>
  </main>;
}
