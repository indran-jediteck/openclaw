---
summary: "CLI reference for `lynkai logs` (tail gateway logs via RPC)"
read_when:
  - You need to tail Gateway logs remotely (without SSH)
  - You want JSON log lines for tooling
title: "logs"
---

# `lynkai logs`

Tail Gateway file logs over RPC (works in remote mode).

Related:

- Logging overview: [Logging](/logging)

## Examples

```bash
lynkai logs
lynkai logs --follow
lynkai logs --json
lynkai logs --limit 500
lynkai logs --local-time
lynkai logs --follow --local-time
```

Use `--local-time` to render timestamps in your local timezone.
