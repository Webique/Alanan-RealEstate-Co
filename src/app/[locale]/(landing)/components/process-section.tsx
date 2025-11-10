"use client";

import { CheckCircle, FileText, MessageSquare, PhoneCall } from "lucide-react";
import * as m from "motion/react-m";

export default function ProcessSection() {
  const steps = [
    {
      icon: PhoneCall,
      number: "01",
      titleAr: "تواصل معنا",
      titleEn: "Contact Us",
      descAr: "تواصل معنا عبر الواتساب أو املأ نموذج الطلب",
      descEn: "Contact us via WhatsApp or fill out the request form",
      gradient: "from-blue-500 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
    },
    {
      icon: FileText,
      number: "02",
      titleAr: "تقديم المستندات",
      titleEn: "Submit Documents",
      descAr: "قدم المستندات المطلوبة وسنقوم بمراجعتها",
      descEn: "Submit required documents and we'll review them",
      gradient: "from-purple-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80"
    },
    {
      icon: MessageSquare,
      number: "03",
      titleAr: "الاستشارة والتقييم",
      titleEn: "Consultation & Evaluation",
      descAr: "نقدم لك أفضل الحلول المناسبة لاحتياجاتك",
      descEn: "We provide you with the best solutions for your needs",
      gradient: "from-green-500 to-emerald-500",
      image:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80"
    },
    {
      icon: CheckCircle,
      number: "04",
      titleAr: "الحصول على التمويل",
      titleEn: "Get Financing",
      descAr: "احصل على التمويل وابدأ في تحقيق حلمك",
      descEn: "Get financing and start achieving your dream",
      gradient: "from-orange-500 to-red-500",
      image:
        "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&q=80"
    }
  ];

  return (
    <section className="from-background to-muted/30 relative overflow-hidden bg-gradient-to-b py-20 lg:py-32">
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
            className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-6 py-2 text-sm font-semibold"
          >
            كيف نعمل
          </m.span>
          <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            <span className="block">خطوات الحصول على التمويل</span>
            <span className="text-muted-foreground mt-2 block text-2xl md:text-3xl">
              Steps to Get Financing
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            عملية بسيطة وسريعة للحصول على التمويل العقاري المناسب لك
          </p>
        </m.div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
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
                  {/* Image Background */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.titleAr}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-80`}
                    />

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
                        <Icon
                          className={`h-7 w-7 bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-foreground mb-2 text-xl font-bold">
                      {step.titleAr}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm font-semibold">
                      {step.titleEn}
                    </p>
                    <p className="text-muted-foreground mb-2 text-sm leading-relaxed">
                      {step.descAr}
                    </p>
                    <p className="text-muted-foreground/70 text-xs leading-relaxed">
                      {step.descEn}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="from-primary/5 to-secondary/5 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100" />
                </m.div>

                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="from-primary to-secondary absolute -right-4 top-24 hidden h-0.5 w-8 bg-gradient-to-r lg:block" />
                )}
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
