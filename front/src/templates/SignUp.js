import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                byadab
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {

    const navigate = useNavigate()

    const [vars, setVars] = React.useState({ otp: "", isOtpSent: false, otpErr: false, fname: "", lname: "", mobile: "", email: "", password: "", cpassword: "", accountType: "customer" })


    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data } = await axios.post("/api/user/sign-up", vars)
        if (data && data.message) {
            localStorage.setItem("userInfo", JSON.stringify(data))
            navigate("/")
        }

    };


    return (
        <div>

            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100%', display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem" }}>
                    <CssBaseline />

                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >

                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            margin="normal"
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            value={vars.fname}
                                            onChange={(e) => setVars({ ...vars, fname: e.target.value })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="family-name"
                                            value={vars.lname}
                                            onChange={(e) => setVars({ ...vars, lname: e.target.value })}
                                        />
                                    </Grid>
                                </Grid>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="mobile"
                                    label="Mobile No"
                                    name="mobile"
                                    autoComplete="mobile"
                                    value={vars.mobile}
                                    onChange={(e) => setVars({ ...vars, mobile: e.target.value })}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={vars.email}
                                    onChange={(e) => setVars({ ...vars, email: e.target.value })}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={vars.password}
                                    onChange={(e) => setVars({ ...vars, password: e.target.value })}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Confirm Password"
                                    type="password"
                                    id="cpassword"
                                    autoComplete="new-password"
                                    value={vars.cpassword}
                                    onChange={(e) => setVars({ ...vars, cpassword: e.target.value })}
                                />
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="Seller Account."
                                        onChange={(e) => setVars({ ...vars, accountType: e.target.checked ? "seller" : "customer" })}
                                    />
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="/sign-in" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />

                            </Box>


                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
}