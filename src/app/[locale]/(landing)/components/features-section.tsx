"use client";

import { Award, CheckCircle, Clock, Shield, Users, Zap } from "lucide-react";
import * as m from "motion/react-m";

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      titleAr: "متوافق مع الشريعة",
      titleEn: "Sharia-Compliant",
      descriptionAr: "جميع حلولنا متوافقة 100% مع أحكام الشريعة الإسلامية",
      descriptionEn: "All our solutions are 100% Sharia-compliant",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      titleAr: "فريق محترف",
      titleEn: "Professional Team",
      descriptionAr: "فريق عمل على قدر كبير من الكفاءة والخبرة",
      descriptionEn: "Highly competent and experienced team",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      titleAr: "خدمة سريعة",
      titleEn: "Fast Service",
      descriptionAr: "نعمل على طلبك في أسرع وقت ممكن",
      descriptionEn: "We work on your request as quickly as possible",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      titleAr: "خبرة 5 سنوات",
      titleEn: "5 Years Experience",
      descriptionAr: "خبرة واسعة في مجال الاستشارات العقارية",
      descriptionEn: "Extensive experience in real estate consulting",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: CheckCircle,
      titleAr: "حلول متنوعة",
      titleEn: "Diverse Solutions",
      descriptionAr: "حلول لكافة شرائح المجتمع واحتياجاتهم",
      descriptionEn: "Solutions for all segments of society",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      titleAr: "أفضل الأسعار",
      titleEn: "Best Prices",
      descriptionAr: "أقل هامش ربح وتوفير للدفعة الأولى",
      descriptionEn: "Lowest profit margin and down payment savings",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 lg:py-32">
      <div className="layout">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="block">لماذا تختار عنان؟</span>
            <span className="block text-2xl text-muted-foreground md:text-3xl">
              Why Choose Anan?
            </span>
          </h2>
        </m.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <m.div
                  className="relative h-full rounded-2xl bg-card p-8 shadow-lg transition-all hover:shadow-2xl"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <m.div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </m.div>

                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {feature.titleAr}
                  </h3>
                  <p className="mb-3 text-sm font-semibold text-muted-foreground">
                    {feature.titleEn}
                  </p>
                  <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.descriptionAr}
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground/70">
                    {feature.descriptionEn}
                  </p>

                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                </m.div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
