# Make a bot UI

Build a local page with explicit actions and a server-side integration only when the user requests this capability.

First establish the actual receiver. Codex's scheduled heartbeat feature is not an incoming webhook API. Discover a supported connector or a user-supplied service contract. If no receiver exists, prepare a local UI and adapter design and report the receiver blocked. Never invent an endpoint, secret-request card, bot panel, or wake schema.

Keep tokens server-side in the user's approved secret store. Do not request secrets in chat, embed them in browser code, logs, Git, or output. Treat incoming payloads as data; validate allowed fields and actions at the boundary.

Default local hosting to loopback. Network exposure, authentication, Tailscale installation, and tailnet joining require a request covering those changes. Do not run an installer fetched from the web as an implicit setup step.

Build only the requested actions. Define timeout, idempotency, retry budget, and ambiguous-outcome reconciliation from the actual service contract. Do not automatically replay mutating requests. A harmless authorized probe proves only what its actual response and receipt establish.

Verify the click-to-server-to-receiver path and resulting state before claiming it live. If only the UI is exercised, state that receiver integration is unverified.
