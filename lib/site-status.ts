export type SiteStatus = "online" | "maintenance" | "offline";

// Single source of truth for app-wide status. Change this value to update
// the status badge everywhere it's rendered (currently the header).
export const SITE_STATUS: SiteStatus = "maintenance";

export const SITE_STATUS_LABEL: Record<SiteStatus, string> = {
  online: "SYSTEM ONLINE",
  maintenance: "UNDER MAINTENANCE",
  offline: "SYSTEM OFFLINE",
};
