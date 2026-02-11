"use client";

import { useTranslations } from "next-intl";
import HeroSection from "./heroSection";
import OurServices from "./ourServices";
import ProductsSection from "./productsSection";
import { ContactSection } from "./contactSection";

export default function HomeComponent() {
    const t = useTranslations('HomePage');

    return (
        <div className="min-h-screen h-full text-white">
            <main className="h-full">
                <HeroSection />
                <OurServices />
                <ProductsSection />
                <ContactSection />
            </main>
        </div>
    )
}
