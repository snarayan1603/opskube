import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignInSide() {

    const navigate = useNavigate()

    const queryParams = new URLSearchParams(window.location.search)
    const redirect = queryParams.get("redirect");

    const [userInfo, setUserInfo] = React.useState({ userInfo: localStorage.getItem("userInfo1") ? JSON.parse("userInfo1") : null })

    React.useEffect(() => {
        if ((userInfo && userInfo.uid))
            navigate(redirect ? `/${redirect}` : "/")
    }, [navigate, redirect, userInfo])

    const [vars, setVars] = React.useState({ error: "", loading: false })

    const handleSubmit = async (event) => {
        event.preventDefault();
        setVars({ ...vars, error: false })

        const formData = new FormData(event.currentTarget);
        let tempDetails = {
            mobile: formData.get('mobile'),
            password: formData.get('password'),
        }

        const { data } = await axios.post("/api/user/sign-in", tempDetails)

        if (data && data.data) {
            setVars({ ...vars, userInfo: data.data })
            localStorage.setItem("userInfo", JSON.stringify(data.data))
            setUserInfo(data.data)
            navigate(redirect ? `/${redirect}` : "/")
        } else {
            setVars({ ...vars, error: data && data.error ? data.error : "Please try after sometime..." })
        }

    };

    return (
        <div >

            <div style={{ maxWidth: "100%", marginTop: "0.5rem", marginBottom: "1rem" }}>

                <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                                    Sign in
                                </Typography>
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

                                    {vars.error && <p severity="error">{vars.error}</p>}
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="mobile"
                                        label="Mobile No"
                                        name="mobile"
                                        autoComplete="mobile"
                                        autoFocus
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
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="/log-in-with-otp" variant="body2">
                                                Log in with OTP
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="/sign-up" variant="body2">
                                                {"Don't have an account? Sign Up"}
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

        </div>
    );
}