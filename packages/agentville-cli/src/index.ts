#!/usr/bin/env node

import { createDemoAgentCard, formatCapability } from "@agentville/agentcard";

function printPublishPreview(ensName: string): void {
  const card = createDemoAgentCard(ensName);
  const capabilities = card.capabilities.map(formatCapability).join(", ");

  console.log(`ENS subname ready          ${card.ensName}`);
  console.log(`Capability                 ${capabilities}`);
  console.log(`Fee                        ${card.fee.amount} ${card.fee.asset} per ${card.fee.unit}`);
  console.log("AXL status                 not checked yet");
  console.log("KeeperHub settlement       not checked yet");
}

function main(argv: string[]): void {
  const command = argv[2] ?? "help";
  const ensName = argv[3] ?? "gas-estimator.agentville.eth";

  if (command === "publish") {
    printPublishPreview(ensName);
    return;
  }

  console.log("Usage: agentville publish <ens-name>");
}

main(process.argv);
