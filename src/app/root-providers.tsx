"use client";
import { LazyMotion, domAnimation } from "motion/react";

import { Toaster } from "@/components/ui/sonner";

export default function RootProviders({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  direction
}: {
  children: React.ReactNode;
  direction: "rtl" | "ltr";
}) {
  return (
    <>
      <LazyMotion features={domAnimation}>{children} </LazyMotion>
      <Toaster />
    </>
  );
}
