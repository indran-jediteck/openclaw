---
summary: "Uninstall LynkAI completely (CLI, service, state, workspace)"
read_when:
  - You want to remove LynkAI from a machine
  - The gateway service is still running after uninstall
title: "Uninstall"
---

# Uninstall

Two paths:

- **Easy path** if `lynkai` is still installed.
- **Manual service removal** if the CLI is gone but the service is still running.

## Easy path (CLI still installed)

Recommended: use the built-in uninstaller:

```bash
lynkai uninstall
```

Non-interactive (automation / npx):

```bash
lynkai uninstall --all --yes --non-interactive
npx -y lynkai uninstall --all --yes --non-interactive
```

Manual steps (same result):

1. Stop the gateway service:

```bash
lynkai gateway stop
```

2. Uninstall the gateway service (launchd/systemd/schtasks):

```bash
lynkai gateway uninstall
```

3. Delete state + config:

```bash
rm -rf "${OPENCLAW_STATE_DIR:-$HOME/.lynkai}"
```

If you set `OPENCLAW_CONFIG_PATH` to a custom location outside the state dir, delete that file too.

4. Delete your workspace (optional, removes agent files):

```bash
rm -rf ~/.lynkai/workspace
```

5. Remove the CLI install (pick the one you used):

```bash
npm rm -g lynkai
pnpm remove -g lynkai
bun remove -g lynkai
```

6. If you installed the macOS app:

```bash
rm -rf /Applications/LynkAI.app
```

Notes:

- If you used profiles (`--profile` / `OPENCLAW_PROFILE`), repeat step 3 for each state dir (defaults are `~/.lynkai-<profile>`).
- In remote mode, the state dir lives on the **gateway host**, so run steps 1-4 there too.

## Manual service removal (CLI not installed)

Use this if the gateway service keeps running but `lynkai` is missing.

### macOS (launchd)

Default label is `ai.lynkai.gateway` (or `ai.lynkai.<profile>`; legacy `com.lynkai.*` may still exist):

```bash
launchctl bootout gui/$UID/ai.lynkai.gateway
rm -f ~/Library/LaunchAgents/ai.lynkai.gateway.plist
```

If you used a profile, replace the label and plist name with `ai.lynkai.<profile>`. Remove any legacy `com.lynkai.*` plists if present.

### Linux (systemd user unit)

Default unit name is `lynkai-gateway.service` (or `lynkai-gateway-<profile>.service`):

```bash
systemctl --user disable --now lynkai-gateway.service
rm -f ~/.config/systemd/user/lynkai-gateway.service
systemctl --user daemon-reload
```

### Windows (Scheduled Task)

Default task name is `LynkAI Gateway` (or `LynkAI Gateway (<profile>)`).
The task script lives under your state dir.

```powershell
schtasks /Delete /F /TN "LynkAI Gateway"
Remove-Item -Force "$env:USERPROFILE\.lynkai\gateway.cmd"
```

If you used a profile, delete the matching task name and `~\.lynkai-<profile>\gateway.cmd`.

## Normal install vs source checkout

### Normal install (install.sh / npm / pnpm / bun)

If you used `https://lynkai.ai/install.sh` or `install.ps1`, the CLI was installed with `npm install -g lynkai@latest`.
Remove it with `npm rm -g lynkai` (or `pnpm remove -g` / `bun remove -g` if you installed that way).

### Source checkout (git clone)

If you run from a repo checkout (`git clone` + `lynkai ...` / `bun run lynkai ...`):

1. Uninstall the gateway service **before** deleting the repo (use the easy path above or manual service removal).
2. Delete the repo directory.
3. Remove state + workspace as shown above.
