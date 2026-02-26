---
summary: "Community plugins: quality bar, hosting requirements, and PR submission path"
read_when:
  - You want to publish a third-party LynkAI plugin
  - You want to propose a plugin for docs listing
title: "Community plugins"
---

# Community plugins

This page tracks high-quality **community-maintained plugins** for LynkAI.

We accept PRs that add community plugins here when they meet the quality bar.

## Required for listing

- Plugin package is published on npmjs (installable via `lynkai plugins install <npm-spec>`).
- Source code is hosted on GitHub (public repository).
- Repository includes setup/use docs and an issue tracker.
- Plugin has a clear maintenance signal (active maintainer, recent updates, or responsive issue handling).

## How to submit

Open a PR that adds your plugin to this page with:

- Plugin name
- npm package name
- GitHub repository URL
- One-line description
- Install command

## Review bar

We prefer plugins that are useful, documented, and safe to operate.
Low-effort wrappers, unclear ownership, or unmaintained packages may be declined.

## Candidate format

Use this format when adding entries:

- **Plugin Name** — short description
  npm: `@scope/package`
  repo: `https://github.com/org/repo`
  install: `lynkai plugins install @scope/package`

## Listed plugins

- **WeChat** — Connect LynkAI to WeChat personal accounts via WeChatPadPro (iPad protocol). Supports text, image, and file exchange with keyword-triggered conversations.
  npm: `@icesword760/lynkai-wechat`
  repo: `https://github.com/icesword0760/lynkai-wechat`
  install: `lynkai plugins install @icesword760/lynkai-wechat`
