---
summary: "CLI reference for `lynkai reset` (reset local state/config)"
read_when:
  - You want to wipe local state while keeping the CLI installed
  - You want a dry-run of what would be removed
title: "reset"
---

# `lynkai reset`

Reset local config/state (keeps the CLI installed).

```bash
lynkai reset
lynkai reset --dry-run
lynkai reset --scope config+creds+sessions --yes --non-interactive
```
