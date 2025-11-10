"use client";

import { Quote, Star } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "أحمد المالكي",
      nameEn: "Ahmed Al-Malki",
      role: "عميل - شراء عقار",
      roleEn: "Client - Property Purchase",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      rating: 5,
      textAr:
        "تجربة رائعة مع عنان الحلول العقارية. الفريق محترف جداً وساعدوني في الحصول على أفضل تمويل لشراء منزل أحلامي. أنصح بهم بشدة!",
      textEn:
        "Amazing experience with Anan Real Estate Solutions. Very professional team who helped me get the best financing for my dream home. Highly recommend!"
    },
    {
      name: "فاطمة العتيبي",
      nameEn: "Fatima Al-Otaibi",
      role: "عميلة - بناء ذاتي",
      roleEn: "Client - Self-Construction",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      rating: 5,
      textAr:
        "خدمة ممتازة وسريعة. ساعدوني في الحصول على تمويل لبناء منزلي بطريقة سهلة ومريحة. شكراً لفريق عنان على الاحترافية والشفافية.",
      textEn:
        "Excellent and fast service. They helped me get financing to build my home in an easy and comfortable way. Thanks to Anan team for professionalism and transparency."
    },
    {
      name: "محمد السعيد",
      nameEn: "Mohammed Al-Saeed",
      role: "عميل - أرض وقرض",
      roleEn: "Client - Land & Loan",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80",
      rating: 5,
      textAr:
        "أفضل شركة استشارات عقارية تعاملت معها. وفروا لي حل أرض وقرض بأفضل الشروط. فريق متعاون ومتفهم لاحتياجات العميل.",
      textEn:
        "Best real estate consulting company I've dealt with. They provided me with land and loan solution with the best terms. Cooperative team that understands client needs."
    }
  ];

  return (
    <section className="bg-muted/30 relative overflow-hidden py-20 lg:py-32">
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
            آراء عملائنا
          </m.span>
          <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            <span className="block">ماذا يقول عملاؤنا</span>
            <span className="text-muted-foreground mt-2 block text-2xl md:text-3xl">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            نفخر بثقة عملائنا ورضاهم عن خدماتنا
          </p>
        </m.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <m.div
                className="bg-card relative h-full overflow-hidden rounded-2xl p-8 shadow-lg transition-all hover:shadow-2xl"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Quote Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <Quote className="text-primary/20 h-10 w-10" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {testimonial.textAr}
                </p>
                <p className="text-muted-foreground/70 mb-6 text-xs leading-relaxed">
                  {testimonial.textEn}
                </p>

                {/* Client Info */}
                <div className="border-border flex items-center gap-4 border-t pt-6">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <ExportedImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.nameEn}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="from-primary/5 to-secondary/5 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100" />
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
          <div className="inline-flex items-center gap-3 rounded-full bg-green-100 px-8 py-4 dark:bg-green-900/30">
            <Star className="h-6 w-6 fill-green-600 text-green-600 dark:fill-green-400 dark:text-green-400" />
            <span className="text-lg font-bold text-green-700 dark:text-green-400">
              تقييم 5/5 من أكثر من 1000 عميل راضٍ
            </span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
