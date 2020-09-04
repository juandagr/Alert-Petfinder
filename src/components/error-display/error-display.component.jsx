import React from "react";

import "./error-display.styles.scss";

/**
 * COmponent to display the errors that happend during the data fetch
 */
const ErrorDisplay = () => (
  <div className="error-container">
    <p>An error occurred during the data query process, please try again.</p>
  </div>
);

export default ErrorDisplay;
