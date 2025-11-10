"use client";

import {
    Building,
    Building2,
    Hammer,
    Home,
    Landmark,
    TrendingUp
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

export default function ServicesSection() {
  const t = useTranslations("IndexPage.Services");

  const services = [
    {
      icon: Home,
      title: t("items.propertyPurchase.title"),
      description: t("items.propertyPurchase.description"),
      gradient: "from-blue-500 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
    },
    {
      icon: Landmark,
      title: t("items.propertyMortgage.title"),
      description: t("items.propertyMortgage.description"),
      gradient: "from-purple-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&q=80"
    },
    {
      icon: Building2,
      title: t("items.landAndLoan.title"),
      description: t("items.landAndLoan.description"),
      gradient: "from-green-500 to-emerald-500",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80"
    },
    {
      icon: Hammer,
      title: t("items.completionConstruction.title"),
      description: t("items.completionConstruction.description"),
      gradient: "from-orange-500 to-red-500",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
    },
    {
      icon: Building,
      title: t("items.selfConstruction.title"),
      description: t("items.selfConstruction.description"),
      gradient: "from-indigo-500 to-blue-500",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80"
    },
    {
      icon: TrendingUp,
      title: t("items.commercialFinancing.title"),
      description: t("items.commercialFinancing.description"),
      gradient: "from-yellow-500 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
    }
  ];

  return (
    <section
      id="services"
      className="bg-muted/30 relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="bg-grid-pattern absolute inset-0" />
      </div>

      <div className="layout relative z-10">
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
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              ✓ {t("note")}
            </span>
          </p>
        </m.div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <m.div
                  className="bg-card relative h-full overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`}
                    />

                    {/* Icon Overlay */}
                    <m.div
                      className="absolute bottom-4 right-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon
                        className={`h-8 w-8 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}
                      />
                    </m.div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Title */}
                    <h3 className="text-foreground mb-4 text-xl font-bold">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <m.a
                      href={siteConfig.links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {t("requestService")}
                      <span className="text-lg">←</span>
                    </m.a>
                  </div>

                  {/* Hover Effect */}
                  <div className="from-primary/5 to-secondary/5 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100" />
                </m.div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
