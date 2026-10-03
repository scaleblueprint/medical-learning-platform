# Architecture

The prototype deliberately mirrors the engineering platform's separation of concerns without modifying the engineering repository.

- `src/app/` — routing and application shell
- `src/data/catalog/` — program/year/subject/system metadata
- `src/data/lessons/` — medical lesson content
- `src/platform/catalog/` — data access functions
- `src/features/platform/` — home and subject discovery
- `src/features/learning/` — lesson experience and interactives
- `scripts/` — release/content validation

## Domain model
Program → Professional Year → Subject → System → Competency → Lesson → Learning Stage → Assessment → Review state

## Prototype governance
All lesson content is `faculty-review-required`. No AI-generated or prototype curriculum mapping should become authoritative without medical review.
