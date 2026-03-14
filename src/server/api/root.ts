import { analyticsRouter } from "@/server/api/routers/analytics";
import { keywordsRouter } from "@/server/api/routers/keywords";
import { leadsRouter } from "@/server/api/routers/leads";
import { usersRouter } from "@/server/api/routers/users";
import { websitesRouter } from "@/server/api/routers/websites";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  analytics: analyticsRouter,
  keywords: keywordsRouter,
  leads: leadsRouter,
  users: usersRouter,
  websites: websitesRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
