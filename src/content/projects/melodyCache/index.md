---
title: "MelodyCache"
summary: "Full-Stack Music Library Platform"
date: "Apr 23 2026"
draft: false
demoUrl: "https://melodycache.pages.dev"
tags:
  - SvelteKit
  - TypeScript
  - Cloudflare Workers
  - Kotlin
  - Android
  - Web Audio API
  - OAuth 2.0
  - AI
---

- Built a **serverless music library platform** (SvelteKit + Cloudflare Workers/D1) with a multi-stage AI metadata pipeline — confidence-scored LLM extraction gated against Last.fm canonical data, recovering clean titles/artists/genres from noisy YouTube and SoundCloud metadata
- Developed a **Kotlin Android app** with a bidirectional WebView JavaScript bridge and full **Android Automotive OS** integration via Car App Library — including a canvas-based synchronized lyrics renderer optimized for dashboard readability at driving distance
- Implemented end-to-end **Spotify and YouTube OAuth 2.0** with paginated playlist import, a shared metadata cache architecture scaling sublinearly with users, and automated CI/CD deploying worker + frontend + D1 migrations with Telegram status notifications
- Built **LRC lyric sync** — parses `[MM:SS.ms]` timestamps, scrolls to current line with smooth animation, falls back to proportional plain-text scrolling when synced lyrics unavailable, and mirrors in real time to the Android Automotive display
- Engineered **client-side karaoke vocal suppression** via the Web Audio API using an OOPS mid-side matrix filter (left = L − strength×R, right = R − strength×L) with a user-controlled strength slider, synced live to the Android Automotive screen over the JS bridge
