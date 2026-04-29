# Agentville

Agentville turns a local agent or script into a billable endpoint: ENS for identity and discovery, AXL for peer-to-peer transport, and KeeperHub for x402 settlement.

## Workspace

- `apps/agentville-ui` — Vite + React demo UI.
- `agents/reviewer` — caller agent skeleton.
- `agents/gas-estimator` — publisher agent skeleton.
- `packages/agentcard` — shared AgentCard and capability types.
- `packages/agentville-cli` — `agentville publish` CLI skeleton.

## Setup

```bash
npm install
npm run typecheck
```

## Local Commands

```bash
npm run dev:ui
npm run dev:reviewer
npm run dev:gas-estimator
npm run agentville -- publish gas-estimator.agentville.eth
```

The current implementation uses demo AgentCard data. Real ENS, AXL, and KeeperHub adapters should replace the demo boundaries without changing the shared contracts.
