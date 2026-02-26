---
summary: "CLI reference for `lynkai approvals` (exec approvals for gateway or node hosts)"
read_when:
  - You want to edit exec approvals from the CLI
  - You need to manage allowlists on gateway or node hosts
title: "approvals"
---

# `lynkai approvals`

Manage exec approvals for the **local host**, **gateway host**, or a **node host**.
By default, commands target the local approvals file on disk. Use `--gateway` to target the gateway, or `--node` to target a specific node.

Related:

- Exec approvals: [Exec approvals](/tools/exec-approvals)
- Nodes: [Nodes](/nodes)

## Common commands

```bash
lynkai approvals get
lynkai approvals get --node <id|name|ip>
lynkai approvals get --gateway
```

## Replace approvals from a file

```bash
lynkai approvals set --file ./exec-approvals.json
lynkai approvals set --node <id|name|ip> --file ./exec-approvals.json
lynkai approvals set --gateway --file ./exec-approvals.json
```

## Allowlist helpers

```bash
lynkai approvals allowlist add "~/Projects/**/bin/rg"
lynkai approvals allowlist add --agent main --node <id|name|ip> "/usr/bin/uptime"
lynkai approvals allowlist add --agent "*" "/usr/bin/uname"

lynkai approvals allowlist remove "~/Projects/**/bin/rg"
```

## Notes

- `--node` uses the same resolver as `lynkai nodes` (id, name, ip, or id prefix).
- `--agent` defaults to `"*"`, which applies to all agents.
- The node host must advertise `system.execApprovals.get/set` (macOS app or headless node host).
- Approvals files are stored per host at `~/.lynkai/exec-approvals.json`.
