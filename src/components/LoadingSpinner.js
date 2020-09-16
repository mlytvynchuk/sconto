import React from "react";
import { ClipLoader } from "react-spinners";
import "../assets/css/loading-spinner.css";
const LoadingSpinner = (props) => {
  return (
    <div className="loading-container">
      <ClipLoader
        sizeUnit={"px"}
        size={200}
        color={"#020E0D"}
        loading={props.loading}
      />
    </div>
  );
};

export default LoadingSpinner;
