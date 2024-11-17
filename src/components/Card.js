import MaterialSymbol from "./MaterialSymbols";

export default function Card({ className = "", id, children }) {
  let combinedClassNames = "card flex-container " + className;

  return (
    <div class={combinedClassNames} id={id}>
      {children}
    </div>
  );
}

export function CardTitle({ logo = null, title }) {
  return (
    <div class="card-title flex-container center-align">
      <MaterialSymbol symbol={logo} />
      <h1>&nbsp; {title}</h1>
    </div>
  );
}
