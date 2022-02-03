import React from "react";
import "./loading.css";

function Error(props) {
  return (
    <React.Fragment>
      <div className="upp">
        <div className="col-md-12 centrar centrado">
          <h3>Algo ocurrió... {props.errorMensaje} </h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Error;
