import { createDemoAgentCard, formatCapability } from "@agentville/agentcard";

const targetEnsName = process.env.AGENTVILLE_TARGET ?? "gas-estimator.agentville.eth";
const agentCard = createDemoAgentCard(targetEnsName);
const capabilities = agentCard.capabilities.map(formatCapability).join(", ");

console.log(`[reviewer] resolved ${agentCard.ensName}`);
console.log(`[reviewer] capability ${capabilities}`);
console.log(`[reviewer] fee ${agentCard.fee.amount} ${agentCard.fee.asset}/${agentCard.fee.unit}`);
console.log("[reviewer] AXL transport adapter not wired yet");
