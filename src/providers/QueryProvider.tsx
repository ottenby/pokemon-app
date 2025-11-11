"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { getQueryClient } from "./get-query-cllient";

type QueryProviderProps = {
  children: React.ReactNode;
};

const QueryProvider = ({ children }: QueryProviderProps) => {
  const client: QueryClient = getQueryClient();

  return (
    <QueryClientProvider client={client}> {children} </QueryClientProvider>
  );
};

export default QueryProvider;
