import React from "react";

const RecButton = React.forwardRef(({ color, button, onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref} className={color}>
      <span className="relative z-10">{button}</span>
    </a>
  );
});

export default RecButton;
