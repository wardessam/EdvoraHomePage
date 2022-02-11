import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import {useState,useEffect} from 'react';
import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';
import StateFilter from './State_Filter';



const FilterDropDown = () => {
    const [productName, setProductName] =useState('');
    const handleChange = (event) => {
    setProductName(event.target.value);
  };
  const fetcher = async (url) => await fetch(url).then((r) => r.json());
  const {data, error}  = useSWR('https://assessment-edvora.herokuapp.com/', fetcher);
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  
  const Unidata = [...new Map(data.map(item =>
    [item["product_name"], item])).values()];
    return ( 
        <>
        <Box
        sx={{
            fontSize:'h5.fontSize',
            backgroundColor: '#232323',
            color:'white',
            margin:"5%",
            borderRadius: "10px",
          }}>
      <FormControl fullWidth>
        <InputLabel id="productslabel" style={{color:'white'}}>Products</InputLabel>
        <Select
          labelId="productslabel"
          id="product"
          value={productName}
          onChange={handleChange}
          label="Product"
          sx={{
              color:'white',
              "& .MuiSvgIcon-root": {
                color: "white",
            },
          }}
        >
       
          {Unidata&&Unidata.map(p =>(<MenuItem value={p.product_name} key={p.product_name}>{p.product_name}</MenuItem>))}
          {console.log("Data:"+data.length)}
          {console.log("Uni:"+Unidata.length)}
        </Select>
      </FormControl>
      </Box>
      <StateFilter product_name={productName}/>
      </>
     );
}
 
export default FilterDropDown;