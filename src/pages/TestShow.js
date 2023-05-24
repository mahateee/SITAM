import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "../component/Sidebar";
import { Link, useParams } from 'react-router-dom';
export default function TestShow() {
    const { id } = useParams();
    const [assets, setAssets] = useState([]);
    useEffect(() => {
        axios
            .get(`/Asset/show/${id}`)
            .then((response) => {
                setAssets(response.data)
                console.log(response.data)
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <div>TestShow ?
            
                <div >
                    <h2>{assets.Assets}</h2>
                    <h2>{assets.Status}</h2>
                    <h2>{assets.SerialNumber}</h2>

                </div>
      
        </div>
    )
}
