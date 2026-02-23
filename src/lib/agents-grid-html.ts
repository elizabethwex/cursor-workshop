/**
 * Build agents grid HTML. Used by agents.astro to avoid template expressions
 * that trigger an Astro/esbuild "Unexpected '.'" bug.
 */
function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export interface BoardAgent {
  name: string;
  team: string;
  role: string;
  startDate?: string;
  avatarUrl?: string;
}

export function getAgentsFromContributors(
  contributorsData: unknown,
  baseUrl: string
): BoardAgent[] {
  const raw = Array.isArray(contributorsData) ? contributorsData : [];
  const base = baseUrl.replace(/\/$/, "") || "";

  return raw
    .map((c) => {
      const o = c && typeof c === "object" ? (c as Record<string, unknown>) : {};
      const name = typeof o.name === "string" ? o.name : "";
      const avatarPath =
        typeof o.avatarUrl === "string" && o.avatarUrl.trim()
          ? o.avatarUrl.trim()
          : undefined;
      return {
        name,
        team: typeof o.team === "string" ? o.team : "",
        role: typeof o.role === "string" ? o.role : "",
        startDate: typeof o.startDate === "string" ? o.startDate : undefined,
        avatarUrl: avatarPath
          ? base
            ? `${base}/${avatarPath.replace(/^\//, "")}`
            : `/${avatarPath.replace(/^\//, "")}`
          : undefined,
      };
    })
    .filter((c) => c.name.length > 0 && c.name !== "Add yourself here");
}

export function getAgentsGridHtml(agents: BoardAgent[]): string {
  if (agents.length === 0) {
    return `<p class="col-span-full text-[#008F11] font-terminal text-center py-12">
          No agents yet. Add yourself via the Contribution module: create a branch, add your entry to <code class="text-[#00FF41]">src/data/contributors.json</code> (name, team, role, startDate, avatarUrl), add your
          image to <code class="text-[#00FF41]">public/avatars/</code>, then open a PR.
        </p>`;
  }

  const cards = agents
    .map((a) => {
      const initial = a.name.length > 0 ? a.name.charAt(0).toUpperCase() : "";
      const avatarHtml = a.avatarUrl
        ? `<img src="${escapeHtml(a.avatarUrl)}" alt="" class="absolute inset-0 w-full h-full object-cover" width="120" height="120" loading="lazy" />`
        : `<div class="absolute inset-0 flex items-center justify-center bg-[#003B00]/50 border-r border-[#003B00]"><span class="text-4xl font-bold text-[#008F11]" aria-hidden="true">${escapeHtml(initial)}</span></div>`;
      const nameUpper = a.name.toUpperCase();
      const teamUpper = a.team.toUpperCase() || "—";
      const roleUpper = a.role.toUpperCase() || "—";
      const startDateHtml =
        a.startDate && a.startDate.trim()
          ? `<p class="text-xs text-[#008F11]/80 mb-2 font-terminal"><span class="uppercase">WEXer since</span> ${escapeHtml(a.startDate.trim())}</p>`
          : "";

      return `<article class="matrix-card group flex flex-row relative overflow-hidden rounded-sm border border-[#003B00]" data-agent-name="${escapeHtml(a.name)}">
  <div class="agents-card-photo w-32 flex-shrink-0 min-h-[140px] relative bg-black/50 overflow-hidden">${avatarHtml}</div>
  <div class="flex-1 min-w-0 flex flex-col p-4 justify-center">
  <h2 class="text-lg font-bold text-[#00FF41] mb-1 truncate" title="${escapeHtml(nameUpper)}">${escapeHtml(nameUpper)}</h2>
  <p class="text-base text-[#008F11] mb-0.5 font-terminal">${escapeHtml(teamUpper)}</p>
  <p class="text-base text-[#008F11]/80 mb-2 font-terminal">${escapeHtml(roleUpper)}</p>
  ${startDateHtml}
  </div>
</article>`;
    })
    .join("\n");

  return cards;
}
