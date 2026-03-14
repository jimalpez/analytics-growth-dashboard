import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { mockKeywords, mockKeywordStats } from "@/lib/mock/keywords";

export const keywordsRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    // TODO: Replace with Prisma query: db.keyword.findMany(...)
    return mockKeywords;
  }),

  getStats: publicProcedure.query(() => {
    // TODO: Replace with Prisma query: db.keyword.aggregate(...)
    return mockKeywordStats;
  }),
});
