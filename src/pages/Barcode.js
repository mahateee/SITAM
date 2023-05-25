 import Barcode from 'react-barcode';
import React from 'react';

//  Barcode(props){
//     return(


// <div className="App">
//       <Barcode value="1234567890" format="CODE128" />
    
// </div>
//     );

// }
//  export default Barcode;

function BarcodeComponent(assetID) {
  // const assetID = {asset.AssetID}
  const assetIdString = JSON.stringify(assetID);
    return (
      <div className="App">
        <Barcode value={assetIdString} format="CODE128" />
      </div>
    );
  }
  
  export default BarcodeComponent;
  