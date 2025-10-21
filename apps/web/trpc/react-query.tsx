"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { FC, useState } from "react";

interface ReactQueryClientProviderProps {
  children: React.ReactNode;
}

const ReactQueryClientProvider: FC<ReactQueryClientProviderProps> = ({
  children,
}) => {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          staleTime: 0,
        },
      },
    });
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
