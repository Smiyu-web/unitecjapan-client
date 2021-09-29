import React from "react";

const ViewMoreBtn = React.forwardRef(({ button, onClick, href }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className="viewmore_btn viewmore_arrow"
    >
      {button}
    </a>
  );
});

export default ViewMoreBtn;
