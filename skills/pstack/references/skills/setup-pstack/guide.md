# Configure pstack roles

Default all roles to inheritance. Installation requires no configuration step.

When asked to inspect or change model routing:
1. Inspect the actual Codex collaboration tool schema for supported models, efforts, fork restrictions, and limits. Do not infer account access from marketing documentation or another host's names.
2. Read `config/models.json` relative to the pstack skill root if it exists. Show the current role choices. Keep roles not being changed; identify unknown roles rather than silently deleting user data.
3. Apply the user's stated choices. If a choice is missing, offer supported options and inheritance with the available question mechanism. Do not select an expensive default or change authentication.
4. Validate each requested pair against the live schema and applicable model instructions. An unavailable requested choice is an unresolved choice; do not silently substitute a provider or model.
5. Write the project-local JSON only when configuration is requested. Merge only the requested roles, use atomic replacement where available, and re-read it. It affects future pstack invocations, not Codex's global model setting.

Shape (role names can use the original pstack labels):
```json
{
  "version": 1,
  "roles": {
    "feature, refactoring": {"model": "inherit"},
    "judgment and prose": {"model": "inherit"},
    "arena runners": [{"model": "inherit"}, {"model": "inherit"}],
    "interrogate reviewers": [{"model": "inherit"}, {"model": "inherit"}]
  }
}
```

A real model row can include `reasoning_effort` only when that combination is supported and authorized. A panel list indicates desired seats, subject to the session's actual concurrency limit. Inheritance is not evidence of model diversity.

Do not write always-applied rules or edit global configuration. If the project needs real-app or formal verification, explain the matching creation action when relevant; do not add either merely as a setup ritual.
