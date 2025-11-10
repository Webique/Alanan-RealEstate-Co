"use client";

import { ArrowRight, Building2 } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const t = useTranslations("IndexPage.Hero");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden lg:min-h-[700px]">
      {/* Background Image with Zoom Animation */}
      <m.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <ExportedImage
          src="/images/hero.jpeg"
          alt="Real Estate Background"
          fill
          className="object-cover brightness-50"
          priority
          unoptimized
        />
      </m.div>

      {/* Gradient Overlays */}
      <div className="from-primary/20 via-primary/10 absolute inset-0 z-10 bg-gradient-to-br to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Animated Light Orbs */}
      <div className="absolute inset-0 z-10 mix-blend-screen">
        <m.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[#1E488F]/30 blur-[100px] sm:h-96 sm:w-96"
        />
        <m.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 end-1/4 h-64 w-64 rounded-full bg-[#1E488F]/25 blur-[100px] sm:h-96 sm:w-96"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 pb-24 pt-20 text-center text-white sm:px-6">
        <m.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-5xl"
        >
          {/* License Badge */}
          <m.div variants={itemVariants} className="mb-8 inline-flex">
            <div className="group relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/30 to-white/10 opacity-50 blur transition duration-300 group-hover:opacity-70" />
              <div className="relative flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 shadow-2xl backdrop-blur-sm">
                <Building2 className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">
                  {t("subtitle")}
                </span>
              </div>
            </div>
          </m.div>

          {/* Main Title */}
          <m.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold leading-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t("title")}
          </m.h1>

          {/* Description */}
          <m.p
            variants={itemVariants}
            className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-white/90 drop-shadow-lg sm:text-lg md:text-xl"
          >
            {t("description")}
          </m.p>

          {/* CTA Buttons */}
          <m.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              className="border-primary hover:border-primary/90 h-auto rounded-full border-2 px-8 py-4 text-base font-bold shadow-2xl has-[>svg]:px-5 sm:px-10 sm:py-4 sm:text-lg sm:has-[>svg]:px-5"
              asChild
            >
              {/* Primary CTA */}
              <m.a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                {t("cta")}
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </m.a>
            </Button>
            {/* Secondary CTA */}
            <Button
              className="relative h-auto rounded-full border-2 border-white/70 bg-white/10 px-8 py-4 text-base font-bold text-white shadow-2xl backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 sm:px-10 sm:py-4 sm:text-lg"
              asChild
            >
              <m.a
                href="#about"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                {t("learnMore")}
              </m.a>
            </Button>
          </m.div>
        </m.div>
      </div>

      {/* Scroll Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 sm:bottom-10"
      >
        <m.a href="#about" className="flex flex-col items-center gap-2">
          <m.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-xs font-medium uppercase tracking-widest text-white/80 sm:text-sm"
          >
            {t("scrollText")}
          </m.span>
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1 backdrop-blur-sm hover:border-white"
          >
            <m.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-2 w-2 rounded-full bg-white"
            />
          </m.div>
        </m.a>
      </m.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 end-0 start-0 z-10 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
}
