"use client";

import { Calculator, FileText, HandshakeIcon } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";

export default function SolutionsTypesSection() {
  const solutionCategories = [
    {
      icon: Calculator,
      titleAr: "حلول التمويل العقاري",
      titleEn: "Real Estate Financing Solutions",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      items: [
        {
          name: "التمويل المدعوم",
          nameEn: "Subsidized Financing",
          desc: "برامج توفر دعمًا حكوميًا لتسهيل الحصول على المسكن الأول"
        },
        {
          name: "منتج أرض وقرض",
          nameEn: "Land & Loan Product",
          desc: "يساعد العميل على شراء الأرض والحصول على تمويل لبنائها في آن واحد"
        },
        {
          name: "إعادة التمويل وفك الرهن",
          nameEn: "Refinancing & Mortgage Release",
          desc: "برامج تتيح تحرير العقار المرهون للحصول على سيولة مالية جديدة"
        },
        {
          name: "البيع على الخارطة",
          nameEn: "Off-Plan Sales",
          desc: "تمويل وحدات سكنية لا تزال قيد الإنشاء"
        }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: HandshakeIcon,
      titleAr: "خدمات الوساطة والإدارة",
      titleEn: "Brokerage & Management Services",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      items: [
        {
          name: "التسويق العقاري",
          nameEn: "Real Estate Marketing",
          desc: "الأنشطة المتعلقة بالترويج للعقارات لبيعها أو تأجيرها"
        },
        {
          name: "إدارة الأملاك والمرافق",
          nameEn: "Property & Facility Management",
          desc: "تقديم خدمات متكاملة لإدارة العقارات من صيانة وتحصيل إيجارات"
        }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      titleAr: "الاستشارات والتحليلات العقارية",
      titleEn: "Real Estate Consulting & Analytics",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      items: [
        {
          name: "تحليل السوق العقاري",
          nameEn: "Market Analysis",
          desc: "تقديم رؤى وتوصيات مبنية على تحليل بيانات السوق"
        },
        {
          name: "استشارات الاستثمار",
          nameEn: "Investment Consulting",
          desc: "مساعدة المستثمرين في اتخاذ قرارات صائبة"
        }
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="from-muted/30 to-background relative overflow-hidden bg-gradient-to-b py-20 lg:py-32">
      {/* Background Pattern */}
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
            className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-6 py-2 text-sm font-semibold"
          >
            أنواع الحلول العقارية
          </m.span>
          <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            <span className="block">أنواع الحلول العقارية الرئيسية</span>
            <span className="text-muted-foreground mt-2 block text-2xl md:text-3xl">
              Main Types of Real Estate Solutions
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            تشمل الحلول العقارية مجموعة متنوعة من الخدمات المصممة لتلبية
            احتياجات جميع شرائح المجتمع
          </p>
        </m.div>

        {/* Solutions Categories */}
        <div className="space-y-16">
          {solutionCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <m.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-card overflow-hidden rounded-3xl shadow-2xl"
              >
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Image Side */}
                  <m.div
                    className="relative h-64 overflow-hidden lg:h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ExportedImage
                      src={category.image}
                      alt={category.titleAr}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20`}
                    />

                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <m.div
                        className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${category.gradient} shadow-2xl`}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          delay: 0.3
                        }}
                        viewport={{ once: true }}
                      >
                        <Icon className="h-12 w-12 text-white" />
                      </m.div>
                    </div>
                  </m.div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <m.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-foreground mb-2 text-2xl font-bold md:text-3xl">
                        {category.titleAr}
                      </h3>
                      <p className="text-muted-foreground mb-6 text-lg font-semibold">
                        {category.titleEn}
                      </p>

                      {/* Items List */}
                      <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <m.div
                            key={itemIndex}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.3 + itemIndex * 0.1
                            }}
                            viewport={{ once: true }}
                            className="bg-muted/50 hover:bg-muted group flex gap-4 rounded-xl p-4 transition-all"
                          >
                            <div
                              className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${category.gradient}`}
                            >
                              <span className="text-sm font-bold text-white">
                                {itemIndex + 1}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-foreground mb-1 font-bold">
                                {item.name}
                              </h4>
                              <p className="text-muted-foreground mb-1 text-sm font-semibold">
                                {item.nameEn}
                              </p>
                              <p className="text-muted-foreground text-sm">
                                {item.desc}
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
