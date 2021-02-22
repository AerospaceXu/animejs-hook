import React from "react";
import { AnimeParams, AnimeInstance } from "animejs";
export declare const useAnime: (animeParams?: AnimeParams) => [
    React.MutableRefObject<HTMLElement | null>,
    React.MutableRefObject<AnimeInstance | undefined>
];
