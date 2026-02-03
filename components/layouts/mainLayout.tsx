import ReactLenis from 'lenis/react';
import React from 'react'
import MainHeader from '../headers/mainHeader';

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
            </ReactLenis>
        </div>
    )
}
