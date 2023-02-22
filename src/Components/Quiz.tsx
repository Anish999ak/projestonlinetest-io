//@ts-nocheck
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { question } from '../App';
import SelectInput from '@mui/material/Select/SelectInput';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
export default function Quiz() {
  const [value, setValue] = useContext(UserContext);
  const [ques, setQues] = useContext(question)
  const [detail, setDetails] = useState(1)
  console.log(ques)
  useEffect(() => {
    if (value) {
      console.log(value)
      if (value.one == true) {
        setDetails(1)
      } else if (value.two == true) {
        console.log(value?.two)
        setDetails(2)
      } else if (value.three == true) {
        setDetails(3)
      } else if (value.four == true) {
        setDetails(4)
      } else if (value.five == true) {
        setDetails(5)
      }
    }
  }, [value])
  const handleClick = (e) => {
    setValue({ [e]: true })
  }
  return (<>
    <br></br>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="outlined" style={{ borderRadius: '50px', marginRight: '5PX', background: value?.one == true ? 'red' : 'gray', color: 'white' }} onClick={(e) => handleClick('one')}> 1</Button>
      <Button variant="outlined" style={{ borderRadius: '50px', marginRight: '5PX', background: value?.two == true ? 'red' : 'gray', color: 'white' }} onClick={(e) => handleClick('two')}>2</Button>
      <Button variant="outlined" style={{ borderRadius: '50px', marginRight: '5PX', background: value?.three == true ? 'red' : 'gray', color: 'white' }} onClick={(e) => handleClick('three')}>3</Button>
      <Button variant="outlined" style={{ borderRadius: '50px', marginRight: '5PX', background: value?.four == true ? 'red' : 'grey', color: 'white' }} onClick={(e) => handleClick('four')}>4</Button>
      <Button variant="outlined" style={{ borderRadius: '50px', marginRight: '5PX', background: value?.five == true ? 'red' : 'grey', color: 'white' }} onClick={(e) => handleClick('five')}>5</Button>
    </div>
    <br></br>
    <Card sx={{ display: 'flex', justifyContent: "center" }} style={{ margin: 'auto', width: 600 }} >

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">

            <br></br>{detail}.{ques[detail - 1]?.text}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {detail == 1 ? <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="que1" control={<Radio />} label={ques[0].option[0].text} />
        <FormControlLabel value="que2" control={<Radio />} label={ques[0].option[1].text} />
        <FormControlLabel value="que3" control={<Radio />} label={ques[0].option[2].text} />
        <FormControlLabel value="que4" control={<Radio />} label={ques[0].option[3].text} />
      </RadioGroup>:detail == 2?<TextField id="outlined-basic"  variant="outlined"  fullWidth/>:detail == 3?<RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="que1" control={<Radio />} label='true' />
        <FormControlLabel value="que2" control={<Radio />} label='false' />
      </RadioGroup>:detail == 4?<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="HTML" />
  <FormControlLabel disabled control={<Checkbox />} label="CSS" />
</FormGroup>:''}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" style={{ float: "left" }}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton aria-label="next">
            <SkipNextIcon />
          </IconButton>
        </Box>
      </Box>

    </Card>
  </>);
}