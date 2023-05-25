import {Box,Button,Typography} from "@mui/material"
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

import "./DonateGifts.css"
const DonateAndGifts = () => {
  return (
    <Box id="donateGifts">
    <Box className="donate-container-sm">
      <Typography style={{fontSize:"38px",color:"#fff",fontWeight:"normal",fontFamily:"'Abril Fatface', cursive;"}}>Donate</Typography>
      <Box>
      <img src="https://html.design/demo/diwali/images/banner1_inner.png" alt="" className="donate-image-sm"/>
      </Box>
      <Box>
        <Box className="each-logo-description-con">
            <CardGiftcardIcon style={{color:"#fff",fontSize:"100px",padding:"0px 30px 0px 0px"}}/>
            <Box className="each-description">
              <Typography variant="h4" style={{color:"#fff",fontFamily:"'Abril Fatface'",fontWeight:"bold",fontSize:"30px"}}>Best Wishes</Typography>
              <Typography style={{fontFamily:"'Montserrat', sans-serif",color:"#eee",fontSize:"17px",marginTop:"10px"}}>The tradition was also embraced by retailers,for whom the weeks and,eventually,the entire month before Christmas..</Typography>
            </Box>
        </Box>
        <Box className="each-logo-description-con">
            <CardGiftcardIcon style={{color:"#fff",fontSize:"100px",padding:"0px 30px 0px 0px"}}/>
            <Box className="each-description">
              <Typography variant="h4" style={{color:"#fff",fontFamily:"'Abril Fatface'",fontWeight:"bold",fontSize:"30px"}}>Best Wishes</Typography>
              <Typography style={{fontFamily:"'Montserrat', sans-serif",color:"#eee",fontSize:"17px",marginTop:"10px"}}>The tradition was also embraced by retailers,for whom the weeks and,eventually,the entire month before Christmas..</Typography>
            </Box>
        </Box>
        <Box className="each-logo-description-con">
            <CardGiftcardIcon style={{color:"#fff",fontSize:"100px",padding:"0px 30px 0px 0px"}}/>
            <Box className="each-description">
              <Typography variant="h4" style={{color:"#fff",fontFamily:"'Abril Fatface'",fontWeight:"bold",fontSize:"30px"}}>Best Wishes</Typography>
              <Typography style={{fontFamily:"'Montserrat', sans-serif",color:"#eee",fontSize:"17px",marginTop:"10px"}}>The tradition was also embraced by retailers,for whom the weeks and,eventually,the entire month before Christmas..</Typography>
            </Box>
        </Box>
        <Button variant="outlined" style={{border:"1px solid #fff",borderRadius:"5px",color:"#fff",fontSize:"20px",fontFamily:"'Abril Fatface'"}}>Donate</Button>
      </Box>
    </Box>
    <Box className="donate-container">
        <Typography className="donate-font" variant="h3">Donate</Typography>
        <Box className="left-right-container">
          <img src="https://html.design/demo/diwali/images/banner1_inner.png" alt="" className="donate-image"/>
          <Box>
            <Box className="gift-freeshipping-easyreturn-card">
              <CardGiftcardIcon  sx={{fontSize:"50px"}}/>
              <Box className="description">
                <Typography variant="h3">Best Wishes</Typography>
                <Typography>The tradition was also embraced by retailers, for whom the weeks and, eventually, the entire month before Christmas..</Typography>
              </Box>
            </Box>
            <Box className="gift-freeshipping-easyreturn-card">
              <CardGiftcardIcon sx={{fontSize:"50px"}}/>
              <Box className="description">
                <Typography variant="h3">Best Wishes</Typography>
                <Typography>The tradition was also embraced by retailers, for whom the weeks and, eventually, the entire month before Christmas..</Typography>
              </Box>
            </Box>
            <Box className="gift-freeshipping-easyreturn-card">
              <CardGiftcardIcon sx={{fontSize:"50px"}}/>
              <Box className="description">
                <Typography variant="h3">Best Wishes</Typography>
                <Typography>The tradition was also embraced by retailers, for whom the weeks and, eventually, the entire month before Christmas..</Typography>
              </Box>
            </Box>
            <Button variant="outlined">Donate</Button>
          </Box>
        </Box>
    </Box>
    </Box>
  )
}

export default DonateAndGifts