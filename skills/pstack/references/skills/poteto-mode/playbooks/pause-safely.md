# pause-safely

On an explicit pause or necessary recovery handoff, stop starting new writes and send scoped stop/hold instructions to launched agents. Reconcile in-flight writes, Git state and processes; preserve all existing work.

Save only the state needed to resume: objective, grants and limits, checkout/branch/full HEAD, owned and unrelated changes, completed evidence, active processes/agents, blockers, next commands, and key pointers. Use an authorized durable location when cross-context recovery is needed; never store secrets or raw user data.

Do not reset, stash, publish, or mark incomplete work complete as a pause ritual. Confirm what remains running and where recovery state lives.
