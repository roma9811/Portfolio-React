import React from "react";
import "./SectionThree.css";
import { TextField, Checkbox, FormControlLabel, Stack, Button } from '@mui/material';

export const MainSectionThree = () => {
    return (
        <div className="SectionThree" id="contact">
            <div className="ContactMe">
                <h3>Get In Touch</h3>
                <h1>Contact Me</h1>
            </div>
            <div className="NameInput">
                <TextField
                    id="outlined-basic"
                    label="First name"
                    variant="outlined"
                    sx={{
                        width: '300px',
                        height: '60px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#394F8B',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#394F8B',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#394F8B',
                        },
                        '& .Mui-focused': {
                            color: '#394F8B',
                        }
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Last name"
                    variant="outlined"
                    sx={{
                        width: '300px',
                        height: '60px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#394F8B',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#394F8B',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#394F8B',
                        },
                        '& .Mui-focused': {
                            color: '#394F8B',
                        }
                    }}
                />
            </div>
            <div className="NameInput2">
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    sx={{
                        width: '300px',
                        height: '60px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#394F8B',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#394F8B',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#394F8B',
                        },
                        '& .Mui-focused': {
                            color: '#394F8B',
                        }
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Phone number"
                    variant="outlined"
                    sx={{
                        width: '300px',
                        height: '60px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#394F8B',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#394F8B',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#394F8B',
                        },
                        '& .Mui-focused': {
                            color: '#394F8B',
                        }
                    }}
                />
            </div>
            <div className="NameInput3">
                <TextField
                    id="outlined-multiline-static"
                    label="Message..."
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{
                        width: '630px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#394F8B',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#394F8B',
                            },
                            '& textarea': {
                                padding: '18.5px 14px',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#394F8B',
                        },
                        '& .Mui-focused': {
                            color: '#394F8B',
                        }
                    }}
                />
            </div>
            <div className="CheckboxSection">
                <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to the terms and conditions"
                    sx={{
                        '& .MuiCheckbox-root': {
                            color: '#394F8B',
                        },
                        '& .MuiCheckbox-root.Mui-checked': {
                            color: '#394F8B',
                        },
                        '& .MuiFormControlLabel-label': {
                            color: '#394F8B',
                        }
                    }}
                />
            </div>
            <div className="ButtonSection">
                <Stack direction="row" spacing={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            backgroundColor: '#394F8B',
                            '&:hover': {
                                backgroundColor: '#2d3a6e',
                            }
                        }}
                    >
                        Submit
                    </Button>
                </Stack>
            </div>
        </div>
    )
}
