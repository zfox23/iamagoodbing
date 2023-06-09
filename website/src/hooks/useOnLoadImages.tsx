// From https://dev.to/alejomartinez8/how-to-detect-images-loaded-in-react-39fa

import { useState, useEffect, RefObject } from "react";

export const useOnLoadImages = (ref: RefObject<HTMLElement>, callback) => {
    const [status, setStatus] = useState(false);

    useEffect(() => {
        const updateStatus = (images: HTMLImageElement[]) => {
            const status = images.map((image) => image.complete).every((item) => item === true);
            setStatus(status);
            if (status) {
                callback();
            }
        };

        if (!ref?.current) return;

        const imagesLoaded = Array.from(ref.current.querySelectorAll("img"));

        if (imagesLoaded.length === 0) {
            setStatus(true);
            callback();
            return;
        }

        imagesLoaded.forEach((image) => {
            image.addEventListener("load", () => updateStatus(imagesLoaded), {
                once: true
            });
            image.addEventListener("error", () => updateStatus(imagesLoaded), {
                once: true
            });
        });

        return;
    }, [ref]);

    return status;
};
