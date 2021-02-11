import React from "react";

// Export Container component to use a bootstrap container without worrying about class names. 
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Export Row component to use a bootstrap row without worrying about class names. 
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Export Col component to use a bootstrap column with less syntax e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
    return (
      <div
        className={size
          .split(" ")
          .map(size => "col-" + size)
          .join(" ")}
      >
        {children}
      </div>
    );
}