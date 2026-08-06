import JSX from "docs/jsx.ts";

export function inspiration() {
  return [
    <section>
      <h3>Inspiriert von...</h3>
      <ul>
        <li>
          <a href={"https://www.youtube.com/watch?v=HZGCoVF3YvM"}>
            3Blue1Brown
          </a>
        </li>
        <li>
          <a
            href={
              "https://betterexplained.com/articles/an-intuitive-and-short-explanation-of-bayes-theorem/"
            }
          >
            BetterExplained
          </a>
        </li>
        <li>
          <a href={"https://www.astralcodexten.com/p/bayes-for-everyone"}>
            Brandon Hendrickson
          </a>
        </li>
        <li>
          <a href={"https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow"}>
            Daniel Kahneman
          </a>
        </li>
        <li>
          <a href="https://web.archive.org/web/20201106122556/https://eyudkowsky.wpengine.com/rational/bayes">
            Eliezer Yudkowsky
          </a>
        </li>
        <li>
          <a href={"https://youtu.be/4hHA-oqpNig?si=SW5mz3EMS74XnNY8"}>
            Rational Animations
          </a>
        </li>
        <li>
          <a
            href={
              "https://www.lesswrong.com/w/bayes-rule?lens=bayes_rule_guide"
            }
          >
            The Lesswrong guide to Bayes' Theorem
          </a>
        </li>
      </ul>
      <div style="height: 17vh;"></div>
    </section>,
  ];
}
