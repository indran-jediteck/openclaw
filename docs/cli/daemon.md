---
summary: "CLI reference for `lynkai daemon` (legacy alias for gateway service management)"
read_when:
  - You still use `lynkai daemon ...` in scripts
  - You need service lifecycle commands (install/start/stop/restart/status)
title: "daemon"
---

# `lynkai daemon`

Legacy alias for Gateway service management commands.

`lynkai daemon ...` maps to the same service control surface as `lynkai gateway ...` service commands.

## Usage

```bash
lynkai daemon status
lynkai daemon install
lynkai daemon start
lynkai daemon stop
lynkai daemon restart
lynkai daemon uninstall
```

## Subcommands

- `status`: show service install state and probe Gateway health
- `install`: install service (`launchd`/`systemd`/`schtasks`)
- `uninstall`: remove service
- `start`: start service
- `stop`: stop service
- `restart`: restart service

## Common options

- `status`: `--url`, `--token`, `--password`, `--timeout`, `--no-probe`, `--deep`, `--json`
- `install`: `--port`, `--runtime <node|bun>`, `--token`, `--force`, `--json`
- lifecycle (`uninstall|start|stop|restart`): `--json`

## Prefer

Use [`lynkai gateway`](/cli/gateway) for current docs and examples.
