export type Capability = {
  namespace: string;
  name: string;
};

export type FeeSchedule = {
  asset: "USDC";
  amount: string;
  unit: "call";
};

export type ReputationSummary = {
  settledCallCount: number;
  totalSettledUsdc: string;
};

export type AgentCard = {
  ensName: string;
  displayName: string;
  endpoint: string;
  axlPublicKey: string;
  capabilities: Capability[];
  fee: FeeSchedule;
  reputation: ReputationSummary;
};

export type AgentCardResolver = {
  resolveAgentCard(ensName: string): Promise<AgentCard>;
};

export function formatCapability(capability: Capability): string {
  return `${capability.namespace}.${capability.name}`;
}

export function createDemoAgentCard(ensName: string): AgentCard {
  return {
    ensName,
    displayName: "Gas Estimator",
    endpoint: "axl://localhost:9002",
    axlPublicKey: "demo-axl-public-key",
    capabilities: [{ namespace: "evm.gas", name: "estimate" }],
    fee: { asset: "USDC", amount: "0.10", unit: "call" },
    reputation: { settledCallCount: 0, totalSettledUsdc: "0.00" }
  };
}
