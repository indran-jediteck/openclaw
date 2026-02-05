FROM ghcr.io/openclaw/openclaw:latest
CMD ["sh","-c","node dist/index.js gateway --allow-unconfigured --bind lan --port ${PORT:-8080}"]