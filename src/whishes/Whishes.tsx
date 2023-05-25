import { Component } from "react"
import {Box,Typography} from "@mui/material"
import Button from "../buttons/Buttons"

import "./Whishes.css"

interface IProps{

}

interface IState{
  days:number,
  hours:number,
  minutes:number,
  seconds:number
}

class Whishes extends Component<IProps,IState> {

  state : IState={
    days : 567,
    hours : 23,
    minutes:8,
    seconds:60
  }

  getSecondsTimer=()=>{
    setInterval(()=>{
          this.setState(p=> ({seconds : p.seconds - 0.5}))
    },1000)
  }

  getMinutesTimer=()=>{
    const {seconds} = this.state
    if(seconds === 0){
      this.setState(p =>({minutes : p.minutes - 1,seconds:60}))
    }
    
  }

  getHoursTimer=()=>{
    const {minutes} = this.state
    if(minutes === 0){
      this.setState(p=>({hours : p.hours - 1,minutes:60}))
    }
    
    
  }

  getDaysTimer=()=>{
    const {hours} = this.state
    if(hours === 0){
      this.setState(p=>({days : p.days - 1,hours:24}))
    }
  }

  componentDidMount(): void {
    this.getSecondsTimer()
    this.getMinutesTimer()
    this.getHoursTimer()
    this.getDaysTimer()
  }
  render(){

    const {days,hours,minutes,seconds} = this.state

    return (
      <Box id="whishes">
        <Box className="whishes-container-sm">
          <Box className="deepam-background">
            <img src="https://html.design/demo/diwali/images/w1.png" alt="deepam" className="deepam"/>
          </Box>
          <Box className="sm-whishes-container">
            <Typography variant="h3" sx={{color:"#521407",fontWeight:900,fontFamily:"Abril Fatface",fontSize:35}}>Your Whishes</Typography>
            <Typography sx={{fontFamily:"Montserrat'sans-serif",color:"#836d69",fontSize:16}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown..</Typography>
            {/* <Button>Read More</Button> */}
            <Button 
            border="none"
            fontColor="#521407"
            color="gold"
            fontsize = "18px"
            padd="15px"
            mar="10px 0px 0px 0px"
            fontFamily="Roboto"
            fontWeight="600"
            borderRadius=" 0px 50% 0px 50%"
            children = "Read More"
          />
          </Box>
          <Box className="sm-whishes-container">
            <Typography variant="h4" sx={{color:"#521407",fontWeight:900,fontFamily:"Abril Fatface",fontSize:35}}>Your Whishes</Typography>
            <Typography sx={{fontFamily:"Montserrat'sans-serif",color:"#836d69",fontSize:16}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown..</Typography>
            {/* <Button>Read More</Button> */}
            <Button 
            border="none"
            fontColor="#521407"
            color="gold"
            fontsize = "18px"
            padd="15px"
            mar="10px 0px 0px 0px"
            fontFamily="Roboto"
            fontWeight="600"
            borderRadius=" 0px 50% 0px 50%"
            children = "Read More"
          />
          </Box>
          <Box style={{textAlign:"center"}}>
            <img src="https://html.design/demo/diwali/images/w2.png" alt="deepam" className="deepam"/>
          </Box>
          <Box className="diwali-is-coming">
            <Typography variant="h2" sx={{fontWeight:"500",color:"#fff",fontFamily:"'Abril Fatface'"}}>Diwali is Coming</Typography>
            <Typography sx={{letterSpacing:"7px",width:"100%",fontSize:"24px",fontWeight:"narmal",fontFamily:"'Abril Fatface'",color:"#fff"}}>Let's countdown to Diwali!</Typography>
            <Box className="counter-container-sm">
              <Box className="each-counter-sm">
                <Typography sx={{fontSize:"25px",fontWeight:"600"}} >{days}<br/>Days</Typography>
              </Box>
              <Box className="each-counter-sm">
                <Typography sx={{fontSize:"25px",fontWeight:"600"}}>{hours}<br/> Hours</Typography>
              </Box>
              <Box className="each-counter-sm">
                <Typography sx={{fontSize:"25px",fontWeight:"600"}}>{minutes}<br/> Minutes</Typography>
              </Box>
              <Box className="each-counter-sm">
                <Typography sx={{fontSize:"25px",fontWeight:"600"}} >{seconds}<br/> Seconds</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="whishes-container">
          <Box className="left-image-container">
            <img src="https://html.design/demo/diwali/images/w1.png" alt="left-logo" className="whishes-image"/>
            <Box className="text-continer-lg">
              <Typography variant="h3" sx={{color:"#521407",fontWeight:900,fontFamily:"Abril Fatface"}}>Your Whishes</Typography>
              <Typography>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown..
              </Typography>
              <Typography>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
              </Typography>
              {/* <Button>Read More</Button> */}
              <Button 
            border="none"
            fontColor="#521407"
            color="gold"
            fontsize = "18px"
            padd="15px"
            mar="10px 0px 0px 0px"
            fontFamily="Roboto"
            fontWeight="600"
            borderRadius=" 0px 50% 0px 50%"
            children = "Read More"
          />
            </Box>
          </Box>
          <Box className="left-image-container">
            <Box className="text-continer-lg">
              <Typography variant="h3">Your Whishes</Typography>
              <Typography>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown..
              </Typography>
              <Typography>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
              </Typography>
              <Button 
            border="none"
            fontColor="#521407"
            color="gold"
            fontsize = "18px"
            padd="15px"
            mar="10px 0px 0px 0px"
            fontFamily="Roboto"
            fontWeight="600"
            borderRadius=" 0px 50% 0px 50%"
            children = "Read More"
          />
              {/* <Button>Read More</Button> */}
            </Box>
            <img src="https://html.design/demo/diwali/images/w2.png" alt="left-logo"/>
          </Box>
          <Box className="timer-container">
              <Typography variant="h3" sx={{fontWeight:"500",color:"#fff",fontFamily:"'Abril Fatface'",fontSize:"50px",mt:"10px"}}>Diwali is Coming!</Typography>
              <Typography sx={{letterSpacing:"7px",width:"100%",fontSize:"28px",fontWeight:"narmal",fontFamily:"'Abril Fatface'",mt:"10px" ,color:"#fff"}}>Let's Countdown to Diwali!</Typography>
              <Box className="countdown">
                <Box className="each-counter-sm">
                  <Typography sx={{fontSize:"35px",fontWeight:"600"}}>{days}<br/>Days</Typography>
                </Box>
                <Box className="each-counter-sm">
                  <Typography sx={{fontSize:"35px",fontWeight:"600"}}>{hours}<br/> Hours</Typography>
                </Box>
                <Box className="each-counter-sm">
                  <Typography sx={{fontSize:"35px",fontWeight:"600"}}>{minutes}<br/> Minutes</Typography>
                </Box>
                <Box className="each-counter-sm">
                  <Typography sx={{fontSize:"35px",fontWeight:"600"}}>{seconds}<br/>Seconds</Typography>
                </Box>
              </Box>
          </Box>
        </Box>
      </Box>
      )

  }
  
}

export default Whishes