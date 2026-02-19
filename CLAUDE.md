# Plugma

## Purpose
Figma plugin development framework. Monorepo with CLI tooling, shared libraries, and documentation website.

## Quick Start
```bash
pnpm install
pnpm build              # Build all packages
pnpm test               # Run tests (vitest)
pnpm publish            # Publish via Lerna
```

## Structure
```
packages/
├── plugma/             # Core CLI and dev server
├── create-plugma/      # Project scaffolding (create-plugma)
├── shared/             # Shared utilities
└── website/            # Documentation site
docs/                   # Additional documentation
wip/                    # Work in progress
```

## Tech Stack
TypeScript, pnpm workspaces, Lerna (publishing), Vitest

## Current State
Active development. Requires Node >= 20.17.0, pnpm >= 9.10.0.

## Key Files
- `packages/plugma/` - Main package
- `packages/create-plugma/` - Scaffolding CLI
- `build.sh` - Build script
- `lerna.json` - Publishing config
- `vitest.config.ts` - Test config
