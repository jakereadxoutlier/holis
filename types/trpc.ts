import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

export type AppRouter = {};
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
