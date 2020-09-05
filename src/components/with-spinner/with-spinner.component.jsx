import React from "react";

import "./with-spinner.styles.scss";

/**
 * Component that render a lazy loader or a component depending on a property
 */
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="spinner-overlay">
      <div className="spinner-container" />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
