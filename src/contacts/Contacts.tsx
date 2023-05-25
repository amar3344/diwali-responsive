import {Box,Typography, Input , Button} from "@mui/material"
import NearMeIcon from '@mui/icons-material/NearMe';
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { TextareaAutosize } from '@mui/base';

import "./Contacts.css"

const Contacts = () => {
    
  return (
    <Box id="contacts">
    <Box className="contacts-container-sm">
    <Typography variant="h6" style={{alignSelf:"center",color:"#521407",fontWeight:"900",fontFamily:"'Abril Fatface'",fontSize:"35px"}}>Contact Us</Typography>

            <Box className="contacts-left-container">
                <Box className="address-email-phone-cards">
                    <Box className="icons-container">
                        <NearMeIcon className="mapping-icon" style={{fontSize:"40px"}}/>
                    </Box>
                    <Box>
                        <Typography variant="h3" style={{color:"#521407",fontWeight:"600",fontFamily:"'Abril Fatface'",fontSize:"25px"}}>Address</Typography>
                        <Typography style={{color:"#521407",fontWeight:"300",fontFamily:"'Abril Fatface'",fontSize:"18px"}}>Fleming 196 woodside Circle,FL 36602</Typography>
                    </Box>
                </Box>
                <Box className="address-email-phone-cards">
                    <Box className="icons-container">
                        <MailIcon className="mapping-icon" style={{fontSize:"40px"}}/>
                    </Box>
                    <Box>
                        <Typography variant="h3" style={{color:"#521407",fontWeight:"600",fontFamily:"'Abril Fatface'",fontSize:"25px"}}>Email</Typography>
                        <Typography style={{color:"#521407",fontWeight:"300",fontFamily:"'Abril Fatface'",fontSize:"18px"}}>demoinfo@gmail.com</Typography>
                    </Box>
                </Box>
                <Box className="address-email-phone-cards">
                    <Box className="icons-container">
                        <PhoneInTalkIcon className="mapping-icon" style={{fontSize:"40px"}}/>
                    </Box>
                    <Box>
                        <Typography variant="h3" style={{color:"#521407",fontWeight:"600",fontFamily:"'Abril Fatface'",fontSize:"25px"}}>Phone Number</Typography>
                        <Typography style={{color:"#521407",fontWeight:"300",fontFamily:"'Abril Fatface'",fontSize:"18px"}}>+9112345 67890</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="contact-sm">
                <Input placeholder=" Your Name" required type="text" className="input-sm"/>
                <Input type="text" placeholder="Your Email" required className="input-sm"/>
                <Input type="text" placeholder="Your Number" required className="input-sm"/>
                <TextareaAutosize  placeholder="Your Message" maxRows={10} minRows={10} required className="text-area-sm" />
            </Box>
        <Button variant="contained" style={{alignSelf:"center"}}>Send Message</Button>

    </Box>
    <Box className="contacts-container">
        <Typography variant="h6">Contact Us</Typography>
        <Box className="contacts-left-right-container">
            <Box className="contacts-left-container">
                <Box className="address-email-phone-cards">
                    <NearMeIcon/>
                    <Box>
                        <Typography>Address</Typography>
                        <Typography>Fleming 196 woodside Circle,FL 36602</Typography>
                    </Box>
                </Box>
                <Box>
                    <MailIcon/>
                    <Box>
                        <Typography>Email</Typography>
                        <Typography>demoinfo@gmail.com</Typography>
                    </Box>
                </Box>
                <Box>
                    <PhoneInTalkIcon/>
                    <Box>
                        <Typography>Phone Number</Typography>
                        <Typography>+9112345 67890</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box className="input-name-email">
                    <Input placeholder=" Your Name" required type="text" className="input-name"/>
                    <Input type="text" placeholder="Your Email" required className="input-name" />
                </Box>
                <Input type="text" placeholder="Your Number" required className="input-name strech"/>
                <TextareaAutosize  placeholder="Your Message" maxRows={10} minRows={10} required className="input-name strech-height"/>
            </Box>
        </Box>
        <Button variant="contained">Send Message</Button>
    </Box>
    </Box>
  )
}

export default Contacts