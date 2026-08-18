# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Build: Not applicable (plain JS)
- Start: `npm start`
- Test: `npm test` (currently a placeholder)

## Architecture
A simple Node.js Express server that provides an API to fetch GitHub repositories for a given username.
- `index.js`: Main entry point containing the Express server configuration, route definitions, and handler logic.
- Uses `node-fetch` for external API calls to GitHub.
- Integrated with `redis` for future caching implementation.
