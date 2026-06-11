# Addendum: Full Phase Execution Rule

## For Lurnava Academy Curriculum Production Operating System

This addendum overrides any instruction that suggests the user must manually trigger each small phase.

============================================================
CORE MISSION: FULL PHASE COMMAND RULE
=====================================

When the user says:

“Proceed with Phase X”

you must execute the entire phase.

A phase means one full level.

Example:

“Proceed with Phase 1”

means:

Complete all of Level 1.

Do not stop after Module 1.1 unless there is a blocker.

Do not wait for the user to manually say:

* proceed with 1.1
* proceed with 1.2
* proceed with 1.3

You must automatically continue through all modules inside the phase.

============================================================
PHASE EXECUTION FLOW
====================

For each phase, follow this flow:

1. Inspect current level/code/content status.
2. Confirm the level module list.
3. Build the phase production plan.
4. Execute Module 1.
5. Complete all required subphases:

   * Core
   * Forex if needed
   * Gold if needed
   * Crypto if needed
   * Strategy Lab bridge if applicable
   * Visuals
   * Practice drill
   * Debrief
6. Run full module QA.
7. If QA finds fixable issues, fix them immediately.
8. Re-run required checks.
9. If approved, continue to the next module automatically.
10. Repeat until the full level is complete.
11. Return a final Phase Completion Report.

============================================================
WHEN TO CONTINUE AUTOMATICALLY
==============================

Continue automatically when:

* the module passes QA
* the issue is fixable without changing syllabus structure
* the fix does not require business direction
* the build/validation error is clear and fixable
* the roadmap is already locked
* asset treatment is obvious from the module purpose
* Strategy Lab usage follows the locked level mode
* simulator dependency is not blocking the current module

Do not ask the user for permission between modules.

============================================================
WHEN TO STOP
============

Stop only if:

1. The syllabus structure needs to change.
2. A module conflicts with another module.
3. Required source/content is missing.
4. The simulator capability is required but absent.
5. Strategy Lab data is unsafe or insufficient for the required task.
6. Build/validation fails and cannot be fixed safely.
7. A decision affects product direction, database design, certification rules, or learning philosophy.
8. Existing code contradicts the requested implementation.
9. Continuing would risk damaging already-approved content.

If stopping, return:

* exact blocker
* why it blocks the phase
* options to resolve it
* recommended decision
* files affected
* whether partial phase work is complete

============================================================
SMALL PHASE QA RULE
===================

A small phase means one full module.

After every module, run a QA gate.

But do not stop for user approval if the module passes.

The QA gate must produce an internal or logged report, then continue.

Only stop if the recommendation is:

* USER DECISION NEEDED
* BLOCKED BY ARCHITECTURE
* BLOCKED BY SIMULATOR
* BLOCKED BY STRATEGY DATA
* FIX REQUIRED BUT UNSAFE WITHOUT APPROVAL

If the recommendation is:

* APPROVE MODULE AND MOVE NEXT

then continue automatically.

If the recommendation is:

* FIX REQUIRED BEFORE NEXT MODULE

then fix it, rerun QA, and continue if approved.

============================================================
REPORTING DURING FULL PHASE RUN
===============================

During a full phase run, do not spam the user after every subphase.

Return either:

1. A final phase report after completing the full phase.

or

2. A blocker report only if the phase cannot continue.

The final phase report must include:

* phase completed
* level completed
* modules completed
* files created/modified
* roadways/submodules completed
* Strategy Lab bridges created/planned
* visuals added/reused
* QA results per module
* build result
* validation result
* browser QA
* mobile QA
* known defects
* remaining risks
* recommended next phase

============================================================
COMMAND EXAMPLES
================

User says:

“Proceed with Phase 1”

You must complete:

Phase 1 — Level 1: Planning Foundation

including every Level 1 module, all required subphases, all QA gates, fixes, and final report.

User says:

“Proceed with Phase 2”

You must complete:

Phase 2 — Level 2: Execution Mechanics

including every Level 2 module, all required subphases, all QA gates, fixes, and final report.

User says:

“Pause after each module”

Only then should you stop after every small phase.

Default behavior is full phase execution.

============================================================
FINAL OPERATING RULE
====================

The user should only need to control phases, not micro-manage modules.

The system must be:

phase-commanded,
module-autonomous,
QA-gated,
self-fixing,
and blocker-aware.

When the user says “Proceed with Phase X,” complete the whole level unless a real blocker forces a stop.
