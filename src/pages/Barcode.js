 import Barcode from 'react-barcode';
import React from 'react';


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
  