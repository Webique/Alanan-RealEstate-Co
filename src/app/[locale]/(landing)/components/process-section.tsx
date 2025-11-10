"use client";

import { CheckCircle, FileText, MessageSquare, PhoneCall } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function ProcessSection() {
  const t = useTranslations("IndexPage.Process");

  const steps = [
    {
      icon: PhoneCall,
      number: "01",
      key: "contact",
      image: "/images/process/1.jpeg"
    },
    {
      icon: FileText,
      number: "02",
      key: "documents",
      image: "/images/process/2.jpeg"
    },
    {
      icon: MessageSquare,
      number: "03",
      key: "consultation",
      image: "/images/process/3.jpeg"
    },
    {
      icon: CheckCircle,
      number: "04",
      key: "financing",
      image: "/images/process/4.jpeg"
    }
  ];

  return (
    <section className="bg-background relative overflow-hidden py-20 lg:py-32">
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
          className="mb-16 text-center"
        >
          <m.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-6 py-2 text-sm font-semibold"
          >
            {t("badge")}
          </m.span>
          <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            {t("description")}
          </p>
        </m.div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <m.div
                  className="bg-card relative h-full overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Image Background */}
                  <div className="relative h-48 overflow-hidden">
                    <ExportedImage
                      src={step.image}
                      alt={t(`steps.${step.key}.title` as any)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    {/* Gradient Overlay */}
                    <div className="from-primary/30 to-primary/20 absolute inset-0 bg-gradient-to-br" />

                    {/* Step Number */}
                    <div className="absolute right-4 top-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <span className="text-2xl font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
                        <Icon className="text-primary h-7 w-7" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-foreground mb-3 text-xl font-bold">
                      {t(`steps.${step.key}.title` as any)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`steps.${step.key}.description` as any)}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="from-primary/5 to-primary/10 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100" />
                </m.div>

                {/* Connector Line (except for last item on desktop) */}
                {index < steps.length - 1 && (
                  <div className="from-primary to-primary/50 absolute -right-4 top-24 hidden h-0.5 w-8 bg-gradient-to-r lg:block" />
                )}
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
