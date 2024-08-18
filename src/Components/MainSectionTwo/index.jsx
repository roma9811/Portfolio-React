import React from "react";
import "./SectionTwo.css";
import Avion from "../../Assets/Images/avion.png";
import Ask from "../../Assets/Images/askexperts.png";
import Tours from "../../Assets/Images/tours.png";
import Tesla from "../../Assets/Images/tesla.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

export const MainSectionTwo = () => {
    return (
        <div className="Section2" id="portfolio">
            <div className="PortfolioContainer">
                <div className="MyPortfolio">
                    <h2>My Portfolio</h2>
                </div>
                <div className="gitHubButton">
                <Button variant="outlined"  sx={{ fontSize: '0.75rem',fontWeight:"bold" }}>Visit my GitHub</Button>
                </div>
            </div>
            <div className="PortfolioBox">
                <Card sx={{ maxWidth: 345, margin: 2 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Avion}
                        alt="Avion"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"sx={{ color: '#394F8B'}}>Avion</Typography>
                        <Typography variant="body2">
                        <CardActions><Button size="small" color="primary" sx={{ color: '#394F8B',fontWeight: 'bold' }}>Learn More</Button></CardActions>
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345, margin: 2 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Ask}
                        alt="Ask Experts"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"sx={{ color: '#394F8B'}}>Ask Experts</Typography>
                        <Typography variant="body2">
                        <CardActions><Button size="small" color="primary" sx={{ color: '#394F8B',fontWeight: 'bold' }}>Learn More</Button></CardActions>
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345, margin: 2}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Tours}
                        alt="Tours"
                      
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#394F8B' }}>Tours</Typography>
                        <Typography variant="body2">
                        <CardActions><Button size="small" color="primary" sx={{ color: '#394F8B',fontWeight: 'bold' }}>Learn More</Button></CardActions>
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345, margin: 2 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Tesla}
                        alt="Tesla"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#394F8B' }}>Tesla</Typography>
                        <Typography variant="body2">
                        <CardActions><Button size="small" sx={{ color: '#394F8B',fontWeight: 'bold' }}>Learn More</Button></CardActions>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
