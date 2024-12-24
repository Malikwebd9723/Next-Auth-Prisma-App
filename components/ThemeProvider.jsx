"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return (
    <React.Fragment>
      {typeof window !== "undefined" ? (
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
      ) : null}
    </React.Fragment>
  );
}
