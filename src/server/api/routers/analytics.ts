import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import {
  mockAnalyticsStats,
  mockCountryData,
  mockDailyVisits,
  mockPageViews,
  mockTrafficSources,
  mockVisits,
} from "@/lib/mock/analytics";

export const analyticsRouter = createTRPCRouter({
  getStats: publicProcedure.query(() => {
    // TODO: Replace with Prisma query: db.visit.aggregate(...)
    return mockAnalyticsStats;
  }),

  getVisits: publicProcedure.query(() => {
    // TODO: Replace with Prisma query: db.visit.findMany(...)
    return mockVisits;
  }),

  getDailyVisits: publicProcedure.query(() => {
    // TODO: Replace with Prisma query: db.visit.groupBy({ by: ['createdAt'], ... })
    return mockDailyVisits;
  }),

  getTrafficSources: publicProcedure.query(() => {
    // TODO: Replace with Prisma query: db.visit.groupBy({ by: ['referrer'], ... })
    return mockTrafficSources;
  }),

  getPageViews: publicProcedure.query(() => {
    // TODO: Replace with Prisma query: db.visit.groupBy({ by: ['page'], ... })
    return mockPageViews;
  }),

  getCountryData: publicProcedure.query(() => {
    // TODO: Replace with Prisma query: db.visit.groupBy({ by: ['country'], ... })
    return mockCountryData;
  }),
});
