import { useState } from 'react';
import { getLesson, getLessons } from '../../platform/catalog/catalogRepository.js';
import CardiacOutputModel from './CardiacOutputModel.jsx';

function ChoiceBlock({ data, title='Make a prediction' }) {
  const [choice, setChoice] = useState(null);
  return <div className="choice-block"><h3>{title}</h3><p>{data.question}</p><div className="choice-grid">{data.options.map((o,i)=><button key={o} className={choice===i ? (i===data.answer?'chosen correct':'chosen') : ''} onClick={()=>setChoice(i)}>{o}</button>)}</div>{choice!==null && <div className="reveal">{choice===data.answer ? <strong>That fits the model.</strong> : <strong>Reconsider the relationship.</strong>} {data.explanation || (choice===data.answer?'Correct for this concept check.':'Try tracing cause and effect again.')}</div>}</div>
}

export default function LessonPage({ id, navigate }) {
  const lesson = getLesson(id);
  const lessons = getLessons('cardiovascular');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  if (!lesson) return null;
  const index = lessons.findIndex(l => l.id === id);
  const next = lessons[index+1];
  return <div className="lesson-page">
    <header className="lesson-topbar"><button onClick={()=>navigate('subject/physiology')}>← Physiology</button><span>Cardiovascular system · {index+1} of {lessons.length}</span><button onClick={()=>setShowFeedback(true)}>Review this lesson</button></header>
    <div className="lesson-shell">
      <aside className="lesson-sidebar">
        <p className="aside-label">LEARNING PATH</p>
        {lessons.map((l,i)=><button key={l.id} className={l.id===id?'active':''} onClick={()=>navigate(`lesson/${l.id}`)}><span>{i+1}</span>{l.title}</button>)}
      </aside>
      <main className="lesson-content">
        <div className="lesson-title"><p className="eyebrow">PHYSIOLOGY · CARDIOVASCULAR</p><h1>{lesson.title}</h1><p>{lesson.kicker}</p><div className="lesson-trust"><span>◌ Faculty review required</span><span>~ {lesson.minutes} min</span></div></div>

        <section className="learning-stage"><div className="stage-num">01</div><div><span className="stage-tag">EXPERIENCE IT</span><h2>{lesson.stages.experience.title}</h2><p>{lesson.stages.experience.body}</p><blockquote>{lesson.stages.experience.prompt}</blockquote></div></section>
        <section className="learning-stage"><div className="stage-num">02</div><div><span className="stage-tag">PREDICT</span><ChoiceBlock data={lesson.stages.predict}/></div></section>
        {lesson.interactive === 'cardiac-output' && <section className="learning-stage"><div className="stage-num">03</div><div><span className="stage-tag">EXPLORE</span><CardiacOutputModel/></div></section>}
        <section className="learning-stage"><div className="stage-num">{lesson.interactive ? '04':'03'}</div><div><span className="stage-tag">UNDERSTAND</span><h2>{lesson.stages.understand.heading}</h2><p>{lesson.stages.understand.body}</p></div></section>
        <section className="learning-stage"><div className="stage-num">{lesson.interactive ? '05':'04'}</div><div><span className="stage-tag">CONNECT</span><h2>One concept, multiple subjects.</h2><div className="connect-grid">{lesson.stages.connect.map((x,i)=><div key={x}><span>{['A','P','B'][i] || '•'}</span>{x}</div>)}</div></div></section>
        <section className="learning-stage"><div className="stage-num">{lesson.interactive ? '06':'05'}</div><div><span className="stage-tag">APPLY</span><h2>Use the idea.</h2><p className="apply-question">{lesson.stages.apply.question}</p><details><summary>Reveal reasoning</summary><p>{lesson.stages.apply.answer}</p></details></div></section>
        <section className="learning-stage"><div className="stage-num">{lesson.interactive ? '07':'06'}</div><div><span className="stage-tag">CHECK YOUR UNDERSTANDING</span><ChoiceBlock data={lesson.stages.check} title="One final check"/></div></section>

        <section className="source-card"><div><span className="stage-tag">CONTENT PROVENANCE</span><h3>Review before authority.</h3></div><p><strong>Curriculum reference:</strong> NMC Competency Based Medical Education Curriculum 2024.</p><p><strong>Competency mapping:</strong> {lesson.competency}.</p><p><strong>Prototype rule:</strong> Explanations, interactions and questions remain labelled for faculty review until approved by a medical reviewer.</p></section>

        <div className="lesson-footer"><button onClick={()=>navigate('subject/physiology')}>Back to cardiovascular path</button>{next && <button className="primary" onClick={()=>navigate(`lesson/${next.id}`)}>Next: {next.title} →</button>}</div>
      </main>
    </div>
    {showFeedback && <div className="modal-backdrop" onClick={()=>setShowFeedback(false)}><div className="feedback-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setShowFeedback(false)}>×</button><p className="eyebrow">CO-DESIGN THE PROTOTYPE</p><h2>What should change?</h2>{feedbackSent ? <div className="thanks">Feedback captured in this prototype session. A production version would store it server-side for review.</div> : <><div className="role-row"><button>Medical student</button><button>Intern</button><button>Faculty</button></div><div className="feedback-tags"><button>Explanation unclear</button><button>Medical accuracy</button><button>Too much detail</button><button>Too little detail</button><button>Better visual needed</button><button>Assessment issue</button></div><textarea placeholder="What would make this lesson better?" rows="5"></textarea><button className="primary" onClick={()=>setFeedbackSent(true)}>Submit prototype feedback</button></>}</div></div>}
  </div>;
}
