# Comparison, consensus, and AI

## Semantic matching problem

Two organizations may express the same idea in different ways:

- identical wording
- different wording, same meaning
- same wording, different meaning
- similar policies grounded in different values
- compatible values but incompatible implementation

Any serious comparison model must handle all five cases.

## Matching pipeline

Recommended multi-stage pipeline:

1. **candidate generation**
   - exact title and alias matches
   - keyword overlap
   - shared tags and neighboring nodes
   - embedding nearest-neighbor search
2. **candidate scoring**
   - semantic similarity
   - type compatibility
   - structural proximity
   - evidence overlap
   - declared importance
3. **explanation generation**
   - why these nodes look similar
   - what differs
   - confidence level
   - what a human should review
4. **human validation**
   - accept match
   - reject match
   - mark as related-but-distinct
   - propose split or merge

This is intentionally hybrid. Pure exact matching is brittle; pure LLM matching is opaque and unstable.

## Similarity approaches and trade-offs

| Approach | Strengths | Weaknesses | Role |
| --- | --- | --- | --- |
| exact match | deterministic, cheap | misses paraphrases | high-precision seed |
| keyword similarity | simple, explainable | language-sensitive, gameable | fallback signal |
| embeddings | broad semantic reach | harder to explain, drift over time | candidate generation |
| LLM analysis | richer nuance and explanations | cost, latency, bias | review assistant |
| human validation | legitimate and accountable | slow, labor-intensive | final authority |
| community voting | scalable legitimacy signal | popularity bias, brigading risk | secondary review input |

## Compatibility score

The platform should expose a compatibility score, but only with a visible decomposition.

### Proposed first-release weighting

- core values: 40%
- major branches / policy areas: 30%
- secondary structure and priorities: 20%
- concrete policies: 10%

This is directionally correct because principles matter more than detailed implementation, but it still has weaknesses:

- it can reward vague value alignment while hiding policy divergence
- it assumes layer boundaries are consistently modeled
- it may underweight a single deal-breaking policy conflict

### Recommended scoring model

Instead of one flat weighted sum, compute four outputs:

1. **value alignment**
2. **policy alignment**
3. **structural translation confidence**
4. **critical conflict index**

Then derive an overall compatibility band only as a summary:

- high compatibility
- promising but contested
- limited compatibility
- fundamentally incompatible

This reduces false precision and keeps deal-breakers visible.

## Explanation-first scoring

Every comparison result should answer:

- which nodes were matched?
- with what confidence?
- which unmatched high-importance topics remain?
- where do priorities diverge?
- which conflicts are merely structural?
- which conflicts are substantive?

If the system cannot explain a score in plain language, the score should not be shown as authoritative.

## Consensus graph workflow

1. organizations or moderators identify likely overlap
2. a merge proposal is opened
3. candidate wording and structure are debated
4. supporting and dissenting evidence is reviewed
5. organizations endorse, oppose, or abstain
6. if threshold is met, a consensus node is created or updated
7. minority formulations remain linked

Consensus should be additive where possible. In many cases, a broader parent node can be shared while more specific implementation branches remain separate.

## AI assistance policy

AI may:

- detect duplicates
- propose aliases
- cluster related nodes
- summarize debates
- identify contradictions or missing links
- suggest evidence searches
- draft neutral consensus wording for human review

AI must not:

- auto-merge nodes
- auto-resolve evidence disputes
- auto-assign authoritative truth labels to policies
- make moderation decisions without appealable human review

## Failure modes specific to AI

- terminology drift across languages or subcultures
- hidden ideological bias in model training data
- overconfident explanations masking weak evidence
- strategic prompt abuse by participants
- homogenization pressure toward mainstream phrasing

Mitigation requires model audits, confidence thresholds, prompt logging, reproducible evaluation sets, and an easy path for users to challenge AI output.
