/**
 * Agents registry: people who completed the terminal flow.
 * Stored in localStorage; used by the Agents page and TerminalBlock.
 */

import { getProgress } from "./progress";

const AGENTS_KEY = "cursor-workshop-agents";
const CURRENT_AGENT_KEY = "cursor-workshop-current-agent-id";

export interface Agent {
  id: string;
  name: string;
  team: string;
  role: string;
  imageUrl: string | null;
  completedModuleCount: number;
  createdAt: number;
}

function getAgentsRaw(): Agent[] {
  try {
    const raw = localStorage.getItem(AGENTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is Agent =>
        item &&
        typeof item === "object" &&
        typeof (item as Agent).id === "string" &&
        typeof (item as Agent).name === "string" &&
        typeof (item as Agent).team === "string" &&
        typeof (item as Agent).role === "string"
    );
  } catch {
    return [];
  }
}

function saveAgents(agents: Agent[]): void {
  try {
    localStorage.setItem(AGENTS_KEY, JSON.stringify(agents));
  } catch {
    // ignore
  }
}

/**
 * Read all agents from localStorage.
 */
export function getAgents(): Agent[] {
  return getAgentsRaw();
}

/**
 * Add an agent (called when user completes terminal with Y).
 * Sets currentAgentId to the new agent's id.
 */
export function addAgent(payload: { name: string; team: string; role: string }): Agent {
  const progress = getProgress();
  const agent: Agent = {
    id: crypto.randomUUID(),
    name: payload.name.trim() || "Agent",
    team: payload.team.trim() || "—",
    role: payload.role.trim() || "—",
    imageUrl: null,
    completedModuleCount: progress.completedModuleIds.length,
    createdAt: Date.now(),
  };
  const agents = getAgentsRaw();
  agents.push(agent);
  saveAgents(agents);
  setCurrentAgentId(agent.id);
  return agent;
}

/**
 * Get the ID of the agent who last completed the terminal (for live level).
 */
export function getCurrentAgentId(): string | null {
  try {
    return localStorage.getItem(CURRENT_AGENT_KEY);
  } catch {
    return null;
  }
}

/**
 * Get the current agent (who last completed the terminal), or null.
 */
export function getCurrentAgent(): Agent | null {
  const id = getCurrentAgentId();
  if (!id) return null;
  return getAgentsRaw().find((a) => a.id === id) ?? null;
}

/**
 * Set the current agent ID.
 */
export function setCurrentAgentId(id: string | null): void {
  try {
    if (id === null) {
      localStorage.removeItem(CURRENT_AGENT_KEY);
    } else {
      localStorage.setItem(CURRENT_AGENT_KEY, id);
    }
  } catch {
    // ignore
  }
}

/**
 * Update an agent's image URL (for contribution lesson).
 */
export function updateAgentImage(agentId: string, imageUrl: string | null): void {
  const agents = getAgentsRaw();
  const index = agents.findIndex((a) => a.id === agentId);
  if (index === -1) return;
  agents[index] = { ...agents[index], imageUrl };
  saveAgents(agents);
}

/**
 * Remove one agent (for testing).
 */
export function removeAgent(agentId: string): void {
  const agents = getAgentsRaw().filter((a) => a.id !== agentId);
  saveAgents(agents);
  if (getCurrentAgentId() === agentId) {
    setCurrentAgentId(null);
  }
}

/**
 * Clear all agents and current agent ID (for testing).
 */
export function clearAllAgents(): void {
  try {
    localStorage.removeItem(AGENTS_KEY);
    localStorage.removeItem(CURRENT_AGENT_KEY);
  } catch {
    // ignore
  }
}

/**
 * Level label from completed module count (optional display).
 */
const LEVEL_LABELS: Record<number, string> = {
  0: "Observer",
  1: "Requested",
  2: "Localhost",
  3: "Operator",
  4: "Contributor",
  5: "Cleared",
};

export function getLevelLabel(count: number): string {
  return LEVEL_LABELS[count] ?? (count > 5 ? "Cleared" : `Level ${count}`);
}
