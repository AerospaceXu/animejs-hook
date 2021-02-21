import React from "react";
import { AnimeParams, AnimeInstance } from "animejs";
export declare const useAnime: (animeParams?: AnimeParams) => [
    React.MutableRefObject<HTMLElement | undefined>,
    React.MutableRefObject<AnimeInstance | undefined>
];
