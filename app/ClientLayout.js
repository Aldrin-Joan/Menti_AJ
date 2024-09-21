"use client"; // Ensure this is a client-side component

import { ClerkProvider } from "@clerk/nextjs";

export default function ClientLayout({ children }) {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
}
