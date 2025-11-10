"use client";

import { ArrowRight } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const t = useTranslations("IndexPage.Hero");

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
          alt="Real Estate Background"
          className="h-full w-full object-cover"
        />
        <div className="from-primary via-primary/95 to-secondary absolute inset-0 bg-gradient-to-br opacity-90" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="bg-grid-pattern absolute inset-0" />
      </div>

      {/* Animated Shapes */}
      <m.div
        className="bg-secondary/20 absolute -right-20 top-20 h-96 w-96 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <m.div
        className="bg-accent/20 absolute -left-20 bottom-20 h-96 w-96 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="layout relative z-10 flex min-h-screen items-center py-20">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm">
                {t("subtitle")}
              </span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            >
              {t("title")}
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg leading-relaxed text-white/90 md:text-xl"
            >
              {t("description")}
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <m.a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("cta")}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </m.a>

              <m.a
                href="#about"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("learnMore")}
              </m.a>
            </m.div>
          </m.div>

          {/* Image/Illustration Side */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative hidden lg:flex lg:items-center lg:justify-center"
          >
            <m.div
              className="relative h-[500px] w-full"
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Decorative Cards */}
              <m.div
                className="absolute left-0 top-20 w-64 rounded-2xl bg-white/10 p-6 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="bg-secondary flex h-12 w-12 items-center justify-center rounded-full">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">شراء عقار</p>
                    <p className="text-lg font-bold text-white">
                      Property Purchase
                    </p>
                  </div>
                </div>
              </m.div>

              <m.div
                className="absolute bottom-20 right-0 w-64 rounded-2xl bg-white/10 p-6 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="bg-accent flex h-12 w-12 items-center justify-center rounded-full">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">بناء ذاتي</p>
                    <p className="text-lg font-bold text-white">
                      Self-Construction
                    </p>
                  </div>
                </div>
              </m.div>

              <m.div
                className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/10 p-6 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">متوافق مع الشريعة</p>
                    <p className="text-lg font-bold text-white">
                      Sharia-Compliant
                    </p>
                  </div>
                </div>
              </m.div>
            </m.div>
          </m.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
