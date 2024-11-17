import { forwardRef } from "react";

import Card from "../components/Card";

const SectionSeparator = forwardRef(({ title, id }, ref) => {
  return (
    <div ref={ref} class="section-separator" id={title}>
      <Card id="section-title">
        <h1> {title} </h1>
      </Card>
    </div>
  );
});

export default SectionSeparator;
