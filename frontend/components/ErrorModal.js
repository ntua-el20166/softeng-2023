import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const ErrorModal = ({ statusCode, onClose }) => {
  let errorMessage = "";

  switch (statusCode) {
    case 200:
      errorMessage = "Success: Data returned.";
      break;
    case 204:
      errorMessage = "Success: No data returned.";
      break;
    case 400:
      errorMessage = "Bad Request: Invalid parameters.";
      break;
    case 401:
      errorMessage = "Not Authorized: User authentication failed.";
      break;
    case 404:
      errorMessage = "Not Available: Requested service not found.";
      break;
    case 500:
      errorMessage = "Internal Server Error.";
      break;
    default:
      errorMessage = "There was an error processing your request.";
  }

  const [isHovered, setIsHovered] = useState(false);

  const modalStyles = {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.7)", // Darker overlay
  };

  const contentStyles = {
    width: "700px",
    height: "280px",
    background: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    position: "relative", // Add position relative for absolute positioning of close button
  };

  const titleStyles = {
    color: "#000000", // Black color for the title
    fontSize: "28px",
    marginBottom: 10,
  };

  const messageStyles = {
    color: "grey",
    fontSize: "20px",
  };

  const buttonStyles = {
    flex: "0 0 auto", // Allow the button to shrink if needed
    height: "36px",
    width: "650px",
    background: isHovered ? "#ff6666" : "#FF0000", // Lighter red color on hover
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    position: "absolute",
    bottom: "20px",
  };

  const closeIconStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    fontSize: "20px",
    color: "red",
    border: "none",
    borderRadius: "30px",
    background: "#ffd9d9",
    padding: "10px 10px",
  };

  return (
    <div style={modalStyles}>
      <div style={contentStyles}>
        <h2 style={titleStyles}>Error</h2>
        <button style={closeIconStyles} onClick={onClose}>
          <CloseIcon />
        </button>
        <p style={messageStyles}>{errorMessage}</p>
        <button
          style={buttonStyles}
          onClick={onClose}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
