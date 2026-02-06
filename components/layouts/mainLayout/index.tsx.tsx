import MainHeader from '@/components/layouts/mainLayout/mainHeader';
import ReactLenis from 'lenis/react';
import React from 'react'
import MainFooter from './mainFooter';

export default function MainLayoutComponent({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="text-white">
            <ReactLenis root>
                <MainHeader />
                {children}
                <MainFooter />
            </ReactLenis>
        </div>
    )
}
