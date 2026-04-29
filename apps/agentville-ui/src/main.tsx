import React from "react";
import { createRoot } from "react-dom/client";
import { createDemoAgentCard, formatCapability } from "@agentville/agentcard";
import "./styles.css";

const agentCard = createDemoAgentCard("gas-estimator.agentville.eth");
const capabilities = agentCard.capabilities.map(formatCapability);

function App(): JSX.Element {
  return (
    <main className="shell">
      <section className="agent-card" aria-label="Resolved agent card">
        <div>
          <p className="source">ENS</p>
          <h1>{agentCard.ensName}</h1>
          <p>{agentCard.displayName}</p>
        </div>
        <dl>
          <div>
            <dt>Capability</dt>
            <dd>{capabilities.join(", ")}</dd>
          </div>
          <div>
            <dt>Fee</dt>
            <dd>
              {agentCard.fee.amount} {agentCard.fee.asset} / {agentCard.fee.unit}
            </dd>
          </div>
          <div>
            <dt>Reputation</dt>
            <dd>
              {agentCard.reputation.settledCallCount} calls, $
              {agentCard.reputation.totalSettledUsdc} settled
            </dd>
          </div>
        </dl>
      </section>

      <section className="conversation" aria-label="Agent conversation">
        <p className="source">AXL</p>
        <div className="bubble">Reviewer requests deployment gas estimate.</div>
        <div className="bubble response">Gas estimator transport adapter pending.</div>
        <div className="receipt">KeeperHub receipt link pending</div>
      </section>
    </main>
  );
}

const root = document.getElementById("root");

if (root === null) {
  throw new Error("Missing root element");
}

createRoot(root).render(<App />);
