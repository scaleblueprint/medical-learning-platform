import { useEffect, useRef, useState } from 'react';
import { lessonRoute } from '../../platform/catalog/learningNavigation.js';

function LessonOutline({ lessons, currentId, systemId, navigate, onSelect }) {
  return <nav className="ml-outline" aria-label="Cardiovascular lessons">
    <p className="ml-outline-label">CARDIOVASCULAR SYSTEM</p>
    {lessons.map((lesson, index) => <button
      key={lesson.id}
      type="button"
      className={`ml-outline-item ${lesson.id === currentId ? 'active' : ''}`}
      aria-current={lesson.id === currentId ? 'page' : undefined}
      onClick={() => { navigate(lessonRoute(systemId, lesson.id)); onSelect?.(); }}
    >
      <span className="ml-outline-index">{String(index + 1).padStart(2, '0')}</span>
      <span className="ml-outline-copy"><strong>{lesson.title}</strong><small>{lesson.minutes} min</small></span>
      <span className="ml-outline-state" aria-hidden="true">{lesson.id === currentId ? '●' : '→'}</span>
    </button>)}
  </nav>;
}

export default function LearningSidebar({ lessons, currentId, systemId, navigate, currentIndex }) {
  const [collapsed, setCollapsed] = useState(() => {
    try { return window.localStorage.getItem('medical:lesson-outline-collapsed') === 'true'; } catch { return false; }
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const triggerRef = useRef(null);

  const current = lessons[currentIndex];
  const next = lessons[currentIndex + 1];

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = event => { if (event.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function toggleCollapsed() {
    setCollapsed(value => {
      const nextValue = !value;
      try { window.localStorage.setItem('medical:lesson-outline-collapsed', String(nextValue)); } catch {}
      return nextValue;
    });
  }

  function closeMobile() {
    setMobileOpen(false);
    window.setTimeout(() => triggerRef.current?.focus({ preventScroll: true }), 0);
  }

  return <>
    <div className={`ml-sidebar-host ${collapsed ? 'collapsed' : ''}`}>
      <button type="button" className="ml-outline-toggle" onClick={toggleCollapsed} aria-expanded={!collapsed}>
        {collapsed ? '☰ Show contents' : '⇤ Hide contents'}
      </button>
      <aside className="ml-sidebar" aria-label="Lesson contents">
        <div className="ml-sidebar-heading">
          <span>Physiology</span>
          <strong>Cardiovascular</strong>
          <small>{lessons.length} prototype lessons</small>
        </div>
        <div className="ml-sidebar-scroll">
          <LessonOutline lessons={lessons} currentId={currentId} systemId={systemId} navigate={navigate}/>
        </div>
        <button className="ml-sidebar-back" type="button" onClick={() => navigate('subject/physiology')}>← Back to Physiology</button>
      </aside>
    </div>

    <button ref={triggerRef} type="button" className="ml-mobile-contents" onClick={() => setMobileOpen(true)} aria-expanded={mobileOpen}>
      <span><small>☰ LESSONS · {currentIndex + 1}/{lessons.length}</small><strong>{current?.title || 'Browse lessons'}</strong><em>Next: {next?.title || 'End of path'}</em></span><b aria-hidden="true">⌃</b>
    </button>

    {mobileOpen && <div className="ml-drawer-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) closeMobile(); }}>
      <section className="ml-drawer" role="dialog" aria-modal="true" aria-label="Lesson contents">
        <div className="ml-drawer-heading"><div><small>YOUR LEARNING PATH</small><h2>Lessons & topics</h2></div><button type="button" onClick={closeMobile} autoFocus>Done ↓</button></div>
        <div className="ml-drawer-scroll"><LessonOutline lessons={lessons} currentId={currentId} systemId={systemId} navigate={navigate} onSelect={closeMobile}/></div>
      </section>
    </div>}
  </>;
}
