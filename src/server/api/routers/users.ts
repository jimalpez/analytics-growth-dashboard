import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { mockUsers, mockCurrentUser } from "@/lib/mock/users";

// Mutable copy so role changes persist within a server session
const users = [...mockUsers.map((u) => ({ ...u }))];

export const usersRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    // TODO: Replace with Prisma query: db.user.findMany(...)
    return users;
  }),

  getCurrent: publicProcedure.query(() => {
    // TODO: Replace with NextAuth session + Prisma query
    return mockCurrentUser;
  }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        role: z.string().default("user"),
      }),
    )
    .mutation(({ input }) => {
      // TODO: Replace with Prisma query: db.user.create({ data: input })
      const newUser = {
        id: `u${Date.now()}`,
        name: input.name,
        email: input.email,
        role: input.role,
        createdAt: new Date(),
      };
      users.push(newUser);
      return newUser;
    }),

  updateRole: publicProcedure
    .input(z.object({ id: z.string(), role: z.string() }))
    .mutation(({ input }) => {
      // TODO: Replace with Prisma query: db.user.update({ where: { id }, data: { role } })
      const user = users.find((u) => u.id === input.id);
      if (!user) throw new Error("User not found");
      user.role = input.role;
      return user;
    }),
});
