import React, { useEffect, useRef, useState } from "react";

export const useElementOnScreen = ({ observerOptions, sticky = false, onVisibleChanged = (newlyVisible) => {} }) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        if (sticky) {
            setIsVisible(isVisible || entry.isIntersecting);
        } else {
            setIsVisible(entry.isIntersecting);
        }

        if (isVisible !== entry.isIntersecting) {
            onVisibleChanged(entry.isIntersecting);
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, observerOptions);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        }
    }, [containerRef, observerOptions]);

    return { containerRef, isVisible };
}
