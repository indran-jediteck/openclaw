---
summary: "CLI reference for `lynkai devices` (device pairing + token rotation/revocation)"
read_when:
  - You are approving device pairing requests
  - You need to rotate or revoke device tokens
title: "devices"
---

# `lynkai devices`

Manage device pairing requests and device-scoped tokens.

## Commands

### `lynkai devices list`

List pending pairing requests and paired devices.

```
lynkai devices list
lynkai devices list --json
```

### `lynkai devices remove <deviceId>`

Remove one paired device entry.

```
lynkai devices remove <deviceId>
lynkai devices remove <deviceId> --json
```

### `lynkai devices clear --yes [--pending]`

Clear paired devices in bulk.

```
lynkai devices clear --yes
lynkai devices clear --yes --pending
lynkai devices clear --yes --pending --json
```

### `lynkai devices approve [requestId] [--latest]`

Approve a pending device pairing request. If `requestId` is omitted, LynkAI
automatically approves the most recent pending request.

```
lynkai devices approve
lynkai devices approve <requestId>
lynkai devices approve --latest
```

### `lynkai devices reject <requestId>`

Reject a pending device pairing request.

```
lynkai devices reject <requestId>
```

### `lynkai devices rotate --device <id> --role <role> [--scope <scope...>]`

Rotate a device token for a specific role (optionally updating scopes).

```
lynkai devices rotate --device <deviceId> --role operator --scope operator.read --scope operator.write
```

### `lynkai devices revoke --device <id> --role <role>`

Revoke a device token for a specific role.

```
lynkai devices revoke --device <deviceId> --role node
```

## Common options

- `--url <url>`: Gateway WebSocket URL (defaults to `gateway.remote.url` when configured).
- `--token <token>`: Gateway token (if required).
- `--password <password>`: Gateway password (password auth).
- `--timeout <ms>`: RPC timeout.
- `--json`: JSON output (recommended for scripting).

Note: when you set `--url`, the CLI does not fall back to config or environment credentials.
Pass `--token` or `--password` explicitly. Missing explicit credentials is an error.

## Notes

- Token rotation returns a new token (sensitive). Treat it like a secret.
- These commands require `operator.pairing` (or `operator.admin`) scope.
- `devices clear` is intentionally gated by `--yes`.
- If pairing scope is unavailable on local loopback (and no explicit `--url` is passed), list/approve can use a local pairing fallback.
