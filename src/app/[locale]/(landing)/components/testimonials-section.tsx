"use client";

import { Quote, Star } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("IndexPage.Testimonials");

  const testimonialImages = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80"
  ];

  return (
    <section className="bg-muted/30 relative overflow-hidden py-20 lg:py-32">
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
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {t("description")}
          </p>
        </m.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((index) => (
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
                {/* Quote Icon and Rating */}
                <div className="mb-6 flex items-center justify-between">
                  <Quote className="text-primary/20 h-10 w-10" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-primary fill-primary h-5 w-5"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t(`items.${index}.text` as any)}
                </p>

                {/* Client Info */}
                <div className="border-muted flex items-center gap-4 border-t pt-6">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <ExportedImage
                      src={testimonialImages[index]}
                      alt={t(`items.${index}.name` as any)}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold">
                      {t(`items.${index}.name` as any)}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t(`items.${index}.role` as any)}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="from-primary/5 to-primary/10 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100" />
              </m.div>
            </m.div>
          ))}
        </div>

        {/* Trust Badge */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary/10 text-primary inline-flex items-center gap-3 rounded-full px-8 py-4">
            <Star className="fill-primary text-primary h-6 w-6" />
            <span className="text-lg font-bold">{t("trustBadge")}</span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
