import { cn } from "@/lib/utils";
import { containerVarients, itemsVarients, pricingPlans } from "@/utils/constants";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionSection } from "../common/motion-wrapper";
import { Variants } from "motion/react";

type PriceType = {
  name: string;
  description: string;
  id: string;
  price: number;
  items: string[];
  paymentLink: string;
  priceId: string;
};

const listVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100
    }
  }
}

function PricingCard({
  name,
  description,
  id,
  price,
  items,
  paymentLink,
  priceId,
}: PriceType) {
  return (
    <MotionDiv
      variants={listVariant}
      whileHover={{ scale: 1.02 }}
      className="relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300">
      <div
        className={cn(
          "relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border shadow-2xl border-gray-500/20 rounded-2xl",
          id === "pro" && "border-2 border-violet-700 gap-5"
        )}
      >
        <div className="flex flex-col items-center justify-between gap-4">
          <MotionDiv variants={listVariant}>
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
              <p className="text-base-content/80 mt-2">{description}</p>
            </div>
            <div className="flex gap-6 my-5">
              <p className="font-extrabold text-5xl tracking-tight">${price}</p>
              <div className="flex flex-col justify-end mb-1">
                <p className="text-xs font-semibold uppercase">USD</p>
                <p className="text-xs">/Month</p>
              </div>
            </div>
            <div className="space-y-2.5 text-base flex-1 leading-relaxed">
              {items.map((item, inx) => (
                <li key={inx} className="flex items-center gap-2">
                  <CheckIcon size={18} />
                  <span> {item}</span>
                </li>
              ))}
            </div>
          </MotionDiv>
          <MotionDiv
            variants={listVariant}
            className="flex space-y-2 justify-center w-full">
            <Link
              href={paymentLink}
              className={cn(
                "w-full flex rounded-full font-bold  items-center justify-center gap-2 py-2 border-2 bg-gradient-to-r from-violet-800 to-violet-500 hover:from-violet-500 hover:to-violet-800 text-white",
                id === "pro"
                  ? "border-violet-900"
                  : "border-violet-200 from-violet-400 to-violet-600"
              )}
            >
              Buy Now <ArrowRight size={18} />
            </Link>
          </MotionDiv>
        </div>
      </div>
    </MotionDiv>
  );
}


export default function PricingSection() {
  return (
    <MotionSection
      variants={containerVarients}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <MotionDiv
          variants={itemsVarients}
          className="text-center mb-16">
          <h2 className="font-bold text-xl mb-6 uppercase text-violet-700">
            Pricing
          </h2>
        </MotionDiv>
        <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}