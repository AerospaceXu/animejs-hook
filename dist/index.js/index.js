import { useRef, useLayoutEffect } from "react";
import anime from "animejs";
export const useAnime = (animeParams = {}) => {
    const animeTargetRef = useRef();
    const animationController = useRef();
    useLayoutEffect(() => {
        if (!animeTargetRef.current) {
            console.error("Please bind the anime ref while createAnime!!!");
            return;
        }
        animationController.current = anime({
            ...animeParams,
            targets: [animeTargetRef.current],
        });
    });
    return [animeTargetRef, animationController];
};
