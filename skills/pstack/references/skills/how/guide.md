# How

Explain how a subsystem works from current source and observed behavior. Default to a direct read-only investigation for a small question.

For a complex subsystem, identify a few distinct paths or ownership boundaries. Explore them directly or use permitted read-only agents with [explorer prompt](references/explorer-prompt.md). Synthesize with [explainer prompt](references/explainer-prompt.md). Parent review remains responsible for accuracy.

Trace the entry point, state/data shape, key transitions, owner, effects, and exits. Distinguish a proposed contract from implemented code and implemented code from exercised behavior. Cite verified paths and lines. Do not modify files to answer a read-only question.

Explain the useful mental model with Overview, Key Concepts, How It Works, Where Things Live, and Gotchas only where relevant. Avoid annotating every source line or delegating a question the parent can answer cheaply.
