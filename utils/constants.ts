import { Variants } from "motion/react";
import { isDev } from "./helpers";

export const pricingPlans = [
    {
        id: "basic",
        price: 5,
        description: "For individual uses",
        name: "Basic",
        items: [
            "5 PDF summeries per month",
            "standard processing speed",
            "Email support",
        ],
        paymentLink: isDev ? 'https://buy.stripe.com/test_fZucN410543Pc3Rdy4bV600' : '',
        priceId: isDev ? 'price_1RacPzCOD5d8kXAfXclmqYgD' : '',
    },
    {
        id: "pro",
        price: 9,
        description: "For professionals and teams",
        name: "Pro",
        items: [
            "Unlimited PDF summeries",
            "Priority processing",
            "24/7 priority support",
            "Markdown Export",
        ],
        paymentLink: isDev ? 'https://buy.stripe.com/test_5kQbJ09wB8k5ebZgKgbV601' : '',
        priceId: isDev ? 'price_1RacYCCOD5d8kXAfDbDWGl8H' : '',
    },
];

export const containerVarients = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        }
    }
}

export const itemsVarients: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 15,
            stiffness: 50,
            duration: 0.8,
        }
    }
}