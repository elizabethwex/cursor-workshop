/**
 * Build contributor wall list HTML. Used by ContributorWall.astro to avoid
 * template expressions that trigger an Astro/esbuild "Unexpected '.'" bug.
 */
function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function getContributorWallHtml(
  contributorsData: unknown,
  baseUrl: string
): string {
  const raw = Array.isArray(contributorsData) ? contributorsData : [];
  const base = baseUrl.replace(/\/$/, "") || "";
  const listItems: string[] = [];

  for (const c of raw) {
    const o = c && typeof c === "object" ? (c as Record<string, unknown>) : {};
    const name = typeof o.name === "string" ? o.name : "";
    if (name.length === 0) continue;

    const avatarPath =
      typeof o.avatarUrl === "string" && o.avatarUrl.trim()
        ? o.avatarUrl.trim()
        : undefined;
    const avatarUrl = avatarPath
      ? base
        ? `${base}/${avatarPath.replace(/^\//, "")}`
        : `/${avatarPath.replace(/^\//, "")}`
      : undefined;
    const team = typeof o.team === "string" ? o.team : "";
    const role = typeof o.role === "string" ? o.role : "";
    const initial =
      name.length > 0 ? name.charAt(0).toUpperCase() : "";

    const img = avatarUrl
      ? `<img src="${escapeHtml(avatarUrl)}" alt="" class="contributor-wall-avatar" width="64" height="64" loading="lazy" />`
      : `<span class="contributor-wall-avatar contributor-wall-avatar--placeholder" aria-hidden="true">${escapeHtml(initial)}</span>`;
    const teamSpan = team
      ? `<span class="contributor-wall-team">${escapeHtml(team)}</span>`
      : "";
    const roleSpan = role
      ? `<span class="contributor-wall-role">${escapeHtml(role)}</span>`
      : "";
    listItems.push(
      `<li class="contributor-wall-item">${img}<span class="contributor-wall-name">${escapeHtml(name)}</span>${teamSpan}${roleSpan}</li>`
    );
  }

  return listItems.length > 0 ? listItems.join("") : "";
}
