---
summary: "CLI reference for `lynkai voicecall` (voice-call plugin command surface)"
read_when:
  - You use the voice-call plugin and want the CLI entry points
  - You want quick examples for `voicecall call|continue|status|tail|expose`
title: "voicecall"
---

# `lynkai voicecall`

`voicecall` is a plugin-provided command. It only appears if the voice-call plugin is installed and enabled.

Primary doc:

- Voice-call plugin: [Voice Call](/plugins/voice-call)

## Common commands

```bash
lynkai voicecall status --call-id <id>
lynkai voicecall call --to "+15555550123" --message "Hello" --mode notify
lynkai voicecall continue --call-id <id> --message "Any questions?"
lynkai voicecall end --call-id <id>
```

## Exposing webhooks (Tailscale)

```bash
lynkai voicecall expose --mode serve
lynkai voicecall expose --mode funnel
lynkai voicecall expose --mode off
```

Security note: only expose the webhook endpoint to networks you trust. Prefer Tailscale Serve over Funnel when possible.
