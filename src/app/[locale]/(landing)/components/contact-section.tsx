"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

const createFormSchema = (t: any) =>
  z.object({
    name: z.string().min(2, {
      message: t("form.validation.nameMin")
    }),
    phone: z.string().min(10, {
      message: t("form.validation.phoneMin")
    }),
    email: z
      .string()
      .email({
        message: t("form.validation.emailInvalid")
      })
      .optional()
      .or(z.literal("")),
    message: z.string().min(10, {
      message: t("form.validation.messageMin")
    })
  });

export default function ContactSection() {
  const t = useTranslations("IndexPage.Contact");

  const formSchema = createFormSchema(t);
  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (values: FormValues) => {
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const emailPart = values.email
      ? `%0A${t("form.whatsapp.email")}: ${values.email}`
      : "";
    const whatsappMessage = `${t("form.whatsapp.name")}: ${values.name}%0A${t("form.whatsapp.phone")}: ${values.phone}${emailPart}%0A${t("form.whatsapp.request")}: ${values.message}`;
    window.open(
      `https://wa.me/${siteConfig.support.whatsapp}?text=${whatsappMessage}`,
      "_blank"
    );

    form.reset();
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
    <section id="contact" className="relative overflow-hidden py-20 lg:py-32">
      {/* Gradient Background */}
      <div className="from-primary/5 via-background to-primary/10 absolute inset-0 bg-gradient-to-br" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E488F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Decorative Blobs */}
      <div className="bg-primary/10 absolute -left-20 top-20 h-72 w-72 rounded-full blur-3xl" />
      <div className="bg-primary/10 absolute -right-20 bottom-20 h-72 w-72 rounded-full blur-3xl" />

      <div className="layout relative">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            <Send className="h-4 w-4" />
            {t("title")}
          </m.div>
          <h2 className="from-foreground to-foreground/70 mb-6 bg-gradient-to-br bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
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
                  className="border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card hover:shadow-primary/5 group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border p-6 text-center backdrop-blur-sm transition-all hover:shadow-xl"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="from-primary/20 to-primary/5 relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform group-hover:scale-110">
                    <Icon className="text-primary h-8 w-8 transition-transform group-hover:scale-110" />
                  </div>
                  <div className="relative">
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
            <div className="border-border/50 bg-card/50 relative overflow-hidden rounded-3xl border p-8 shadow-2xl backdrop-blur-sm lg:p-12">
              {/* Decorative gradient */}
              <div className="bg-primary/10 absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl" />
              <div className="bg-primary/10 absolute -bottom-20 -left-20 h-40 w-40 rounded-full blur-3xl" />

              <div className="relative">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Name Field */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("form.name")}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("form.name")}
                                {...field}
                                disabled={form.formState.isSubmitting}
                                className="border-border/50 bg-background/50 focus:border-primary focus:bg-background h-12 rounded-xl transition-all"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Phone Field */}
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("form.phone")}</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder={t("form.phone")}
                                {...field}
                                disabled={form.formState.isSubmitting}
                                className="border-border/50 bg-background/50 focus:border-primary focus:bg-background h-12 rounded-xl transition-all"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Email Field */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {t("form.email")}{" "}
                            <span className="text-muted-foreground text-xs">
                              ({t("form.optional")})
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={t("form.email")}
                              {...field}
                              disabled={form.formState.isSubmitting}
                              className="border-border/50 bg-background/50 focus:border-primary focus:bg-background h-12 rounded-xl transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message Field */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("form.message")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("form.message")}
                              rows={5}
                              {...field}
                              disabled={form.formState.isSubmitting}
                              className="border-border/50 bg-background/50 focus:border-primary focus:bg-background resize-none rounded-xl transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <m.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="from-primary to-primary/80 hover:shadow-primary/20 group h-auto w-full rounded-xl bg-gradient-to-r px-8 py-4 text-base font-semibold shadow-lg transition-all hover:shadow-xl"
                      >
                        {form.formState.isSubmitting ? (
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
                </Form>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
