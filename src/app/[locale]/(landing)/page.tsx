import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import WhatsAppFloat from "@/components/whats-app-float";

import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import FeaturesSection from "./components/features-section";
import HeroSection from "./components/hero-section";
import ProcessSection from "./components/process-section";
import ServicesSection from "./components/services-section";
import SolutionsTypesSection from "./components/solutions-types-section";
import TestimonialsSection from "./components/testimonials-section";

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
      <SolutionsTypesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <WhatsAppFloat />
    </main>
  );
}
