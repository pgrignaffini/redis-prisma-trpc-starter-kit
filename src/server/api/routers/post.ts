import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  createPost: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.post.create({
        data: {
          text: input.text,
        },
      });
    }),
  getAllPosts: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
