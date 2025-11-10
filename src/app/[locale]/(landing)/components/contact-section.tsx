"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const t = useTranslations("IndexPage.Contact");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `الاسم: ${formData.name}%0Aالجوال: ${formData.phone}%0Aالبريد: ${formData.email}%0Aالطلب: ${formData.message}`;
    window.open(
      `https://wa.me/${siteConfig.support.whatsapp}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: siteConfig.support.phone,
      href: `tel:${siteConfig.support.phone}`,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      value: siteConfig.support.email,
      href: `mailto:${siteConfig.support.email}`,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "الرياض، حي الورود",
      href: siteConfig.links.googleMap,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-20 lg:py-32">
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
            className="mb-4 inline-block rounded-full bg-secondary/10 px-6 py-2 text-sm font-semibold text-secondary"
          >
            {t("title")}
          </m.span>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>
        </m.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("form.name")}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  {t("form.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("form.phone")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("form.email")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("form.message")}
                />
              </div>

              <m.button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("form.submit")}
              </m.button>

              <p className="text-center text-xs text-muted-foreground">
                {t("form.privacy")}
              </p>
            </form>
          </m.div>

          {/* Contact Info & Map */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
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
                    className="group flex items-center gap-4 rounded-2xl bg-card p-6 shadow-lg transition-all hover:shadow-xl"
                    whileHover={{ x: 5 }}
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${info.gradient} shadow-lg`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">
                        {info.title}
                      </p>
                      <p className="text-base font-bold text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </m.a>
                );
              })}
            </div>

            {/* Map */}
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <iframe
                src={siteConfig.links.googleMapIframe}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
                className="w-full"
              />
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
