import Head from 'next/head'
import Image from 'next/image'
import Filters from "../comps/Filters";
import Product from "../comps/Product_Comp";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import {useState} from 'react';
export const getStaticProps = async()=>{
  const res = await fetch('https://assessment-edvora.herokuapp.com');
  const data = await res.json();
  const Unidata = [...new Map(data.map(item =>
    [item["product_name"], item])).values()];
  return {
    props: {Allproducts:data, Uniproducts:Unidata}
  }
}
export default function Home({Allproducts,Uniproducts}) {
    const [product, setProduct] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const handle_product = (pro) =>{
      setProduct(pro);
      }
    const handle_state = (state) =>{
      setState(state);
     }
    const handle_city =(city)=>{
      setCity(city);
    }
  return (
    <Grid container >
        <Grid item xs={2}>
          <Filters product_={handle_product} state_={handle_state} city_={handle_city}/>
        </Grid>
        <Grid item xs={10} style={{paddingBottom: '50px'}}>
         <div className='homeword_edvora'> Edvora </div>
          <div className='homeword_products'>Products</div>
          <div style={{display:'inline'}}>
            
          {Uniproducts.map(p => 
          (
            <>
           <div key={p.product_name} className='productName'>{p.product_name}</div>
           <div className='line'></div>
           <Box sx={{ width:'auto', bgcolor: '#131313',
           "& .MuiSvgIcon-root": {
            color: "white",fontSize:"4rem"} }}>
           <Tabs
             variant="scrollable"
            scrollButtons="auto"
            value={0}>
           
            {Allproducts.map(
              element => element.product_name===p.product_name&&(
                <Product img={element.image} product_name={element.product_name} brand_name= {element.brand_name}
                price={element.price} state={element.address.state} city= {element.address.city}
                date= {element.date} desc= {element.discription}/>
              ))}
             
             </Tabs>
             </Box>
           </>
          ))}
          </div>
        </Grid>
    
     
    </Grid>
  )
}
