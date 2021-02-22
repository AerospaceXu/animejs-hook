import React, { useRef, useLayoutEffect } from "react";
import anime, { AnimeParams, AnimeInstance } from "animejs";

export const useAnime = (
  animeParams: AnimeParams = {}
): [
  React.MutableRefObject<HTMLElement | null>,
  React.MutableRefObject<AnimeInstance | undefined>
] => {
  const animeTargetRef = useRef<HTMLElement>(null);
  const animationController = useRef<AnimeInstance>();

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
