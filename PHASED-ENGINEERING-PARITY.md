# Medical Learning Lab — engineering-parity implementation

The medical prototype reuses the learning-product patterns proven in the Engineering Learning Platform while preserving a separate medical content and review boundary.

## Phase 0 — baseline and guardrails — COMPLETE
- Preserve the deployed medical prototype and all five cardiovascular lessons.
- Keep every medical lesson labelled `faculty-review-required` until reviewed.
- Keep navigation, shared lesson UI and catalog logic separate from medical content.
- Do not copy engineering-specific course IDs, examples, images or terminology into medicine.

## Phase 1 — course workspace and navigation — COMPLETE
- URL-driven, system-scoped lesson routes.
- Persistent desktop lesson outline with active lesson state.
- Collapsible desktop outline persisted locally.
- Mobile/tablet lesson-contents drawer.
- Current lesson / next lesson context strip.
- Previous/next navigation above and below the lesson.
- Clear return path to Physiology and Cardiovascular contents.
- Preserve legacy `#lesson/<id>` deep links.

## Phase 2 — seven-stage medical lesson parity — COMPLETE FOR CARDIOVASCULAR PROTOTYPE
Every cardiovascular prototype lesson now follows:
1. Experience — familiar body/real-life context.
2. Predict — commit before explanation.
3. Explore — concept-specific interaction or worked visual model.
4. Understand — medical explanation and terminology.
5. Connect — anatomy, physiology and biochemistry relationships.
6. Apply — educational clinical or physiological transfer scenario.
7. Check — a different scenario requiring reasoning.

Implemented Explore models:
- Heart as a pump — synchronized right/left pump filling and ejection model with valve-state reasoning.
- Cardiac cycle — four-phase pressure, valve, volume and heart-sound explorer.
- Cardiac output — heart-rate/stroke-volume model with calculated cardiac output.
- Blood pressure — simplified flow–resistance pressure-tendency explorer.
- Blood-pressure regulation — baroreceptor negative-feedback explorer showing sensor, integration and effector trends.

The lessons also include an expandable study-depth layer with objectives, prerequisites, mechanism sections, relationships, terminology, misconceptions, viva prompts, summaries and references. These remain prototype teaching materials requiring medical faculty review.

Release validation requires every cardiovascular lesson to have a registered concept-specific explorer and rejects registry/lesson drift.

## Phase 3 — course-first discovery — PARTIALLY COMPLETE
- Compact MBBS/subject dashboard. — implemented for the current prototype.
- Open available learning experiences directly. — implemented.
- Search across subject, system and lesson titles. — lesson-level search implemented; broader catalog search remains for future subjects.
- Direct search result links to lessons. — implemented.
- Honest preview/available states for undeveloped systems and subjects. — implemented.

## Phase 4 — medical study workspace
- Structured concept connections and glossary.
- Reviewed question/practice area when verified material is available.
- System-level learning tools without mixing them into lesson content.
- Local progress only when completion has a defensible definition.

## Phase 5 — review, feedback and release governance
- Persist student/faculty feedback to a reviewable store.
- Reviewer identity/status, version and review date in content metadata.
- Validation for navigation order, lesson stage coverage, answer keys and review flags.
- Mobile/tablet/desktop manual regression checklist.
- Build + release validation before deployment.

## Preservation rule
Each phase should change only the files required for that phase. Medical facts, equations, answer keys and lesson wording are not changed during a navigation-only phase.
