import { getSubject, getSystems, getLessons } from '../../platform/catalog/catalogRepository.js';
import { lessonRoute } from '../../platform/catalog/learningNavigation.js';

export default function SubjectPage({ id, navigate }) {
  const subject = getSubject(id);
  const systems = getSystems(id);
  const lessons = getLessons('cardiovascular');
  if (!subject) return null;
  const totalMinutes = lessons.reduce((sum, lesson)=>sum+(lesson.minutes||0),0);
  return <div className="subject-page ml-subject-course">
    <button className="back-link" onClick={() => navigate('home')}>← Medical Learning Lab</button>

    <header className="ml-subject-header">
      <div>
        <p className="eyebrow">FIRST PROFESSIONAL · {subject.short}</p>
        <h1>{subject.title}</h1>
        <p>{subject.overview}</p>
      </div>
      <div className="ml-subject-summary"><span><strong>1</strong> open system</span><span><strong>{lessons.length}</strong> lessons</span><span><strong>{totalMinutes}</strong> min</span><button className="primary" onClick={()=>navigate(lessonRoute('cardiovascular', lessons[0].id))}>Start course →</button></div>
    </header>

    <div className="review-banner"><strong>Prototype content</strong><span>Medical faculty verification required before any curriculum mapping is treated as authoritative.</span></div>

    <div className="subject-layout ml-subject-layout">
      <aside className="system-list ml-system-list">
        <p className="aside-label">SYSTEMS</p>
        {systems.map(system => <div key={system.id} className={`system-row ${system.status} ${system.id==='cardiovascular'?'current':''}`}>
          <span>{system.title}</span><small>{system.status === 'available' ? `${getLessons(system.id).length} lessons` : 'Later'}</small>
        </div>)}
      </aside>

      <main className="lesson-list ml-lesson-catalog">
        <div className="lesson-list-head"><div><p className="eyebrow">CARDIOVASCULAR SYSTEM</p><h2>Start with flow. Build toward regulation.</h2><p>Open any lesson directly. Inside the workspace, use the persistent course outline and previous/next controls to move through the sequence.</p></div><span className="lesson-count">{lessons.length} prototype lessons</span></div>

        <div className="ml-sequence-guide"><span>Experience</span><b>→</b><span>Predict</span><b>→</b><span>Explore</span><b>→</b><span>Understand</span><b>→</b><span>Connect</span><b>→</b><span>Apply</span><b>→</b><span>Check</span></div>

        {lessons.map((lesson, index) => <button className="lesson-row ml-course-lesson-row" key={lesson.id} onClick={() => navigate(lessonRoute('cardiovascular', lesson.id))}>
          <span className="lesson-index">{String(index+1).padStart(2,'0')}</span>
          <span className="lesson-main"><strong>{lesson.title}</strong><small>{lesson.kicker}</small><em>Faculty review required</em></span>
          <span className="lesson-meta">{lesson.minutes} min <b>→</b></span>
        </button>)}
      </main>
    </div>
  </div>;
}
