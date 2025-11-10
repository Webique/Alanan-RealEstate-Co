"use client";

import {
  Award,
  Building2,
  Clock,
  Eye,
  MapPin,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.About");

  return (
    <section
      id="about"
      className="bg-background relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E488F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="layout relative">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <m.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-semibold"
          >
            <Building2 className="h-4 w-4" />
            {t("title")}
          </m.span>
          <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            {t("subtitle")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            {t("description")}
          </p>
        </m.div>

        {/* Hero Image Section */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="group relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
            <ExportedImage
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
              alt="Anan Real Estate"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Floating Info Cards */}
            <div className="absolute inset-0 flex items-end p-8 lg:p-12">
              <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Established Badge */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">2020</h3>
                    <p className="text-sm text-white/90">{t("established")}</p>
                  </div>
                </m.div>

                {/* Experience Badge */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">5+</h3>
                    <p className="text-sm text-white/90">
                      {t("stats.experience")}
                    </p>
                  </div>
                </m.div>

                {/* Clients Badge */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:col-span-2 lg:col-span-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">1000+</h3>
                    <p className="text-sm text-white/90">
                      {t("stats.clients")}
                    </p>
                  </div>
                </m.div>
              </div>
            </div>
          </div>
        </m.div>

        {/* Company Story */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-card mb-20 rounded-3xl p-8 shadow-lg lg:p-12"
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-primary/10 mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl">
              <Building2 className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-foreground mb-6 text-2xl font-bold lg:text-3xl">
              {t("ourStory")}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("history")}
            </p>
          </div>
        </m.div>

        {/* Vision & Mission Grid */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2">
          {/* Vision Card */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-card group relative overflow-hidden rounded-3xl p-8 shadow-lg transition-all hover:shadow-xl lg:p-10"
          >
            <div className="from-primary/20 absolute right-0 top-0 h-40 w-40 -translate-y-16 translate-x-16 rounded-full bg-gradient-to-br to-transparent blur-3xl" />
            <div className="relative">
              <m.div
                className="from-primary to-primary/80 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Eye className="h-8 w-8 text-white" />
              </m.div>
              <h3 className="text-foreground mb-4 text-2xl font-bold lg:text-3xl">
                {t("vision.title")}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("vision.description")}
              </p>
            </div>
          </m.div>

          {/* Mission Card */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-card group relative overflow-hidden rounded-3xl p-8 shadow-lg transition-all hover:shadow-xl lg:p-10"
          >
            <div className="from-primary/20 absolute right-0 top-0 h-40 w-40 -translate-y-16 translate-x-16 rounded-full bg-gradient-to-br to-transparent blur-3xl" />
            <div className="relative">
              <m.div
                className="from-primary to-primary/80 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Target className="h-8 w-8 text-white" />
              </m.div>
              <h3 className="text-foreground mb-4 text-2xl font-bold lg:text-3xl">
                {t("mission.title")}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("mission.description")}
              </p>
            </div>
          </m.div>
        </div>

        {/* Working Hours Card */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="from-primary/5 to-primary/10 mb-20 rounded-3xl bg-gradient-to-br p-8 shadow-lg lg:p-10"
        >
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-xl">
                <Clock className="text-primary h-7 w-7" />
              </div>
              <h4 className="text-foreground text-2xl font-bold lg:text-3xl">
                {t("workingHours.title")}
              </h4>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-card/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-muted-foreground space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary h-2 w-2 rounded-full" />
                    <span className="font-semibold">
                      {t("workingHours.days")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary h-2 w-2 rounded-full" />
                    <span className="font-semibold">
                      {t("workingHours.hours")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-card/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <p className="font-semibold">
                      {t("workingHours.location")}
                    </p>
                    <p className="text-muted-foreground/70 mt-1 text-sm">
                      {t("workingHours.postalCode")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </m.div>

        {/* Stats Section */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="from-primary/5 to-primary/10 rounded-3xl bg-gradient-to-br p-8 shadow-lg lg:p-12"
        >
          <div className="mb-10 text-center">
            <h3 className="text-foreground text-2xl font-bold lg:text-3xl">
              {t("stats.title")}
            </h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                number: "100%",
                label: t("stats.sharia")
              },
              {
                icon: Building2,
                number: "500+",
                label: t("stats.properties")
              },
              {
                icon: Users,
                number: "1000+",
                label: t("stats.clients")
              },
              {
                icon: TrendingUp,
                number: "5+",
                label: t("stats.experience")
              }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card group rounded-2xl p-6 text-center shadow-md transition-all hover:shadow-xl"
                >
                  <m.div
                    className="bg-primary/10 mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="text-primary h-7 w-7" />
                  </m.div>
                  <m.h4
                    className="text-foreground mb-2 text-3xl font-bold lg:text-4xl"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.2 + index * 0.1
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </m.h4>
                  <p className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </p>
                </m.div>
              );
            })}
          </div>
        </m.div>
      </div>
    </section>
  );
}
