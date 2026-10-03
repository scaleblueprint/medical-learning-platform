import { getSubject, getSystems, getLessons } from '../../platform/catalog/catalogRepository.js';

export default function SubjectPage({ id, navigate }) {
  const subject = getSubject(id);
  const systems = getSystems(id);
  const lessons = getLessons('cardiovascular');
  if (!subject) return null;
  return <div className="subject-page">
    <button className="back-link" onClick={() => navigate('home')}>← Medical Learning Lab</button>
    <header className="subject-hero">
      <p className="eyebrow">FIRST PROFESSIONAL · {subject.short}</p>
      <h1>{subject.title}</h1>
      <p>{subject.overview}</p>
      <div className="review-banner"><strong>Prototype content</strong><span>Medical faculty verification required before any curriculum mapping is treated as authoritative.</span></div>
    </header>
    <div className="subject-layout">
      <aside className="system-list">
        <p className="aside-label">SYSTEMS</p>
        {systems.map(system => <div key={system.id} className={`system-row ${system.status}`}>
          <span>{system.title}</span><small>{system.status === 'available' ? '5 lessons' : 'Later'}</small>
        </div>)}
      </aside>
      <main className="lesson-list">
        <div className="lesson-list-head"><div><p className="eyebrow">CARDIOVASCULAR SYSTEM</p><h2>Start with flow. Build toward regulation.</h2></div><span className="lesson-count">5 prototype lessons</span></div>
        {lessons.map((lesson, index) => <button className="lesson-row" key={lesson.id} onClick={() => navigate(`lesson/${lesson.id}`)}>
          <span className="lesson-index">{String(index+1).padStart(2,'0')}</span>
          <span className="lesson-main"><strong>{lesson.title}</strong><small>{lesson.kicker}</small></span>
          <span className="lesson-meta">{lesson.minutes} min <b>→</b></span>
        </button>)}
      </main>
    </div>
  </div>;
}
