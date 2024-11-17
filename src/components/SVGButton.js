// import './SVGButton.css'
export default function SvgButton({ svg, size, link }) {
  return (
    <a class="svg-button" href={link}>
      {svg}
    </a>
  );
}
