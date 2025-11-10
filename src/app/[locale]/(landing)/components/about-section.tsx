"use client";

import { Building2, Eye, Target } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.About");

  const features = [
    {
      icon: Eye,
      title: t("vision.title"),
      description: t("vision.description")
    },
    {
      icon: Target,
      title: t("mission.title"),
      description: t("mission.description")
    }
  ];

  return (
    <section
      id="about"
      className="bg-background relative overflow-hidden py-20 lg:py-32"
    >
      <div className="layout">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <m.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-secondary/10 text-secondary mb-4 inline-block rounded-full px-6 py-2 text-sm font-semibold"
          >
            {t("title")}
          </m.span>
          <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            {t("subtitle")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            {t("description")}
          </p>
        </m.div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Company Story */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Company Image */}
            <m.div
              className="overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Anan Real Estate"
                className="h-64 w-full object-cover"
              />
            </m.div>

            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-4">
                <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
                  <Building2 className="text-primary h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-foreground text-2xl font-bold">2020</h3>
                  <p className="text-muted-foreground text-sm">تأسست الشركة</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("history")}
              </p>
            </div>

            {/* Working Hours Card */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="from-secondary/10 to-accent/10 rounded-2xl bg-gradient-to-br p-8"
            >
              <h4 className="text-foreground mb-4 text-xl font-bold">
                {t("workingHours.title")}
              </h4>
              <div className="text-muted-foreground space-y-3">
                <p>
                  <span className="font-semibold">
                    {t("workingHours.days")}
                  </span>
                </p>
                <p>{t("workingHours.hours")}</p>
                <p className="pt-2 text-sm">{t("workingHours.location")}</p>
                <p className="text-sm">{t("workingHours.postalCode")}</p>
              </div>
            </m.div>
          </m.div>

          {/* Right: Vision & Mission */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card group rounded-2xl p-8 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <m.div
                      className="from-primary to-secondary flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </m.div>
                    <h3 className="text-foreground text-2xl font-bold">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </m.div>
              );
            })}
          </m.div>
        </div>

        {/* Stats Section */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-3"
        >
          {[
            {
              number: "5+",
              label: "سنوات من الخبرة",
              labelEn: "Years of Experience"
            },
            {
              number: "1000+",
              label: "عميل راضٍ",
              labelEn: "Satisfied Clients"
            },
            {
              number: "100%",
              label: "متوافق مع الشريعة",
              labelEn: "Sharia-Compliant"
            }
          ].map((stat, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="from-primary/5 to-secondary/5 rounded-2xl bg-gradient-to-br p-8 text-center"
            >
              <m.h4
                className="text-primary mb-2 text-4xl font-bold md:text-5xl"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.3 + index * 0.1
                }}
                viewport={{ once: true }}
              >
                {stat.number}
              </m.h4>
              <p className="text-muted-foreground text-sm font-semibold">
                {stat.label}
              </p>
              <p className="text-muted-foreground/70 text-xs">{stat.labelEn}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
