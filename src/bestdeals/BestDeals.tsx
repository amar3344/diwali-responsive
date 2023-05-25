import {Box,Typography,Button} from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "./BestDeals.css"

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const BestDeals = () => {
  return (
    <Box id="bestDeals">
    <Box className="deals-container-sm">
        <Typography variant="h3">Diwali Offer Products</Typography>
        <Carousel responsive={responsive}>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
        </Carousel>
    </Box>
    <Box className="deals-container">
        <Typography variant="h3" sx={{fontFamily:"Work Sans",fontWeight:"bold",fontSize:"60px",margin:"10px 0px 0px 0px",color:"#521407"}}>Diwali offer Products</Typography>
        <Carousel responsive={responsive}>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
            <Box className="each-watch-container">
                <img src="https://html.design/demo/diwali/images/watch_screen_01.png" alt="black" className="each-watch-image"/>
                <Typography style={{color:"#1f1f1f" ,fontWeight:"bold",fontFamily:"'Abril Fatface', cursive;",fontSize:"25px"}}>Product name</Typography>
                <Typography style={{color:"#86bd57",fontSize:"24px",fontWeight:"bold"}}><span className="span-element">$100.00</span> $169.00</Typography>
                <Box>
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                    <StarIcon className="star-images" />
                </Box>
                <Button variant="outlined">Visit Website</Button>
            </Box>
        </Carousel>
    </Box>
    </Box>
    
  )
}

export default BestDeals