import React from 'react'
import './Footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid,Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__left'>
      <img
          className="footer__albumLogo"
          src="https://cdn.pixabay.com/photo/2018/04/26/16/31/marine-3352341_960_720.jpg"
          alt=""
        />
        <div className="footer__songInfo">
            <h4>Yeah!</h4>
            <p>Justin</p>
      </div>
      </div>
      
        
      <div className='footer__center'>
        <ShuffleIcon className='footer__green'/>
        <SkipPreviousIcon className='footer__icon'/>
        <PlayCircleOutlineIcon className='footer__icon' fontSize='large'/>
        <SkipNextIcon className='footer__icon'/>
        <RepeatIcon className='footer__green'/>
      </div>
      <div className='footer__right'>
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>

      </div>
    </div>
  )
}
