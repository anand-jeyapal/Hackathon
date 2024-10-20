import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FeatureSelect(props) {

  const [selectedValue, setSelectedValue] = React.useState((props.selectedValue));
  
  React.useEffect(() => {setSelectedValue(props.selectedValue)}, [props.selectedValue])
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const options = props.options.map(
    (option) => <MenuItem key = {option} value={option}>{option}</MenuItem>)
  
    return (
    <Box sx={{ m:1 , minWidth: "10%"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label={props.label}
          onChange={handleChange}
        >
         {options}
        </Select>
      </FormControl>
    </Box>
  );
}