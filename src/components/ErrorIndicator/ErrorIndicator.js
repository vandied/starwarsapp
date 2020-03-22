import React from "react";
import "./ErrorIndicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <p className="boom">BOOM!</p>
      <p>something has gone terribly wrong</p>
      <p>(but we already sent droids to fix it)</p>
    </div>
  );
};

export default ErrorIndicator;
