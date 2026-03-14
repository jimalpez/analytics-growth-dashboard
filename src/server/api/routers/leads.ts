import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { mockLeads, mockLeadStats } from "@/lib/mock/leads";

export const leadsRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    // TODO: Replace with Prisma query: db.lead.findMany(...)
    return mockLeads;
  }),

  getStats: publicProcedure.query(() => {
    // TODO: Replace with Prisma query: db.lead.aggregate(...)
    return mockLeadStats;
  }),

  getByStatus: publicProcedure
    .input(z.object({ status: z.string() }))
    .query(({ input }) => {
      // TODO: Replace with Prisma query: db.lead.findMany({ where: { status } })
      return mockLeads.filter((lead) => lead.status === input.status);
    }),

  updateStatus: publicProcedure
    .input(z.object({ id: z.string(), status: z.string() }))
    .mutation(({ input }) => {
      // TODO: Replace with Prisma query: db.lead.update({ where: { id }, data: { status } })
      const lead = mockLeads.find((l) => l.id === input.id);
      if (!lead) throw new Error("Lead not found");
      return { ...lead, status: input.status };
    }),
});
