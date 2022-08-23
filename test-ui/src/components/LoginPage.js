import React from "react"
import { Box, Grid, Typography, Container } from "@mui/material"
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined"

const LoginPage = () => {
   return (
      <Box component='div' sx={{ padding: "1.5rem", position: "relative" }}>
         <Grid container>
            <Grid item xs={6} sx={{ padding: "1.5rem" }}>
               <Typography variant='logo_with_app_name' component='a' href='/'>
                  <CardTravelOutlinedIcon sx={{ paddingRight: "0.7875rem" }} />
                  AIOZ.Transfer
               </Typography>
               <Container
                  sx={{
                     padding: "9.4rem 10.94rem",
                     display: "flex",
                     justifyContent: "center",
                  }}>
                  <Typography variant='Heading_H3'>
                     Sign in to AIOZ.Transfer
                  </Typography>
               </Container>
            </Grid>
            <Grid item xs={6}>
               <h1>Slider</h1>
            </Grid>
         </Grid>
      </Box>
   )
}

export default LoginPage
