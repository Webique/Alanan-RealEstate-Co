import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import ServicesSection from "@/app/[locale]/(landing)/components/services-section";
import WhatsAppFloat from "@/components/whats-app-float";

import AboutSection from "./components/about-section";
import FeaturesSection from "./components/features-section";
import HeroSection from "./components/hero-section";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      {/* <SolutionsTypesSection /> */}
      {/* <ProcessSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <ContactSection /> */}
      <WhatsAppFloat />
    </main>
  );
}
