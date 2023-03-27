import { twMerge } from "tailwind-merge";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import React from 'react';

export const DivOnScreen = ({ children, className }) => {
    const { containerRef, isVisible } = useElementOnScreen({
        observerOptions: {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        },
        sticky: true
    });

    const defaultClassName = `${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'} transition-{transform, opacity, scale} duration-700`;

    return (
        <div ref={containerRef} className={`${twMerge(className, defaultClassName)}`}>
            {children}
        </div>
    )
}