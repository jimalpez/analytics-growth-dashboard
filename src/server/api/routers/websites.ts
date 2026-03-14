import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { mockWebsites } from "@/lib/mock/websites";

export const websitesRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    // TODO: Replace with Prisma query: db.website.findMany(...)
    return mockWebsites;
  }),
});
