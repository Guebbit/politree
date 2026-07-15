# UX and operations

## UX design posture

Politree should optimize for legibility and deliberation, not virality. The main UX risk is overwhelming users with structure, history, and disagreement all at once.

The design response should be progressive disclosure:

- first show the current node summary and position map
- then show evidence, arguments, and history
- then show structural relations and comparison details

## Why this matters

Even a sound model and architecture will fail if the product makes complexity unreadable. This page translates the design into concrete user-facing expectations.

## Key user journeys

### 1. Organization registration

1. create account
2. register organization
3. complete verification workflow
4. choose privacy and publication defaults
5. invite collaborators

Critical UX requirement: users must understand the difference between private drafting, published organization content, and consensus-layer proposals.

### 2. Creating a graph

1. start from empty graph, template, or import
2. define core values
3. add policy areas
4. attach policies and notes
5. set importance and stance
6. publish selected branches

Import is strategically important. If initial graph creation is too burdensome, adoption will stall.

### 3. Comparing graphs

1. choose another organization or cohort
2. review compatibility summary
3. inspect explanation by layer
4. inspect unmatched and disputed topics
5. open discussion or merge proposal

The score should never be the main visual artifact. The explanation should be.

### 4. Participating in discussions

Users should be able to add:

- argument
- counterargument
- question
- rewrite suggestion
- evidence challenge
- summary proposal

Typed contributions improve later summarization and moderation.

### 5. Contributing evidence

Workflow:

1. open node
2. add note metadata
3. summarize relevance
4. declare whether the note supports, challenges, or contextualizes
5. publish

The system should warn when an item is low provenance, duplicate, or already contested.

### 6. Following consensus proposals

Users should see:

- proposal summary
- compared source nodes
- proposed wording
- endorsements and objections
- minority reports
- decision deadline and threshold

## Accessibility and multilingual support

Both are core requirements, not stretch goals.

- graph navigation must remain keyboard-accessible
- color alone must not encode stance or moderation state
- AI matching should be language-aware
- translation layers must distinguish translated text from canonical wording

Multilingual political comparison is especially hard because literal translation can collapse important differences. The interface should expose original wording alongside translated summaries.

## Operational metrics

Useful product metrics:

- percentage of published nodes with evidence
- unresolved high-impact conflicts
- time to moderation decision
- time to merge proposal resolution
- ratio of accepted to rejected semantic matches
- diversity of evidence sources per topic

Avoid vanity metrics like raw node counts or total comments. They encourage quantity over clarity.

## Related decisions

- [Architecture](./architecture) defines the services these workflows depend on.
- [Governance and trust](./governance-and-trust) defines which control points must remain visible to users.
- [Practical implementation](./practical-implementation) explains which journeys matter first.

## How this affects implementation

The first release should favor readable summaries, typed actions, and explicit state transitions over ambitious visualization. Progressive disclosure is more important than maximal graph exposure.

## Alternatives and later extensions

Later releases can add richer graph exploration, saved comparative views, and more advanced multilingual experiences. Those should extend a clear reading experience rather than replace it.

## Next reading

- Continue to [Roadmap, alternatives, and open questions](./risks-roadmap-and-open-questions) for deferred UX and scale challenges.
- Return to [Large plan](./large-plan) to reconnect these flows to the broader project vision.
