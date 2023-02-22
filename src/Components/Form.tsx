//@ts-nocheck
import * as React from 'react';
import Box from '@mui/material/Box';    
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';

export default function BasicCard() {
    interface IState{
        username:string,
        email:string,
        phone:string,
    }
    const [formvalue,setFormValue] = useState<IState>({
      username:'',
      email:'',
      phone:'',
    })
    const [formError,setFormError] = useState<any>({})

    const isdisable = Object.values(formvalue).every((value) => !!value);
    const handleChange=(e:any) =>{
     const {name,value} = e.target
     setFormValue({...formvalue,[name]:value})
    }
    const handleSubmit = (e:any) =>{
      
      e.preventDefault()
      setFormError(validation(formvalue))
      setOpen(true);
    }

    const validation = (data:any) =>{
      let error = {}
      let namelit = /^[a-z A-Z]+$/
      let emaillit = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      let phonelit = /[0-9]{10}$/
      if(!data.username){
        error.username = 'please enter your name'
      }else if(!namelit.test(data.username)){
        error.username = 'plese enter name in alphabet only'
      }
      if(!data.email){
        error.email = 'please enter mail id'
      }else if(!emaillit.test(data.email)){
        error.email = 'please enter valid mail id'
      }

      if(!data.phone){
        error.phone = 'please enter phone number'
      }else if(!phonelit.test(data.phone)){
        error.phone = 'plese enter valid phone number'
      }
      
      return error
    }

    const [open, setOpen] = React.useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };
  

  return (
    <>
    <Card sx={{ maxWidth: 600 }} style={{margin:'auto'}}>
      <CardContent>
        <h1>Candidate Detail Form</h1>
      <TextField id="outlined-basic" label="UserName" variant="outlined"  fullWidth style={{marginTop:'10px'}} name='username' value={formvalue?.username} onChange={handleChange}/>
      <span>{formError.username}</span>
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth style={{marginTop:'10px'}} name='email' value={formvalue?.email} onChange={handleChange}/>
      {formError.email}
      <TextField id="outlined-basic" label="Phone" variant="outlined" fullWidth style={{marginTop:'10px'}} name='phone' value={formvalue?.phone} onChange={handleChange}/> 
      {formError.phone}
      </CardContent>
      <CardActions>
       {isdisable?<Button variant="contained" onClick={handleSubmit}>Start Test</Button>: <Button variant="contained" style={{background:"grey"}}>Start Test</Button>} 
      </CardActions>
    </Card>

<Dialog
open={open}
onClose={handleClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
>
<DialogTitle id="alert-dialog-title">
  {"Select Your Preferred Language"}
</DialogTitle>
<DialogContent>
  <DialogContentText id="alert-dialog-description">
  <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="js" control={<Radio />} label="JavaScript" />
        <FormControlLabel value="html" control={<Radio />} label="HTML" />
        <FormControlLabel value="css" control={<Radio />} label="CSS" />
      </RadioGroup>
  </DialogContentText>
</DialogContent>
<DialogActions>
  <Button onClick={handleClose}>Cancel</Button>
  <Link to='/quiz'>
    <Button  onClick={handleClose} autoFocus>
    Next
  </Button></Link>
  
</DialogActions>
</Dialog>
</>
  );
}