# Vision and principles

## Product thesis

Political organizations struggle to collaborate because they often lack shared structure, not shared intelligence. Two groups may support closely related goals while describing them with different vocabulary, levels of abstraction, or historical framing.

Politree should turn political programs into navigable knowledge so that collaboration can begin with explicit structure instead of impressionistic debate.

## Foundational principles

### 1. Transparency by default

Positions, evidence, flags, edits, and merge proposals should be attributable and inspectable.

**Trade-off:** total transparency may discourage exploratory drafts or internal strategic debate.  
**Decision:** support organization-private workspaces and explicit publication states instead of making every draft public.

### 2. Structured disagreement

Disagreement should be preserved at node level, not buried in long discussion threads or hidden by final summaries.

**Trade-off:** preserving disagreement can slow consensus and create visual clutter.  
**Decision:** model disagreement as a first-class relation with summarization layers rather than forcing a single official thread.

### 3. Evidence-aware discussion

Evidence should be attached, reviewed, and discussed separately from ideological claims.

**Trade-off:** evidence quality signals can be gamed and may privilege resource-rich actors.  
**Decision:** separate evidence quality from policy endorsement and expose source diversity metrics.

### 4. Slow consensus

The consensus graph should evolve more slowly than organization workspaces.

**Trade-off:** slow consensus can frustrate active communities.  
**Decision:** treat the consensus graph as a reviewed synthesis layer, not as the main place for rapid iteration.

### 5. Minority preservation

Coalition-building should never require erasing dissenting or conditional positions.

**Trade-off:** preserving minority branches makes outputs less tidy.  
**Decision:** favor explicit minority reports and alternative formulations over forced closure.

## Primary actors

| Actor | Main goals | Risks introduced |
| --- | --- | --- |
| organization administrators | curate canonical graph, manage contributors | centralization inside organizations |
| organization contributors | draft nodes, add evidence, participate in discussions | inconsistent quality, internal faction conflict |
| moderators | review abuse, handle evidence disputes, enforce rules | legitimacy disputes, overreach |
| researchers / journalists / citizens | read, compare, audit, cite | passive consumption without contribution |
| AI services | detect patterns, summarize, suggest links | bias, opacity, over-trust |

## Knowledge layers

Politree should distinguish stable and unstable knowledge instead of treating everything as a generic node.

| Layer | Purpose | Expected change rate |
| --- | --- | --- |
| historical roots | provenance, intellectual lineage, precedent | very low |
| core values | durable principles | low |
| policy areas | thematic organization | medium |
| concrete policies | actionable proposals | medium to high |
| notes / evidence | contextual support or challenge | high |

This layering improves interpretability but introduces classification disputes. A proposal may function as both a value statement and a policy direction. The system should therefore allow a primary type plus secondary tags instead of enforcing a single rigid ontology.

## Success criteria

Politree is successful if it helps users answer:

- where are we substantively aligned?
- where are we only using different wording?
- where are our disagreements real and non-trivial?
- which evidence is contested, outdated, or weak?
- which consensus proposals are broad enough to matter and precise enough to defend?

It is not successful merely because it accumulates nodes, discussions, or AI-generated suggestions.
