"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import Instagram from "@/assets/icons/instagram.svg";
import TickTock from "@/assets/icons/tiktok.svg";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("contactUs"), href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: siteConfig.links.instagram,
      label: t("socialMedia.instagram")
    },
    {
      icon: TickTock,
      href: siteConfig.links.tiktok,
      label: t("socialMedia.tiktok")
    },
    {
      icon: Mail,
      href: `mailto:${siteConfig.support.email}`,
      label: t("socialMedia.email")
    },
    {
      icon: Phone,
      href: `tel:${siteConfig.support.phone}`,
      label: "Phone"
    },
    {
      icon: MapPin,
      href: siteConfig.links.googleMap,
      label: "Location"
    }
  ];

  return (
    <footer className="from-primary via-primary/95 to-primary/90 bg-secondary bg-gradient-to-b text-white">
      <div className="layout px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="flex flex-col space-y-6">
            <Logo />
            <p className="text-sm leading-relaxed text-white/80">
              {t("companyDescription")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <span className="bg-secondary h-1 w-1 rounded-full transition-all group-hover:w-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              {t("contactUs")}
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.support.phone}`}
                className="group flex items-center gap-3 rounded-lg bg-white/5 p-3 text-sm text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
              >
                <div className="bg-secondary/20 flex h-8 w-8 items-center justify-center rounded-lg">
                  <Phone className="text-secondary h-4 w-4" />
                </div>
                <span dir="ltr">{siteConfig.support.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.support.email}`}
                className="group flex items-center gap-3 rounded-lg bg-white/5 p-3 text-sm text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-secondary/20 flex h-8 w-8 items-center justify-center rounded-lg">
                  <Mail className="text-secondary h-4 w-4" />
                </div>
                <span className="break-all">{siteConfig.support.email}</span>
              </a>
              <a
                href={siteConfig.links.googleMap}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg bg-white/5 p-3 text-sm text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
              >
                <div className="bg-secondary/20 flex h-8 w-8 items-center justify-center rounded-lg">
                  <MapPin className="text-secondary h-4 w-4" />
                </div>
                <span>{t("saudiArabia")}</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">
              تابعونا | Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <m.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-secondary flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm transition-all"
                    aria-label={social.label}
                    title={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" />
                  </m.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/70">
              {t("copyright", { year: currentYear })}
            </p>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <span>Made with</span>
              <span className="text-secondary">❤</span>
              <span>in Saudi Arabia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
