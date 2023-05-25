import React, { Component } from 'react'
import {Box} from "@mui/material"

import Navbar from "../navbar/Navbar"
import Home from "../home/Home"
import Whishes from '../whishes/Whishes'
import BestDeals from '../bestdeals/BestDeals'
import DonateAndGifts from '../donateAndGifts/DonateAndGifts'
import Contacts from '../contacts/Contacts'

import "./DiwaliApp.css"



interface IProps{

}

interface IState{
  isActive:boolean

}


export default class DiwaliApp extends Component<IProps,IState>{
  state : IState ={
      isActive:true
  }

  loadingPage=()=>{
    setTimeout(()=>{
      this.setState({isActive:false})
    },3000)
  }

  componentDidMount(): void {
    this.loadingPage()
  }

  render() {
    const {isActive} = this.state
    return (
      <>
      {isActive ? (<Box>
        <img src="https://html.design/demo/diwali/images/loading_img.gif" alt="loading-page" className="loading-page" />
      </Box>):(
          <Box className="react-app">
          <Navbar/>
          <Home/>
          <Whishes/>
          <BestDeals/>
          <DonateAndGifts/>
          <Contacts/>
        </Box>
      ) }
      </>
    )
  }
}
