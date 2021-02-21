# Animejs-hook

Encapsulation animejs`s react hooks version.

**Use typescript, have code hint.**

[animejs](https://animejs.com/)`s official site.

Use:

```bash
yarn add animejs-hook
# or
npm i animejs-hook
```

```tsx
import { useAnime } from "animejs-hook";

const App: React.FC = () => {
  const [animateTarget, animationController] = useAnime({
    loop: 2,
    duration: 275,
    autoplay: false,
    delay: 95,
    keyframes: [
      { rotate: 0 },
      { rotate: 8.25 },
      { rotate: 0 },
      { rotate: -8.25 },
    ],
    easing: "cubicBezier(.5, .05, .1, .3)",
    direction: "alternate",
  });

  return (
    <div>
      <div
        style={{ width: "50px", height: "50px", background: "red" }}
        ref={animateTarget}
      />
      <button onClick={() => animationController.current?.play()}>Play</button>
    </div>
  );
};
```
