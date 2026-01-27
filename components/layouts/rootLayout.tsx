import ReactLenis from 'lenis/react';
import React from 'react'

export default function RootLayoutComponent({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ReactLenis root>
            <div>{children}</div>
        </ReactLenis>
    )
}
