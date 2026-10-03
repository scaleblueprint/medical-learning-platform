import { useMemo, useState } from 'react';
import { getLessons, getPlatform, getSubjects, getYears } from '../../platform/catalog/catalogRepository.js';
import { lessonRoute } from '../../platform/catalog/learningNavigation.js';

export default function HomePage({ navigate }) {
  const platform = getPlatform();
  const years = getYears();
  const subjects = getSubjects('first-professional');
  const lessons = getLessons('cardiovascular');
  const [query, setQuery] = useState('');
  const totalMinutes = lessons.reduce((sum, lesson) => sum + (lesson.minutes || 0), 0);
  const results = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return lessons.filter(lesson => {
      const text = [lesson.title, lesson.kicker, 'physiology cardiovascular'].join(' ').toLowerCase();
      return terms.every(term => text.includes(term));
    });
  }, [query, lessons]);

  return <div className="ml-dashboard">
    <section className="ml-dashboard-intro">
      <div>
        <p className="eyebrow">{platform.eyebrow}</p>
        <h1>Explore medical learning.</h1>
        <p>Start with an available learning path, browse its lessons, or search directly for a concept. The prototype currently focuses on First Professional Physiology.</p>
      </div>
      <div className="ml-dashboard-status"><strong>1 open learning path</strong><span>{lessons.length} lessons · {totalMinutes} min</span><small>Faculty review required</small></div>
    </section>

    <section className="ml-search-panel" aria-label="Search medical learning">
      <label htmlFor="medical-course-search">Search courses and concepts</label>
      <div className="ml-search-row">
        <input id="medical-course-search" type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Try cardiac output, blood pressure or regulation…"/>
        {query && <button type="button" onClick={()=>setQuery('')}>Clear</button>}
      </div>
      {query && <p className="ml-search-status">{results.length} matching {results.length === 1 ? 'lesson' : 'lessons'}</p>}
    </section>

    {query && <section className="ml-search-results" aria-label="Matching lessons">
      {results.length ? results.map((lesson,index)=><button key={lesson.id} className="ml-result-card" onClick={()=>navigate(lessonRoute('cardiovascular', lesson.id))}>
        <span>{String(lessons.indexOf(lesson)+1).padStart(2,'0')}</span><div><strong>{lesson.title}</strong><small>Cardiovascular Physiology · {lesson.minutes} min</small><p>{lesson.kicker}</p></div><b>→</b>
      </button>) : <div className="ml-empty-state"><strong>No lessons match that search.</strong><span>Try a cardiovascular concept such as cardiac output or blood pressure.</span></div>}
    </section>}

    {!query && <section className="ml-course-grid" aria-label="Available medical learning paths">
      <article className="ml-course-card ml-course-card-open">
        <div className="ml-course-card-meta"><span>FIRST PROFESSIONAL</span><span>PHYSIOLOGY</span><span>PROTOTYPE</span></div>
        <div className="ml-course-card-body">
          <div>
            <p className="eyebrow">AVAILABLE NOW</p>
            <h2>Cardiovascular Physiology</h2>
            <p>Learn flow, pumping, pressure and regulation as a connected physiological system rather than a list of isolated definitions.</p>
          </div>
          <div className="ml-course-stats"><span><strong>{lessons.length}</strong> lessons</span><span><strong>{totalMinutes}</strong> min</span><span><strong>7-stage</strong> target experience</span></div>
        </div>
        <div className="ml-course-preview">
          {lessons.map((lesson,index)=><button key={lesson.id} onClick={()=>navigate(lessonRoute('cardiovascular', lesson.id))}><span>{String(index+1).padStart(2,'0')}</span><strong>{lesson.title}</strong><small>{lesson.minutes} min</small></button>)}
        </div>
        <div className="ml-course-actions"><button className="secondary" onClick={()=>navigate('subject/physiology')}>Browse course contents</button><button className="primary" onClick={()=>navigate(lessonRoute('cardiovascular', lessons[0].id))}>Start learning →</button></div>
      </article>

      <aside className="ml-coming-card">
        <p className="eyebrow">MAPPED FOR LATER</p>
        <h3>More of First Professional</h3>
        <p>The course-first shell is ready to expand without pretending unfinished subjects are available.</p>
        <div>{subjects.filter(subject=>subject.status!=='available').map(subject=><span key={subject.id}><strong>{subject.title}</strong><small>Preview only</small></span>)}</div>
      </aside>
    </section>}

    <section className="ml-learning-contract">
      <div><span>01</span><strong>Experience</strong><small>Start with what the body is trying to do.</small></div>
      <div><span>02</span><strong>Predict</strong><small>Commit before seeing the explanation.</small></div>
      <div><span>03</span><strong>Explore</strong><small>Manipulate a concept-specific model.</small></div>
      <div><span>04</span><strong>Understand</strong><small>Add precise medical terminology.</small></div>
      <div><span>05</span><strong>Connect</strong><small>Link anatomy, physiology and biochemistry.</small></div>
      <div><span>06</span><strong>Apply</strong><small>Transfer the idea to a new situation.</small></div>
      <div><span>07</span><strong>Check</strong><small>Reason through a different scenario.</small></div>
    </section>

    <section id="years" className="ml-program-map">
      <div><p className="eyebrow">MBBS LEARNING MAP</p><h2>Built to grow one reviewed learning path at a time.</h2></div>
      <div className="ml-year-strip">{years.map((year,index)=><article key={year.id} className={year.status}><span>0{index+1}</span><strong>{year.title}</strong><small>{year.status==='available'?'Prototype active':'Mapped for later'}</small></article>)}</div>
    </section>
  </div>;
}
