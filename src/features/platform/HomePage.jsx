import { getPlatform, getYears, getSubjects } from '../../platform/catalog/catalogRepository.js';

export default function HomePage({ navigate }) {
  const platform = getPlatform();
  const years = getYears();
  const subjects = getSubjects('first-professional');
  return <>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{platform.eyebrow}</p>
        <h1>Learn the body<br/><em>as a connected system.</em></h1>
        <p className="hero-text">{platform.description}</p>
        <div className="hero-actions">
          <button className="primary" onClick={() => navigate('subject/physiology')}>Explore Physiology</button>
          <button className="secondary" onClick={() => document.getElementById('years')?.scrollIntoView({behavior:'smooth'})}>See the prototype map</button>
        </div>
        <p className="prototype-note"><span>Prototype</span> Educational content is awaiting medical faculty review.</p>
      </div>
      <div className="hero-visual" aria-label="Connected body systems illustration">
        <div className="system-orbit orbit-one"><span>ANATOMY</span></div>
        <div className="system-orbit orbit-two"><span>BIOCHEMISTRY</span></div>
        <div className="system-orbit orbit-three"><span>PHYSIOLOGY</span></div>
        <div className="heart-mark">♥</div>
        <div className="pulse-line"></div>
      </div>
    </section>

    <section className="principles">
      <div><span>01</span><strong>Experience first</strong><p>Begin with something the body is trying to accomplish.</p></div>
      <div><span>02</span><strong>Predict before terms</strong><p>Commit to an idea before the explanation appears.</p></div>
      <div><span>03</span><strong>Connect the subjects</strong><p>See anatomy, physiology and biochemistry as one story.</p></div>
      <div><span>04</span><strong>Reason, don't recite</strong><p>Use cause and effect to build durable understanding.</p></div>
    </section>

    <section id="years" className="section-block">
      <div className="section-heading"><p className="eyebrow">MBBS LEARNING MAP</p><h2>A prototype that can grow with the learner.</h2></div>
      <div className="year-grid">
        {years.map((year, index) => <article className={`year-card ${year.status}`} key={year.id}>
          <div className="year-number">0{index+1}</div><h3>{year.title}</h3><p>{year.subtitle}</p>
          <div className="status-row"><span>{year.status === 'available' ? 'Prototype active' : 'Mapped for later'}</span></div>
        </article>)}
      </div>
    </section>

    <section className="section-block subjects-block">
      <div className="section-heading"><p className="eyebrow">FIRST PROFESSIONAL</p><h2>Three foundations. One connected body.</h2></div>
      <div className="subject-grid">
        {subjects.map(subject => <button key={subject.id} className={`subject-card ${subject.status}`} onClick={() => subject.status === 'available' && navigate(`subject/${subject.id}`)}>
          <span className="subject-short">{subject.short}</span><h3>{subject.title}</h3><p>{subject.overview}</p><span className="subject-action">{subject.status === 'available' ? 'Open prototype →' : 'Preview only'}</span>
        </button>)}
      </div>
    </section>
  </>;
}
