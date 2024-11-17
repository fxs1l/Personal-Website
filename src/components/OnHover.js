import React, { useState } from "react";

export default function OnHover({ children }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      {isShown && <div>I'll appear when you hover over the button.</div>}
    </div>
  );
}
