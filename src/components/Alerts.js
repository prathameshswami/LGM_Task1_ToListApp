import React from "react";

export default function Alerts() {
  return (
    <>
      <div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
        <strong>Attention :- </strong> No Todo's to be Displayed
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}
