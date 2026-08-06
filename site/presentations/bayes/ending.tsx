import JSX from "docs/jsx.ts";

export function ending() {
  return [
    <section>
      <h3>Vorsicht!</h3>
      <ul>
        <li class={"fragment"}>{"Quatsch rein → Quatsch raus"}</li>
        <li class={"fragment"}>
          100% und 0% sind "klebrige" Wahrscheinlichkeiten
        </li>
      </ul>
      <div style="height: 48vh;"></div>
    </section>,
    <section>
      <h3>Was bedeutet 100% sicher?</h3>
      <ul>
        <li class={"fragment"}>
          Es gibt keine Beobachtung, die dich von 100% oder 0% Sicherheit
          wegbringen kann.
        </li>
        <li class={"fragment"}>
          Es gibt keine Beobachtung, die dich zu 100% oder 0% Sicherheit bringen
          kann.
        </li>
      </ul>
      <div style={"height:23vh"}></div>
    </section>,
    <section>
      <blockquote>
        Zwischen 99,999% und 100% Sicherheit liegt eine Unendlichkeit an
        Evidenz.
      </blockquote>
    </section>,
  ];}