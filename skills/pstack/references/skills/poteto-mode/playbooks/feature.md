# feature

State intended behavior, user flow, data shape, ownership, success criteria, and failure paths from the actual request and relevant contracts. Check existing implementation and test infrastructure before adding abstractions.

For material design forks use **architect**. Implement a small complete slice first, then remaining authorized behavior. Verify actual user flow and side effects with representative inputs, plus focused regression checks. Keep unknown outcomes and missing prerequisites explicit.

For a substantial multi-step effort, reassess whether another division of work would reduce delay or risk; parallelize only when permitted and useful. Report behavior, material tradeoffs, proof, and unresolved limits.
