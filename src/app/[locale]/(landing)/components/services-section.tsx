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
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

export default function ServicesSection() {
  const t = useTranslations("IndexPage.Services");

  const services = [
    {
      icon: Home,
      key: "propertyPurchase",
      image: "/images/services/1.jpeg"
    },
    {
      icon: Landmark,
      key: "propertyMortgage",
      image: "/images/services/2.jpeg"
    },
    {
      icon: Building2,
      key: "landAndLoan",
      image: "/images/services/3.jpeg"
    },
    {
      icon: Hammer,
      key: "completionConstruction",
      image: "/images/services/4.jpeg"
    },
    {
      icon: Building,
      key: "selfConstruction",
      image: "/images/services/5.jpeg"
    },
    {
      icon: TrendingUp,
      key: "commercialFinancing",
      image: "/images/services/6.jpeg"
    }
  ];

  return (
    <section
      id="services"
      className="bg-background relative overflow-hidden py-20 lg:py-32"
    >
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
            {t("title")}
          </m.span>
          <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            {t("subtitle")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <m.div
                  className="bg-card relative h-full overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <ExportedImage
                      src={service.image}
                      alt={t(`items.${service.key}.title` as any)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    {/* Gradient Overlay */}
                    <div className="from-primary/30 to-primary/20 absolute inset-0 bg-gradient-to-br" />

                    {/* Icon Badge */}
                    <m.div
                      className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="text-primary h-7 w-7" />
                    </m.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-foreground mb-3 text-xl font-bold">
                      {t(`items.${service.key}.title` as any)}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {t(`items.${service.key}.description` as any)}
                    </p>

                    {/* CTA Button */}
                    <m.a
                      href={siteConfig.links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {t("requestService")}
                      <span className="text-lg rtl:rotate-180">→</span>
                    </m.a>
                  </div>

                  {/* Hover Effect */}
                  <div className="from-primary/5 to-primary/10 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100" />
                </m.div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
