# refactoring

Pin the behavior to preserve from actual callers, tests, and runtime observations. Identify the target owner/interface and all callers, including strings, docs, scripts, and dynamic uses.

Move in coherent verifiable units. Migrate callers and delete obsolete APIs together where compatibility is not a real external requirement. Protect unrelated work and preserve required external contracts. Test behavior rather than implementation shape. Review every rename and resulting diff. Report preserved behavior, new structure, evidence, and any deferred callers.
