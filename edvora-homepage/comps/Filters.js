import Box from '@mui/material/Box';
import FilterDropDown from './Products_filter';
const Filters = () => {
    
    return ( 
        
        <Box
         sx={{
            width: "50%",
            height: "15%",
            fontSize:'h5.fontSize',
            backgroundColor: '#131313',
            marginTop:"15%",
            marginLeft:"15%",
            borderRadius: "10px",
            
          }}
          >
              <div className="word">Filters</div>
              <div className="line"></div>
              <FilterDropDown/>
        </Box>
        
     );
}
 
export default Filters;
