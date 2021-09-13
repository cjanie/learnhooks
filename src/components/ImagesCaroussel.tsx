import { useEffect, useState } from "react";
import { Type } from "typescript";

export function ImagesCaroussel() {

    let slides: Type[] = [];

    const SLIDE_DURATION_MLS = 3000;
    let [currentIndex, setCurrentIndex] = useState(0);
    let [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if(isPlaying) {
            let timeout = setTimeout(() => {
                setCurrentIndex((currentIndex + 1) % slides.length)
            }, SLIDE_DURATION_MLS);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, isPlaying]);

    return (
        <div>
            

        </div>
    );
}