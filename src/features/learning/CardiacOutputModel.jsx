import { useState } from 'react';
export default function CardiacOutputModel() {
  const [hr, setHr] = useState(72);
  const [sv, setSv] = useState(70);
  const output = (hr * sv / 1000).toFixed(2);
  return <div className="model-card">
    <div className="model-heading"><div><span className="stage-tag">INTERACTIVE MODEL</span><h3>Move the variables. Watch the result.</h3></div><div className="output-badge"><small>CARDIAC OUTPUT</small><strong>{output} L/min</strong></div></div>
    <div className="model-equation"><span>{hr}</span><i>beats/min</i><b>×</b><span>{sv}</span><i>mL/beat</i><b>=</b><span>{output}</span><i>L/min</i></div>
    <label>Heart rate <strong>{hr} bpm</strong><input type="range" min="45" max="160" value={hr} onChange={e => setHr(Number(e.target.value))}/></label>
    <label>Stroke volume <strong>{sv} mL</strong><input type="range" min="40" max="120" value={sv} onChange={e => setSv(Number(e.target.value))}/></label>
    <p className="model-note">This simplified model is for concept-building. Real cardiovascular responses involve interacting physiological limits and control mechanisms.</p>
  </div>;
}
