import { createTheme } from "@mui/material"

const theme = createTheme({
   typography: {
      logo_with_app_name: {
         textDecoration: "none",
         fontWeight: 700,
         display: "flex",
         alignContent: "flex-start",
         alignItems: "center",
         letterSpacing: "0.3px",
         color: "#1A202C",
      },
      Heading_H3: {
         width: "27rem",
         height: "2.5rem",
         letterSpacing: "0.2px",
         fontWeight: "700",
         fontSize: "2rem",
         lineHeight: "2.5rem",
         color: "#1A202C",
      },
      body_sign_in: {
         letterSpacing: "0.3px",
         fontWeight: "400",
         fontSize: "1rem",
         lineHeight: "1.5rem",
         color: "#718096",
      },
      text_footer: {
         color: "#718096",
         fontWeight: "600",
         fontSize: "1rem",
         lineHeight: "1.5rem",
      },
   },
})

export default theme
