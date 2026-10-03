# Medical Learning Lab — engineering-parity implementation

The medical prototype reuses the learning-product patterns proven in the Engineering Learning Platform while preserving a separate medical content and review boundary.

## Phase 0 — baseline and guardrails
- Preserve the deployed medical prototype and all five cardiovascular lessons.
- Keep every medical lesson labelled `faculty-review-required` until reviewed.
- Keep navigation, shared lesson UI and catalog logic separate from medical content.
- Do not copy engineering-specific course IDs, examples, images or terminology into medicine.

## Phase 1 — course workspace and navigation
- URL-driven, system-scoped lesson routes.
- Persistent desktop lesson outline with active lesson state.
- Collapsible desktop outline persisted locally.
- Mobile/tablet lesson-contents drawer.
- Current lesson / next lesson context strip.
- Previous/next navigation above and below the lesson.
- Clear return path to Physiology and Cardiovascular contents.
- Preserve legacy `#lesson/<id>` deep links.

## Phase 2 — seven-stage medical lesson parity
For every published prototype lesson:
1. Experience — familiar body/real-life context.
2. Predict — commit before explanation.
3. Explore — concept-specific interaction or worked visual model.
4. Understand — medical explanation and terminology.
5. Connect — anatomy, physiology and biochemistry relationships.
6. Apply — educational clinical or physiological transfer scenario.
7. Check — a different scenario requiring reasoning.

Every Explore stage must be concept-specific; do not add decorative interactions merely to satisfy stage count.

## Phase 3 — course-first discovery
- Compact MBBS/subject dashboard.
- Open available learning experiences directly.
- Search across subject, system and lesson titles.
- Direct search result links to lessons.
- Honest preview/available states for undeveloped systems and subjects.

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
