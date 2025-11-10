"use client";

import { Calculator, FileText, HandshakeIcon } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function SolutionsTypesSection() {
  const t = useTranslations("IndexPage.SolutionTypes");

  const solutionCategories = [
    {
      icon: Calculator,
      key: "financing",
      image: "/images/solutions/1.jpeg",
      items: ["subsidized", "landLoan", "refinancing", "offPlan"]
    },
    {
      icon: HandshakeIcon,
      key: "brokerage",
      image: "/images/solutions/2.jpeg",
      items: ["marketing", "management"]
    },
    {
      icon: FileText,
      key: "consulting",
      image: "/images/solutions/3.jpeg",
      items: ["analysis", "investment"]
    }
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
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            {t("description")}
          </p>
        </m.div>

        {/* Solutions Categories */}
        <div className="space-y-12">
          {solutionCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <m.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-card overflow-hidden rounded-3xl shadow-lg"
              >
                <div className="grid gap-0 lg:grid-cols-2">
                  {/* Image Side */}
                  <m.div
                    className="group relative h-64 overflow-hidden lg:h-auto"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ExportedImage
                      src={category.image}
                      alt={t(`categories.${category.key}.title` as any)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    {/* Gradient Overlay */}
                    <div className="from-primary/30 to-primary/20 absolute inset-0 bg-gradient-to-br" />

                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <m.div
                        className="bg-primary/20 flex h-24 w-24 items-center justify-center rounded-full backdrop-blur-sm"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          delay: 0.3
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl">
                          <Icon className="text-primary h-10 w-10" />
                        </div>
                      </m.div>
                    </div>
                  </m.div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-10">
                    <m.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-foreground mb-6 text-2xl font-bold lg:text-3xl">
                        {t(`categories.${category.key}.title` as any)}
                      </h3>

                      {/* Items List */}
                      <div className="space-y-4">
                        {category.items.map((itemKey, itemIndex) => (
                          <m.div
                            key={itemIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.3 + itemIndex * 0.1
                            }}
                            viewport={{ once: true }}
                            className="bg-muted/50 hover:bg-muted group flex gap-4 rounded-xl p-4 transition-all"
                          >
                            <div className="bg-primary/10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                              <span className="text-primary text-sm font-bold">
                                {itemIndex + 1}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-foreground mb-1 font-bold">
                                {t(
                                  `categories.${category.key}.items.${itemKey}.name` as any
                                )}
                              </h4>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {t(
                                  `categories.${category.key}.items.${itemKey}.desc` as any
                                )}
                              </p>
                            </div>
                          </m.div>
                        ))}
                      </div>
                    </m.div>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
