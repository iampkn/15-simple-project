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
         width: "431px",
         height: "40px",
         letterSpacing: "0.2px",
         fontWeight: "800",
         fontSize: "32px",
         color: "#1A202C",
      },
   },
})

export default theme
