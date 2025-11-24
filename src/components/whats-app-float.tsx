import { useTranslations } from "next-intl";

import WhatsAppIcon from "@/assets/icons/whatsapp-2.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";

const floatPositions: Array<{
  positionClasses: string;
  tooltipSide: "left" | "right";
}> = [
  {
    positionClasses: "end-6",
    tooltipSide: "left"
  },
  {
    positionClasses: "start-6",
    tooltipSide: "right"
  }
];

export default function WhatsAppFloat() {
  const t = useTranslations("IndexPage.WhatsAppFloat");

  const numbers = siteConfig.support.whatsappNumbers ?? [
    {
      dial: siteConfig.support.whatsapp,
      display: siteConfig.support.whatsapp,
      link: siteConfig.links.whatsapp
    }
  ];

  return (
    <>
      {numbers.slice(0, 2).map((number, index) => {
        const position = floatPositions[index] ?? floatPositions[0];
        return (
          <Tooltip key={number.dial} delayDuration={0}>
            <TooltipTrigger asChild>
              <a
                href={
                  number.link ??
                  `https://wa.me/${number.dial.replace(/\D/g, "")}`
                }
                target="_blank"
                rel="noreferrer"
                className={`fixed bottom-6 z-[999999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl lg:bottom-6 ${position.positionClasses}`}
                aria-label={`Contact us on WhatsApp ${number.display}`}
              >
                <WhatsAppIcon className="h-8 w-8 fill-white" />
              </a>
            </TooltipTrigger>
            <TooltipContent side={position.tooltipSide}>
              <p dir="ltr">{number.display ?? t("tooltip")}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </>
  );
}
