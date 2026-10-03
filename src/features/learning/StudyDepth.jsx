export default function StudyDepth({ study }) {
  if (!study) return null;
  return <section className="study-depth" aria-label="Study this concept in depth">
    <div className="study-depth-head">
      <div><span className="stage-tag">STUDY IN DEPTH</span><h2>Build the medical detail behind the idea.</h2></div>
      <p>Use this layer after the intuitive explanation. It adds terminology, mechanisms, relationships and viva-style revision without replacing faculty review.</p>
    </div>

    <div className="study-objectives">
      <div><h3>Learning objectives</h3><ul>{study.objectives?.map(item=><li key={item}>{item}</li>)}</ul></div>
      <div><h3>Know before you start</h3><ul>{study.prerequisites?.map(item=><li key={item}>{item}</li>)}</ul></div>
    </div>

    <div className="study-sections">
      {study.mechanisms?.map((section,index)=><article key={section.title} className="study-mechanism">
        <span>{String(index+1).padStart(2,'0')}</span>
        <div><h3>{section.title}</h3><p>{section.body}</p>{section.points?.length ? <ul>{section.points.map(point=><li key={point}>{point}</li>)}</ul> : null}</div>
      </article>)}
    </div>

    {study.relationships?.length ? <div className="study-relationships">
      <h3>Key relationships</h3>
      <div>{study.relationships.map(item=><article key={item.formula}><strong>{item.formula}</strong><p>{item.meaning}</p>{item.note&&<small>{item.note}</small>}</article>)}</div>
    </div> : null}

    {study.typicalValues?.length ? <div className="study-values">
      <h3>Typical physiological values</h3>
      <div>{study.typicalValues.map(item=><article key={item.label}><span>{item.label}</span><strong>{item.value}</strong><small>{item.note}</small></article>)}</div>
      <p className="study-caveat">Values are approximate teaching references for healthy resting adults and vary with age, body size, activity, measurement method and clinical context.</p>
    </div> : null}

    <details className="study-details" open>
      <summary>Key terminology</summary>
      <dl>{study.terms?.map(item=><div key={item.term}><dt>{item.term}</dt><dd>{item.meaning}</dd></div>)}</dl>
    </details>

    <details className="study-details">
      <summary>Common misconceptions</summary>
      <div className="study-misconceptions">{study.misconceptions?.map(item=><article key={item.myth}><strong>{item.myth}</strong><p>{item.correction}</p></article>)}</div>
    </details>

    <details className="study-details">
      <summary>Viva-style revision</summary>
      <div className="study-viva">{study.viva?.map(item=><article key={item.question}><h4>{item.question}</h4><p>{item.answer}</p></article>)}</div>
    </details>

    <div className="study-summary"><h3>Take-away summary</h3><ul>{study.summary?.map(item=><li key={item}>{item}</li>)}</ul></div>

    <div className="study-references">
      <span className="stage-tag">REFERENCE SOURCES</span>
      <p>These sources support the prototype draft; they do not substitute for medical faculty approval or your institution's prescribed references.</p>
      <ul>{study.sources?.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul>
    </div>
  </section>;
}
