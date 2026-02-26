---
summary: "CLI reference for `lynkai config` (get/set/unset config values)"
read_when:
  - You want to read or edit config non-interactively
title: "config"
---

# `lynkai config`

Config helpers: get/set/unset values by path. Run without a subcommand to open
the configure wizard (same as `lynkai configure`).

## Examples

```bash
lynkai config get browser.executablePath
lynkai config set browser.executablePath "/usr/bin/google-chrome"
lynkai config set agents.defaults.heartbeat.every "2h"
lynkai config set agents.list[0].tools.exec.node "node-id-or-name"
lynkai config unset tools.web.search.apiKey
```

## Paths

Paths use dot or bracket notation:

```bash
lynkai config get agents.defaults.workspace
lynkai config get agents.list[0].id
```

Use the agent list index to target a specific agent:

```bash
lynkai config get agents.list
lynkai config set agents.list[1].tools.exec.node "node-id-or-name"
```

## Values

Values are parsed as JSON5 when possible; otherwise they are treated as strings.
Use `--strict-json` to require JSON5 parsing. `--json` remains supported as a legacy alias.

```bash
lynkai config set agents.defaults.heartbeat.every "0m"
lynkai config set gateway.port 19001 --strict-json
lynkai config set channels.whatsapp.groups '["*"]' --strict-json
```

Restart the gateway after edits.
