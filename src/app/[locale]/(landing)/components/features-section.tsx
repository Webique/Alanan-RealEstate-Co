"use client";

import { Award, CheckCircle, Clock, Shield, Users, Zap } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("IndexPage.Features");

  const features = [
    {
      icon: Shield,
      key: "sharia"
    },
    {
      icon: Users,
      key: "team"
    },
    {
      icon: Clock,
      key: "speed"
    },
    {
      icon: Award,
      key: "experience"
    },
    {
      icon: CheckCircle,
      key: "solutions"
    },
    {
      icon: Zap,
      key: "prices"
    }
  ];

  return (
    <section className="bg-muted/30 relative overflow-hidden py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
          className="mb-16 text-center"
        >
          <m.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-6 py-2 text-sm font-semibold"
          >
            {t("subtitle")}
          </m.span>
          <h2 className="text-foreground text-3xl font-bold md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </m.div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <m.div
                  className="bg-card relative h-full overflow-hidden rounded-2xl p-8 shadow-lg transition-all hover:shadow-xl"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="from-primary/5 to-primary/10 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* Icon */}
                  <m.div
                    className="bg-primary/10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="text-primary h-8 w-8" />
                  </m.div>

                  {/* Content */}
                  <h3 className="text-foreground mb-3 text-xl font-bold">
                    {t(`items.${feature.key}.title` as any)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`items.${feature.key}.description` as any)}
                  </p>
                </m.div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
