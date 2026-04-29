# AGENTS.MD

Project: Agentville hackathon build.

## Development Constraints

- Optimize for a working demo over broad abstractions.
- Keep code readable enough for another teammate to modify during the hackathon.
- Prefer explicit data shapes, named functions, and small modules.
- Avoid clever control flow, magic globals, and hidden side effects.
- Do not add new frameworks, runtimes, or state libraries without a concrete need.
- Keep partner integrations isolated behind narrow adapters:
  - ENS: name resolution and text-record writes.
  - AXL: transport send/receive only.
  - KeeperHub: invoice settlement and receipt lookup only.
- Use shared packages for cross-app contracts, not copy-pasted types.
- Treat `AgentCard`, A2A payloads, invoice payloads, and receipts as stable interfaces.
- Validate external inputs at boundaries before using them.
- Prefer structured errors with actionable messages over raw thrown strings.
- Log important demo events clearly: publish, resolve, connect, send, settle, update reputation.
- Keep UI components small and purpose-named.
- UI text should show product facts, not explain implementation mechanics.
- No login, mobile layout work, conversation history, extra personas, or fourth partner.
- If a shortcut is taken for demo reliability, mark it with `DEMO:` and explain why.
- If behavior depends on testnet state, document the exact name, address, or tx link nearby.
- Do not introduce unrelated refactors while fixing a blocked integration.
- Delete dead code quickly; do not leave alternate implementations commented out.
- Keep README/setup commands accurate as the repo changes.

## Before Committing

- Run the relevant typecheck, lint, or smoke command if it exists.
- Verify the happy-path demo still reads from real ENS metadata unless explicitly in fallback mode.
- Mention any skipped verification in the commit or PR notes.
