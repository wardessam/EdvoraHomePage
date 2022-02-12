import Box from '@mui/material/Box';
import ProductFilter from './Products_filter';
import StateFilter from './State_Filter';
import CityFilter from './City_Filter';
import {useState} from 'react';
const Filters = ({product_,state_,city_}) => {
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
        
        <Box
         sx={{
            width: "50%",
            height: "300px",
            fontSize:'h5.fontSize',
            backgroundColor: '#131313',
            marginTop:"15%",
            marginLeft:"15%",
            borderRadius: "10px",
            
          }}
          >
              <div className="word">Filters</div>
              <div className="line"></div>
              <ProductFilter onSelectProduct={handle_product}/>
              <StateFilter product_name={product} onSelectState={handle_state}/>
              <CityFilter product_name={product} state={state} onSelectCity={handle_city} />
        </Box>
        
     );
}
 
export default Filters;
