import JSX from "docs/jsx.ts";

export function theorem() {
  return [
    <section
      data-auto-animate
      data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
      data-auto-animate-id={"Formula"}
    >
      <h3 style={"margin-top: 6vh;"}>Lass es uns als Formel ausdrücken.</h3>
      <div class="math fragment" style="font-size: 3rem;" data-id={"bayes"}>
        {"$$ P(A \\vert B) = \\frac{P(B \\vert A)\\cdot P(A)}{P(B)} $$"}
      </div>
      <div style={"height: 60vh"}></div>
    </section>,
    <section
      data-auto-animate
      data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
      data-auto-animate-id={"Formula"}
    >
      <h3 style={"margin-top: 6vh;"}>Lass es uns als Formel ausdrücken.</h3>
      <div class="math" style="font-size: 3rem;" data-id={"bayes"}>
        {"$$P(H \\vert e) = \\frac{P(e \\vert H) \\cdot  P(H)}{P(e)} $$"}
      </div>
      <div style={"height: 43.5vh"}></div>
    </section>,
    <section
      data-auto-animate
      data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
      data-auto-animate-id={"Formula"}
    >
      <h3 style={"margin-top: 6vh;"}>Lass es uns als Formel ausdrücken.</h3>
      <div
        class="math"
        style="font-size: 3rem; text-align: center;"
        data-id={"bayes"}
      >
        {
          "$$P(H \\vert e) = \\frac{P(e \\vert H) \\cdot  P(H)}{P(e\\vert H) \\cdot  P(H)+P(e\\vert \\neg H) \\cdot  P(\\neg H)} $$"
        }
      </div>
      <div style={"height: 43.5vh"}></div>
    </section>,
    /*NEW COMPUTER*/
    <section>
      <h3 style={"margin-top: 6vh;"}>Dein neuer Computer ist laut.</h3>
      <ul>
        <li class={"fragment"}>
          2% der neuen Computer haben einen defekten Lüfter.
        </li>
        <li class={"fragment"}>
          80% der Computer mit defektem Lüfter sind laut.
        </li>
        <li class={"fragment"}>
          5% der Computer ohne defekten Lüfter sind laut.
        </li>
        <li class={"fragment"}>
          Wie wahrscheinlich ist es, dass dein Computer einen defekten Lüfter
          hat?
        </li>
      </ul>
      <div style="height: 38vh;"></div>{" "}
    </section>,
    <section data-auto-animate data-auto-animate-id={"Formula"}>
      <h3 style={"margin-top: 6vh;"}>Dein neuer Computer ist laut.</h3>
      <div class="math" style="font-size: 3rem;" data-id={"bayes"}>
        {"$$P(H \\vert e) = \\frac{P(e \\vert H) \\cdot  P(H)}{P(e)} $$"}
      </div>
      <div style={"height: 43.5vh"}></div>
    </section>,
    <section data-auto-animate data-auto-animate-id={"Formula"}>
      <h3 style={"margin-top: 6vh;"}>Dein neuer Computer ist laut.</h3>
      <div class="math" style="font-size: 3rem;" data-id={"bayes"}>
        {
          "$$P(\\text{kaputt} \\vert \\text{laut}) = \\frac{P(\\text{laut} \\vert \\text{kaputt}) \\cdot  P(\\text{kaputt})}{P(\\text{laut})} $$"
        }
      </div>
      <div style={"height: 43.5vh"}></div>
    </section>,
    <section data-auto-animate data-auto-animate-id={"Formula"}>
      <h3 style={"margin-top: 6vh;"}>Dein neuer Computer ist laut.</h3>
      <div class="math" style="font-size: 3rem;" data-id={"bayes"}>
        {
          "$$P(\\text{k} \\vert \\text{l}) = \\frac{P(\\text{l} \\vert \\text{k}) \\cdot  P(\\text{k})}{P(\\text{l})} $$"
        }
      </div>
      <div style={"height: 43.5vh"}></div>
    </section>,
    <section data-auto-animate data-auto-animate-id={"Formula"}>
      <h3 style={"margin-top: 6vh;"}>Dein neuer Computer ist laut.</h3>
      <div class="math" style="font-size: 3rem;" data-id={"bayes"}>
        {
          "$$P(\\text{k} \\vert \\text{l}) = \\frac{P(\\text{l} \\vert \\text{k}) \\cdot  P(\\text{k})}{P(\\text{l}\\vert \\text{k}) \\cdot  P(\\text{k})+P(\\text{l}\\vert \\neg \\text{k}) \\cdot  P(\\neg \\text{k})} $$"
        }
      </div>
      <div style={"height: 43.5vh"}></div>
    </section>,
    <section data-auto-animate data-auto-animate-id={"Formula"}>
      <h3 style={"margin-top: 6vh;"}>Dein neuer Computer ist laut.</h3>
      <div class="math" style="font-size: 3rem;" data-id={"bayes"}>
        {
          "$$P(\\text{k} \\vert \\text{l}) = \\frac{0.8 \\cdot  0.02}{0.8\\cdot  0.02+0.05 \\cdot  0.98} $$"
        }
      </div>
      <div class="math fragment" style="font-size: 3rem;" data-id={"bayes"}>
        {
          "$$P(\\text{k} \\vert \\text{l}) = \\frac{0.016}{0.016+0.049} =\\frac{0.016}{0.065}$$"
        }
      </div>
      <div class="math fragment" style="font-size: 3rem;" data-id={"bayes"}>
        {"$$P(\\text{kaputt} \\vert \\text{laut}) ≈25\\%$$"}
      </div>
      <div style={"height: 43.5vh"}></div>
    </section>,
    /*DEATH EATERS*/
    <section>
      <section>
        <h3>Die Todesser tragen noch ihr dunkles Mal.</h3>
        <h3 class={"fragment"}>
          Wie wahrscheinlich ist es, dass Voldemort noch lebt?
        </h3>
        <div style="height: 35vh;"></div>
      </section>
      <section>
        <blockquote style={"font-size: 28pt; width: 100%"}>
          "Suppose the Dark Mark is certain to continue while the Dark Lord's
          sentience lives on, but a priori we'd only have guessed a twenty
          percent chance of the Dark Mark continuing to exist after the Dark
          Lord dies. Then the observation, "The Dark Mark has not faded" is five
          times as likely to occur in worlds where the Dark Lord is alive as in
          worlds where the Dark Lord is dead. Is that really commensurate with
          the prior improbability of immortality? Let's say the prior odds were
          a hundred-to-one against the Dark Lord surviving. If a hypothesis is a
          hundred times as likely to be false versus true, and then you see
          evidence five times more likely if the hypothesis is true versus
          false, you should update to believing the hypothesis is twenty times
          as likely to be false as true."
        </blockquote>
      </section>
    </section>,
    <section data-auto-animate>
      <h3>Als Quoten ausgedrückt.</h3>
      <div style="height: 8vh;"></div>
      <div class={"math"} data-id={"odds-table"}>
        {"$$\\begin{array}{a b c d}\n" +
          "\\text{Prior odds} & A & : & B \\\\\n" +
          "\\times \\;\\text{Likelihood ratio} & a & : & b \\\\\n" +
          "\\hline" +
          "\\text{Posterior odds} & A a & : & B b\n" +
          "\\end{array}\n$$"}
      </div>
      <div style="height: 18vh;"></div>
    </section>,
    <section data-auto-animate>
      <h3>Als Quoten ausgedrückt.</h3>
      <div style="height: 8vh;"></div>
      <div class={"math"} data-id={"odds-table"}>
        {"$$\\begin{array}{a b c d}\n" +
          "\\text{Prior odds} & 1 & : & 100 \\\\\n" +
          "\\times \\;\\text{Likelihood ratio} & 100 & : & 20 \\\\\n" +
          "\\hline" +
          "\\text{Posterior odds} & 100 & : & 2000\n" +
          "\\end{array}\n$$"}
      </div>
      <div style="height: 18vh;"></div>
    </section>,
    <section data-auto-animate>
      <h3>Als Quoten ausgedrückt.</h3>
      <div style="height: 8vh;"></div>
      <div class={"math"} data-id={"odds-table"}>
        {"$$\\begin{array}{a b c d}\n" +
          "\\text{Prior odds} & 1 & : & 100 \\\\\n" +
          "\\times \\;\\text{Likelihood ratio} & 5 & : & 1 \\\\\n" +
          "\\hline" +
          "\\text{Posterior odds} & 1 & : & 20\n" +
          "\\end{array}\n$$"}
      </div>
      <div style="height: 18vh;"></div>
    </section>,
  ];
}
