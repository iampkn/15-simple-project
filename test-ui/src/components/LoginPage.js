import React, { useState } from "react"
import { useFormik } from "formik"
import * as yup from "yup"
import {
   Box,
   Grid,
   Typography,
   Container,
   Button,
   Divider,
   TextField,
   IconButton,
   Checkbox,
   Link,
   Stack,
} from "@mui/material"
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined"
import GoogleIcon from "@mui/icons-material/Google"
import AppleIcon from "@mui/icons-material/Apple"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from "@mui/icons-material/Visibility"
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const validationSchema = yup.object({
   email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
   password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
})

const LoginPage = () => {
   const [showPassWord, setShowPassword] = useState(true)
   const [rememberMe, setRememberMe] = useState(true)

   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
         console.log(values)
      },
   })

   function handleClickShowPassword() {
      setShowPassword(!showPassWord)
   }
   function handleRememberMe() {
      setRememberMe(!rememberMe)
   }
   return (
      <Box component='div' sx={{ padding: "1.5rem" }}>
         <Grid container>
            <Grid item xs={6} sx={{ padding: "1.5rem" }}>
               <Typography variant='logo_with_app_name' component='a' href='/'>
                  <CardTravelOutlinedIcon sx={{ paddingRight: "0.7875rem" }} />
                  AIOZ.Transfer
               </Typography>
               <Container
                  disableGutters='true'
                  maxWidth='false'
                  sx={{
                     paddingTop: "9.43rem",
                     display: "flex",
                     flexDirection: "column",
                     textAlign: "center",
                     alignItems: "center",
                     maxWidth: "430px",
                  }}>
                  <Typography variant='Heading_H3'>
                     Sign in to AIOZ.Transfer
                  </Typography>
                  <Typography
                     variant='body_sign_in'
                     sx={{ paddingTop: "1rem" }}>
                     Send, spend and save smarter
                  </Typography>
                  <Container
                     disableGutters='true'
                     component='div'
                     sx={{
                        paddingTop: "50px",
                        display: "flex",
                        justifyContent: "space-between",
                     }}>
                     <Button
                        variant='outlined'
                        sx={{ borderRadius: 3 }}
                        startIcon={<GoogleIcon />}
                        component='a'
                        href='/'>
                        Sign In with Google
                     </Button>
                     <Button
                        variant='outlined'
                        sx={{ borderRadius: 3 }}
                        startIcon={<AppleIcon />}
                        component='a'
                        href='/'>
                        Sign In with Apple
                     </Button>
                  </Container>
                  <Container
                     disableGutters='true'
                     component='div'
                     sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "1rem",
                        gap: "12px",
                     }}>
                     <Divider sx={{ flexGrow: 1 }} />
                     <Typography variant='body_sign_in'>
                        Or with email
                     </Typography>
                     <Divider sx={{ flexGrow: 1 }} />
                  </Container>
                  <Container disableGutters='true' component='div'>
                     <form onSubmit={formik.handleSubmit}>
                        <TextField
                           fullWidth
                           required
                           id='email'
                           name='email'
                           label='Username or email'
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           error={
                              formik.touched.email &&
                              Boolean(formik.errors.email)
                           }
                           helperText={
                              formik.touched.email && formik.errors.email
                           }
                           margin='normal'
                           sx={{
                              [`& fieldset`]: {
                                 borderRadius: "12px",
                              },
                           }}
                        />
                        <div style={{ position: "relative" }}>
                           <TextField
                              fullWidth
                              required
                              id='password'
                              name='password'
                              label='Password'
                              type={showPassWord ? "password" : "text"}
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              inputProps={{
                                 style: {
                                    paddingRight: "45px",
                                 },
                              }}
                              error={
                                 formik.touched.password &&
                                 Boolean(formik.errors.password)
                              }
                              helperText={
                                 formik.touched.password &&
                                 formik.errors.password
                              }
                              margin='normal'
                              sx={{
                                 [`& fieldset`]: {
                                    borderRadius: "12px",
                                 },
                              }}
                           />
                           <Box
                              sx={{
                                 position: "absolute",
                                 top: "30%",
                                 right: 3,
                              }}>
                              {showPassWord ? (
                                 <IconButton
                                    disableRipple='true'
                                    onClick={handleClickShowPassword}
                                    aria-label='invisible password'>
                                    <VisibilityOffIcon />
                                 </IconButton>
                              ) : (
                                 <IconButton
                                    disableRipple='true'
                                    onClick={handleClickShowPassword}
                                    aria-label='visible password'>
                                    <VisibilityIcon />
                                 </IconButton>
                              )}
                           </Box>
                        </div>

                        <Stack
                           direction='row'
                           justifyContent='space-between'
                           alignItems='center'
                           sx={{ pb: 4 }}
                           spacing={0}>
                           <div
                              style={{
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                              }}>
                              <Checkbox
                                 disableRipple='true'
                                 onChange={handleRememberMe}
                                 icon={<RadioButtonUncheckedIcon />}
                                 checkedIcon={<CheckCircleIcon />}
                                 label='Remember me'
                              />
                              <Typography variant='body1'>
                                 Remember me
                              </Typography>
                           </div>
                           <Link
                              rel='noopener'
                              variant='body2'
                              target='blank'
                              href='/'
                              sx={{ color: "#194BFB" }} //define theme after
                              underline='none'>
                              Forgot password?
                           </Link>
                        </Stack>
                        <Button
                           color='primary'
                           variant='contained'
                           fullWidth
                           sx={{ borderRadius: 3, p: 1.4 }}
                           type='submit'>
                           Submit
                        </Button>
                        <Stack
                           direction='row'
                           justifyContent='center'
                           sx={{ pt: 3 }}
                           alignItems='baseline'
                           spacing={0.5}>
                           <Typography>Don't have account?</Typography>
                           <Link
                              rel='noopener'
                              target='_blank'
                              href='/'
                              color='inherit'
                              sx={{ fontWeight: "500" }}
                              underline='none'>
                              Sign up
                           </Link>
                        </Stack>
                     </form>
                  </Container>
               </Container>
               <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='flex-end'
                  sx={{ pt: 19.5 }}>
                  <Typography variant='text_footer'>Privacy Policy</Typography>
                  <Typography variant='text_footer'>CopyRight 2022</Typography>
               </Stack>
            </Grid>
            <Grid item xs={6}>
               <h1>Slider</h1>
            </Grid>
         </Grid>
      </Box>
   )
}

export default LoginPage
