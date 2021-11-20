import React from "react";
import "./Button.css";

function Button({ typeButton, text, width, height, fontSize, borderRadius, onClick }) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${fontSize}px`,
        borderRadius: `${borderRadius}`,
        overflow: 'hidden',
      }}
    >
      {typeButton === "black-white" && (
        <button onClick={onClick} className="buttonType buttonBlackWhite">
          {text ? text : "Button"}
        </button>
      )}

      {typeButton === "love" && (
        <button onClick={onClick} className="buttonType buttonLove">
          <i className="fas fa-heart"></i> {text ? text : ""}
        </button>
      )}

      {typeButton === "upload" && (
        <button onClick={onClick} className="buttonType buttonUpload">
          <i className="fas fa-upload"></i> {text ? text : ""}
        </button>
      )}

      {typeButton === "delete" && (
        <button onClick={onClick} className="buttonType buttonDelete">
          <i className="fas fa-times"></i> {text ? text : ""}
        </button>
      )}

      {typeButton === "edit" && (
        <button onClick={onClick} className="buttonType buttonEdit">
          <i className="fas fa-edit"></i> {text ? text : ""}
        </button>
      )}

      {typeButton === "success" && (
        <button onClick={onClick} className="buttonType buttonSuccess">
          <i className="fas fa-check-double"></i> {text ? text : ""}
        </button>
      )}
    </div>
  );
}

export default Button;