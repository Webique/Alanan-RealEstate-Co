"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const t = useTranslations("IndexPage.Contact");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const whatsappMessage = `الاسم: ${formData.name}%0Aالجوال: ${formData.phone}%0Aالبريد: ${formData.email}%0Aالطلب: ${formData.message}`;
    window.open(
      `https://wa.me/${siteConfig.support.whatsapp}?text=${whatsappMessage}`,
      "_blank"
    );

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t("info.phone" as any),
      value: siteConfig.support.phone,
      href: `tel:${siteConfig.support.phone}`
    },
    {
      icon: Mail,
      title: t("info.email" as any),
      value: siteConfig.support.email,
      href: `mailto:${siteConfig.support.email}`
    },
    {
      icon: MapPin,
      title: t("info.location" as any),
      value: t("info.address" as any),
      href: siteConfig.links.googleMap
    }
  ];

  return (
    <section
      id="contact"
      className="bg-muted/30 relative overflow-hidden py-20 lg:py-32"
    >
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
            {t("title")}
          </m.span>
          <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            {t("subtitle")}
          </p>
        </m.div>

        <div className="mx-auto max-w-5xl">
          {/* Contact Info Cards */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 grid gap-6 sm:grid-cols-3"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <m.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card group flex flex-col items-center gap-3 rounded-2xl p-6 text-center shadow-lg transition-all hover:shadow-xl"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-xl">
                    <Icon className="text-primary h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1 text-sm font-semibold">
                      {info.title}
                    </p>
                    <p dir="ltr" className="text-foreground text-sm font-bold">
                      {info.value}
                    </p>
                  </div>
                </m.a>
              );
            })}
          </m.div>

          {/* Contact Form */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-3xl p-8 shadow-lg lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("form.name")}</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={t("form.name")}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("form.phone")}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder={t("form.phone")}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">{t("form.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t("form.email")}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message">{t("form.message")}</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t("form.message")}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="from-primary to-primary/80 h-auto w-full rounded-xl bg-gradient-to-r px-8 py-4 text-base font-semibold shadow-lg transition-all hover:shadow-xl has-[>svg]:px-6"
                  >
                    {isSubmitting ? (
                      <span>{t("form.submitting" as any)}</span>
                    ) : (
                      <>
                        {t("form.submit")}
                        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                      </>
                    )}
                  </Button>
                </m.div>

                {/* Privacy Notice */}
                <p className="text-muted-foreground text-center text-xs leading-relaxed">
                  {t("form.privacy")}
                </p>
              </form>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
