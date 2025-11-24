export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/alananrealestate",
    tiktok: "https://www.tiktok.com/@alananrealestate",
    whatsapp: "https://wa.me/966583011540",
    whatsappAlt: "https://wa.me/966532801350",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3554.459151416646!2d49.65972517544313!3d27.015653576585947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDAwJzU2LjQiTiA0OcKwMzknNDQuMyJF!5e0!3m2!1sen!2seg!4v1761585102880!5m2!1sen!2seg",
    googleMap: "https://maps.app.goo.gl/RxmiMqY8CyTvDVNX7"
  },

  support: {
    phone: "+966583011540",
    email: "Rayan-ka@hotmail.com",
    whatsapp: "+966583011540",
    phoneNumbers: [
      {
        dial: "+966583011540",
        display: "+966 58 301 1540"
      },
      {
        dial: "+966532801350",
        display: "+966 53 280 1350"
      }
    ],
    whatsappNumbers: [
      {
        dial: "+966583011540",
        display: "+966 58 301 1540",
        link: "https://wa.me/966583011540"
      },
      {
        dial: "+966532801350",
        display: "+966 53 280 1350",
        link: "https://wa.me/966532801350"
      }
    ]
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`,
  twitter: "@alananrealestate"
};

export type SiteConfig = typeof siteConfig;
