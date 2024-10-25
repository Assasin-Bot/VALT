import BackHeader from "../layouts/BackHeader";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ConfirmPch from "../layouts/ConfirmPch";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState } from 'react'

const Purchase = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const unlisten = (() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);
    async function getCard() {
        // const response = await axios.get(`http://srv625873.hstgr.cloud:5000/getevent/${id}`).then((res)=>{
        const response = await axios.get(`http://srv625873.hstgr.cloud:5000/getevent/${id}`).then((res) => {
            setData(res.data);
        })
        console.log(response)
    }
    useEffect(() => {
        getCard();
    }, [])
    return (
        <div>
            <Header />
            <ConfirmPch {...data} />
            <div className="mt-24"><Footer /></div>
        </div>
    )
}

export default Purchase;