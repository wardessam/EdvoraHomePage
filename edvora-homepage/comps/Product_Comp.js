import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
const Product = (props) => {

    return (
   
    <div key={props.img} >
        <Box
        sx={{
           width: "auto",
           height: "50%",
           backgroundColor: '#232323',
           borderRadius: "10px",
           p:7,
           m:6
         }}
         >
    <Grid container>
        <Grid item xs={4}>
          <img src={props.img} width={75} height={75}/>
        </Grid>
        <Grid item xs={8}>
         <div className='dataproductName'> {props.product_name}</div>
         <div className='restofdataproductName'>{props.brand_name} </div>
         <div className='dataproductName'>Price: $ {props.price}</div>
        </Grid>
        <Grid item xs={12}>
         <div className='restofdataproductName'> Location: {props.state} {props.city}</div>
         <div className='restofdataproductName'>Date: {props.date}</div>
         <div className='restofdataproductName'>Description: {props.desc}</div>
        </Grid>
        </Grid>

    
    </Box>

        </div>
       
     );
}
 
export default Product;