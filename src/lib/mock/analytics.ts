export const mockVisits = [
  { id: "v1", websiteId: "w1", page: "/", referrer: "google.com", country: "US", createdAt: new Date("2026-03-01") },
  { id: "v2", websiteId: "w1", page: "/pricing", referrer: "google.com", country: "US", createdAt: new Date("2026-03-02") },
  { id: "v3", websiteId: "w1", page: "/blog/seo-tips", referrer: "twitter.com", country: "UK", createdAt: new Date("2026-03-03") },
  { id: "v4", websiteId: "w1", page: "/", referrer: null, country: "DE", createdAt: new Date("2026-03-04") },
  { id: "v5", websiteId: "w1", page: "/about", referrer: "linkedin.com", country: "CA", createdAt: new Date("2026-03-05") },
  { id: "v6", websiteId: "w1", page: "/contact", referrer: "google.com", country: "US", createdAt: new Date("2026-03-06") },
  { id: "v7", websiteId: "w1", page: "/blog/growth-hacks", referrer: "reddit.com", country: "AU", createdAt: new Date("2026-03-07") },
  { id: "v8", websiteId: "w1", page: "/pricing", referrer: "google.com", country: "FR", createdAt: new Date("2026-03-08") },
  { id: "v9", websiteId: "w1", page: "/", referrer: "bing.com", country: "US", createdAt: new Date("2026-03-09") },
  { id: "v10", websiteId: "w1", page: "/features", referrer: "google.com", country: "IN", createdAt: new Date("2026-03-10") },
  { id: "v11", websiteId: "w1", page: "/blog/analytics-guide", referrer: "twitter.com", country: "US", createdAt: new Date("2026-03-10") },
  { id: "v12", websiteId: "w1", page: "/", referrer: "facebook.com", country: "BR", createdAt: new Date("2026-03-11") },
  { id: "v13", websiteId: "w1", page: "/pricing", referrer: null, country: "JP", createdAt: new Date("2026-03-11") },
  { id: "v14", websiteId: "w1", page: "/contact", referrer: "google.com", country: "US", createdAt: new Date("2026-03-12") },
  { id: "v15", websiteId: "w1", page: "/", referrer: "google.com", country: "MX", createdAt: new Date("2026-03-13") },
];

export const mockTrafficSources = [
  { source: "Google", visits: 6842, percentage: 45.2 },
  { source: "Direct", visits: 3210, percentage: 21.2 },
  { source: "Twitter", visits: 1856, percentage: 12.3 },
  { source: "LinkedIn", visits: 1243, percentage: 8.2 },
  { source: "Reddit", visits: 987, percentage: 6.5 },
  { source: "Facebook", visits: 654, percentage: 4.3 },
  { source: "Bing", visits: 348, percentage: 2.3 },
];

export const mockPageViews = [
  { page: "/", views: 4521 },
  { page: "/pricing", views: 2134 },
  { page: "/blog/seo-tips", views: 1876 },
  { page: "/features", views: 1432 },
  { page: "/contact", views: 987 },
  { page: "/about", views: 876 },
  { page: "/blog/growth-hacks", views: 743 },
  { page: "/blog/analytics-guide", views: 654 },
];

export const mockDailyVisits = [
  { date: "Mar 1", visits: 842 },
  { date: "Mar 2", visits: 956 },
  { date: "Mar 3", visits: 1023 },
  { date: "Mar 4", visits: 879 },
  { date: "Mar 5", visits: 1102 },
  { date: "Mar 6", visits: 1245 },
  { date: "Mar 7", visits: 1367 },
  { date: "Mar 8", visits: 998 },
  { date: "Mar 9", visits: 1089 },
  { date: "Mar 10", visits: 1456 },
  { date: "Mar 11", visits: 1234 },
  { date: "Mar 12", visits: 1378 },
  { date: "Mar 13", visits: 1502 },
  { date: "Mar 14", visits: 1289 },
];

export const mockCountryData = [
  { country: "United States", code: "US", visits: 5432, percentage: 35.9 },
  { country: "United Kingdom", code: "UK", visits: 2134, percentage: 14.1 },
  { country: "Germany", code: "DE", visits: 1567, percentage: 10.4 },
  { country: "Canada", code: "CA", visits: 1243, percentage: 8.2 },
  { country: "France", code: "FR", visits: 987, percentage: 6.5 },
  { country: "India", code: "IN", visits: 876, percentage: 5.8 },
  { country: "Australia", code: "AU", visits: 765, percentage: 5.1 },
  { country: "Brazil", code: "BR", visits: 654, percentage: 4.3 },
  { country: "Japan", code: "JP", visits: 543, percentage: 3.6 },
  { country: "Mexico", code: "MX", visits: 432, percentage: 2.9 },
];

export const mockAnalyticsStats = {
  totalVisits: 15140,
  uniqueVisitors: 8743,
  bounceRate: 34.2,
  avgSessionDuration: "3m 24s",
  pageViewsToday: 1289,
  visitsTrend: 12.5,
  visitorsTrend: 8.3,
  bounceTrend: -2.1,
  durationTrend: 5.7,
};
