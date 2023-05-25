import { Component } from "react"
import {Box,List,Link} from "@mui/material"

import "./Navbar.css"


interface IProps{

}

interface IState{
  isActive : boolean
}

class Navbar extends Component<IProps,IState>{
  state : IState = {
      isActive : false
  }

  makeNanLinksDisplay=()=>{
    this.setState(p=>({isActive: !p.isActive}))
  }

  render(){
    const {isActive} = this.state
    return(
      <>
      <Box className="nav-bar-container-sm">
        <img src="https://html.design/demo/diwali/images/logo.png" alt="diwali-logo" className="diwali-logo"/>
        <img src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png" alt="menuBars" className="menu-bars" onClick={this.makeNanLinksDisplay}/>
        {isActive && (
            <List className="each-item-nav">
              <Link className="nav-links" underline="none" style={{margin:"10px",borderRadius:"20px 0px 20px 0px",display:"flex"}} href="#home">Home</Link>
              <Link className="nav-links" underline="none" style={{margin:"10px",borderRadius:"20px 0px 20px 0px",display:"flex"}} href="#whishes">Whishes</Link>
              <Link className="nav-links" underline="none" style={{margin:"10px",borderRadius:"20px 0px 20px 0px",display:"flex"}} href="#bestDeals">BestDeals</Link>
              <Link className="nav-links" underline="none" style={{margin:"10px",borderRadius:"20px 0px 20px 0px",display:"flex"}} href="#donateGifts">DonateGifts</Link>
              <Link className="nav-links" underline="none" style={{margin:"10px",borderRadius:"20px 0px 20px 0px",display:"flex"}} href="#contacts">Contact</Link>
        </List>
        )}
      </Box>
      <Box className="navbar-container">
        <img src="https://html.design/demo/diwali/images/logo.png" alt="diwali-logo" className="diwali-logo"/>
        <List className="each-item-nav">
            <Link underline="none"  className="nav-links">Home</Link>
            <Link underline="none" className="nav-links">Whishes</Link>
            <Link underline="none" className="nav-links">BestDeals</Link>
            <Link underline="none" className="nav-links">DonateGifts</Link>
            <Link underline="none" className="nav-links">Contact</Link>
        </List>
      </Box>
    </>
    )
  }
}

// const Navbar = () => {
//   return (
//     <Box className="navbar-container">
//       <Box className="nav-bar-container-sm" onClick={}>
//         <img src="https://html.design/demo/diwali/images/logo.png" alt="diwali-logo" className="diwali-logo"/>
//         <img src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png" alt="menuBars" className="menu-bars"/>
//       </Box>
//       <List className="each-item-nav">
//           <Link className="nav-links">Home</Link>
//           <Link className="nav-links">Whishes</Link>
//           <Link className="nav-links">BestDeals</Link>
//           <Link className="nav-links">DonateGifts</Link>
//           <Link className="nav-links">Contact</Link>
//       </List>
//     </Box>
//   )
// }

export default Navbar