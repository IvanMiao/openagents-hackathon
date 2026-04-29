import { createDemoAgentCard } from "@agentville/agentcard";

const ensName = process.env.AGENTVILLE_ENS_NAME ?? "gas-estimator.agentville.eth";
const agentCard = createDemoAgentCard(ensName);

console.log(`[gas-estimator] published as ${agentCard.ensName}`);
console.log("[gas-estimator] A2A handler not wired yet");
console.log("[gas-estimator] KeeperHub settlement adapter not wired yet");
