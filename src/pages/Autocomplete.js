import { useState } from 'react';
import * as React from 'react';
import { Grid, Box, TextField, Button, Card, Typography } from '@mui/material';

export default function ComboBox() {
    const [signup, setSignup] = useState(false);

    const signUp = () => {
        setSignup(true);
    }

    const signIn = () => {
        setSignup(false);
    }

    return (
        <>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Card sx={{ width: 500, padding: 3 }}>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" display='center' justifyContent='center' alignItems='center' fontWeight={600}>
                                {!signup ? 'Sign In' : 'Sign Up'}
                            </Typography>
                        </Grid>


                        <Grid item xs={12}>
                            <TextField
                                id="Name" label="Name" variant="outlined" size='small' fullWidth />
                        </Grid><Grid item xs={12}>
                            <TextField
                                id="Passworld" label="Passworld" variant="outlined" size='small' fullWidth />
                        </Grid>

                        {
                            signup ?
                                <>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="conformpass" label="Conform Password" variant="outlined" size='small' fullWidth
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            id="email" label="Email" variant="outlined" size='small' fullWidth />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            id="Phone" label="Phone" variant="outlined" size='small' fullWidth />
                                    </Grid>


                                </>

                                : ''
                        }

                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Button variant="contained" onClick={!signup ? signUp : signIn} fullWidth>{!signup ? 'Sign Up' : 'Sign In'}</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" fullWidth>Submit</Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                </Card>
            </Box>
        </>
    );
}