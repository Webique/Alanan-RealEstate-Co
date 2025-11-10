"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:!bg-primary group-[.toaster]:!text-primary-foreground group-[.toaster]:border group-[.toaster]:!border-primary-foreground/20 group-[.toaster]:shadow-xl group-[.toaster]:shadow-primary/40 !py-3 group-[.toaster]:rounded-lg !text-lg",
          description: "group-[.toast]:!text-primary-foreground/90 text-base",
          title: "!leading-6 !font-normal",
          actionButton:
            "group-[.toast]:bg-primary-foreground group-[.toast]:text-primary group-[.toast]:font-normal group-[.toast]:px-4 group-[.toast]:py-2 group-[.toast]:rounded-md text-base",
          cancelButton:
            "group-[.toast]:bg-primary-foreground/10 group-[.toast]:text-primary-foreground group-[.toast]:px-4 group-[.toast]:py-2 group-[.toast]:rounded-md hover:group-[.toast]:bg-primary-foreground/20 text-base",
          icon: "group-[.toast]:!text-primary-foreground",
          loader:
            "group-[.toast] [&>.sonner-spinner>.sonner-loading-bar]:!bg-current",
          closeButton:
            "!right-[unset] ltr:!right-3 ltr:!left-[unset] !left-3 !border-none top-0 !transform-none hover:opacity-70 bottom-0 my-auto h-auto w-auto [&>svg]:size-6 [&>svg]:!text-primary-foreground !bg-transparent"
        }
      }}
      position="top-center"
      {...props}
    />
  );
};

export { Toaster };
