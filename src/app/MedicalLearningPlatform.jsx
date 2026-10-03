import { useEffect, useState } from 'react';
import HomePage from '../features/platform/HomePage.jsx';
import SubjectPage from '../features/platform/SubjectPage.jsx';
import LessonPage from '../features/learning/LessonPage.jsx';
import { findLessonSystem, lessonRoute } from '../platform/catalog/learningNavigation.js';

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '') || 'home';
  const parts = raw.split('/').filter(Boolean);
  const [type, first, second] = parts;
  if (type === 'lesson') {
    if (second) return { type, systemId: first, id: second };
    return { type, systemId: null, id: first };
  }
  return { type, id: first || null, systemId: null };
}

export default function MedicalLearningPlatform() {
  const [route, setRoute] = useState(parseHash());
  useEffect(() => {
    const onHash = () => { setRoute(parseHash()); window.scrollTo({top:0, behavior:'instant'}); };
    window.addEventListener('hashchange', onHash);
    if (!window.location.hash) window.history.replaceState(null,'','#home');
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const navigate = (to) => { window.location.hash = to; };

  const resolvedSystemId = route.type === 'lesson' ? (route.systemId || findLessonSystem(route.id)) : null;

  useEffect(() => {
    if (route.type === 'lesson' && !route.systemId && resolvedSystemId && route.id) {
      window.history.replaceState(null, '', `#${lessonRoute(resolvedSystemId, route.id)}`);
    }
  }, [route, resolvedSystemId]);

  useEffect(() => {
    const title = route.type === 'lesson' ? 'Physiology lesson' : route.type === 'subject' ? 'Physiology' : 'Medical Learning Lab';
    document.title = `${title} — AmberTheory`;
  }, [route]);

  if (route.type === 'lesson') return <LessonPage key={`${resolvedSystemId || 'cardiovascular'}:${route.id}`} id={route.id} systemId={resolvedSystemId || 'cardiovascular'} navigate={navigate}/>;
  if (route.type === 'subject') return <PageShell navigate={navigate}><SubjectPage id={route.id} navigate={navigate}/></PageShell>;
  return <PageShell navigate={navigate}><HomePage navigate={navigate}/></PageShell>;
}

function PageShell({ children, navigate }) {
  const openLearningMap = () => {
    const scrollToMap = () => document.getElementById('years')?.scrollIntoView({behavior:'smooth'});
    if (window.location.hash.replace(/^#\/?/, '') === 'home') {
      scrollToMap();
      return;
    }
    navigate('home');
    window.setTimeout(scrollToMap, 80);
  };

  return <div className="page-shell"><nav className="topnav"><button className="brand" onClick={()=>navigate('home')}><span className="brand-mark">AT</span><span><strong>Medical Learning Lab</strong><small>AmberTheory</small></span></button><div className="nav-links"><button onClick={()=>navigate('subject/physiology')}>Physiology</button><button onClick={openLearningMap}>Learning map</button><span className="prototype-pill">Prototype</span></div></nav>{children}<footer><div><strong>Medical Learning Lab</strong><span>An AmberTheory exploration</span></div><p>Designed for learning exploration. Not for diagnosis, treatment or patient-specific medical advice.</p></footer></div>;
}
