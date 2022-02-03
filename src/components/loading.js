import React from "react";
import "./loading.css";
import loader from "./loader.gif";
function Loading() {
  return (
    <React.Fragment>
      <div className="upp">
        <div className="col-md-12 centrar centrado">
          <img src={loader} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Loading;
