import { lessonRoute } from '../../platform/catalog/learningNavigation.js';

export default function LessonNavigation({ previous, next, systemId, navigate, placement = 'bottom' }) {
  return <nav className={`ml-lesson-navigation ${placement}`} aria-label={`${placement === 'top' ? 'Top' : 'Bottom'} lesson navigation`}>
    <div className="ml-nav-side previous">
      {previous ? <button type="button" onClick={() => navigate(lessonRoute(systemId, previous.id))}>
        <span>← Previous lesson</span><strong>{previous.title}</strong>
      </button> : <span className="ml-nav-end">Start of learning path</span>}
    </div>
    <div className="ml-nav-side next">
      {next ? <button type="button" onClick={() => navigate(lessonRoute(systemId, next.id))}>
        <span>Next lesson →</span><strong>{next.title}</strong>
      </button> : <span className="ml-nav-end">End of learning path</span>}
    </div>
  </nav>;
}
