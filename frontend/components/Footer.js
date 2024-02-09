import { Box } from "@mui/material";

const Footer = () => {
  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      </style>
      <Box
        sx={{
          backgroundColor: "#540000",
          color: "#ffffff",
          fontSize: "30px",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div style={{ fontSize: "20px", marginTop: "10px" }}>
          <a
            href="https://www.ntua.gr/en/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            National Technical University of Athens
          </a>
        </div>
        <div style={{ fontSize: "18px", marginTop: "10px" }}>
          © 2023-2024 by leo2002, gk, christos, philmard, chatgpt
        </div>
      </Box>
    </>
  );
};

export default Footer;
