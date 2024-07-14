import React from 'react'
import { Card,CardContent,CardHeader,Typography } from '@material-ui/core'
import useStyles from './styles.js'

const Main = () => {
    const classes =useStyles();  
     
  return (
    <div className={classes.root}>
    <CardHeader  title="Expense Tracker" subheader="Powered by Speechly "/>
    <CardContent>
      <Typography align='center' variant='h5'> Total Balance $100</Typography>
      <Typography  variant='subtitle1' style={{lineHeight:'1.5em', marginTop:'20px'}}> 
         Try saying Add income 
      </Typography>
    </CardContent>
    
    </div>
  )
}

export default Main 