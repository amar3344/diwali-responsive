import {Box} from "@mui/material"

import "./Home.css"

const Home = () => {
  return (
    <Box id="home">
    <Box className="home-container-sm">
      <img src="https://html.design/demo/diwali/images/bg_diwali.png" alt="" className="home-image"/>
      <img src="https://html.design/demo/diwali/images/happty_diwal.png" alt="home" className="diwali-image-text"/>
    </Box>
    <Box className="home-container">
        <img src="https://html.design/demo/diwali/images/happty_diwal.png" alt="home" />
    </Box>
    </Box>
      )
}

export default Home