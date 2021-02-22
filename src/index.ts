import React, { useRef, useLayoutEffect } from "react";
import anime, { AnimeParams, AnimeInstance } from "animejs";

export const useAnime = (
  animeParams: AnimeParams = {}
): [
  React.MutableRefObject<any>,
  React.MutableRefObject<AnimeInstance | undefined>
] => {
  const animeTargetRef = useRef<any>(null);
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
