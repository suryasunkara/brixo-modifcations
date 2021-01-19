import Loader from 'react-loader-spinner';
import React from 'react';

 class Loaders extends React.Component {
    render() {
     return(
         <div className="container" style={{
                   width: "100%",
                   height: "100",
                  display: "flex",
                  opacity:0.8,
                  justifyContent: "center",
                   alignItems: "center",
                   position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" ,
                   
                   }}>
      <Loader
         type="ThreeDots"
         color="#333333"
         height={100}
         width={100}
        
 
      />
      </div>
     );
    }
 }
 export default Loaders;