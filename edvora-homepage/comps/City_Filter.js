import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import {useState} from 'react';
import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';
const CityFilter = ({product_name,state}) => {
  
        const [city, setCity] =useState('');
        const handleChange = (event) => {
        setCity(event.target.value);
      };
      //if(product_name=='') return <div>Select Product First!</div>
      const fetcher = async (url) => await fetch(url).then((r) => r.json());
      const {data}  = useSWR('https://assessment-edvora.herokuapp.com/', fetcher);
      var d = data?.filter(obj => obj.product_name == product_name&&obj.address.state==state)
      const Unidata = [...new Map(d.map(item =>
        [item["address"]["city"], item])).values()];
        return (
            <Box
            sx={{
                fontSize:'h5.fontSize',
                backgroundColor: '#232323',
                color:'white',
                margin:"5%",
                borderRadius: "10px",
              }}>
          <FormControl fullWidth>
            <InputLabel id="citieslabel" style={{color:'white'}}>City</InputLabel>
            <Select
              labelId="citieslabel"
              id="city"
              value={city}
              onChange={handleChange}
              label="City"
              sx={{
                  color:'white',
                  "& .MuiSvgIcon-root": {
                    color: "white",
                },
              }}
            >
              
              {Unidata&&Unidata.map(p =>(<MenuItem value={p.address.city} key={p.address.city}>{p.address.city}</MenuItem>))}
            </Select>
          </FormControl>
          </Box>
      );
}
 
export default CityFilter;