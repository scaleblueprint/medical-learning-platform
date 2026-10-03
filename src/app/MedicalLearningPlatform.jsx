import { useEffect, useState } from 'react';
import HomePage from '../features/platform/HomePage.jsx';
import SubjectPage from '../features/platform/SubjectPage.jsx';
import LessonPage from '../features/learning/LessonPage.jsx';

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '') || 'home';
  const parts = raw.split('/').filter(Boolean);
  if (parts[0] === 'lesson' && parts.length >= 3) return { type: 'lesson', systemId: parts[1], id: parts[2] };
  if (parts[0] === 'lesson' && parts.length === 2) return { type: 'legacy-lesson', systemId: 'cardiovascular', id: parts[1] };
  return { type: parts[0] || 'home', id: parts[1] };
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
  useEffect(() => {
    const title = ['lesson','legacy-lesson'].includes(route.type) ? 'Lesson' : route.type === 'subject' ? 'Physiology' : 'Medical Learning Lab';
    document.title = `${title} — AmberTheory`;
  }, [route]);
  useEffect(() => {
    if (route.type !== 'legacy-lesson') return;
    window.history.replaceState(null,'',`#lesson/${route.systemId}/${route.id}`);
    setRoute({ type: 'lesson', systemId: route.systemId, id: route.id });
  }, [route]);

  if (route.type === 'lesson') return <LessonPage key={`${route.systemId}:${route.id}`} id={route.id} systemId={route.systemId} navigate={navigate}/>;
  if (route.type === 'legacy-lesson') return null;
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

  return <div className="page-shell"><nav className="topnav"><button className="brand" onClick={()=>navigate('home')}><span className="brand-mark">AT</span><span><strong>Medical Learning Lab</strong><small>AmberTheory</small></span></button><div className="nav-links"><button onClick={()=>navigate('subject/physiology')}>Physiology</button><button onClick={openLearningMap}>Learning map</button><span className="prototype-pill">Course-first prototype</span></div></nav>{children}<footer><div><strong>Medical Learning Lab</strong><span>An AmberTheory exploration</span></div><p>Designed for learning exploration. Not for diagnosis, treatment or patient-specific medical advice.</p></footer></div>;
}
