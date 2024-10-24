import BackHeader from "../layouts/BackHeader";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ConfirmInv from "../layouts/ConfirmInv";
import { useEffect , useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


const Invite = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    async function  getCard(){
        // const response = await axios.get(`https://valt-be.onrender.com/getevent/${id}`).then((res)=>{
        const response = await axios.get(`https://valt-be.onrender.com/getevent/${id}`).then((res)=>{
            setData(res.data);
        })
        console.log(response)
    }

    useEffect(() => {
        getCard();
        const unlisten = (() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);
    return (
        <div>
            <Header/>
            <BackHeader/>
            <ConfirmInv {...data}/>
            <Footer />
        </div>
    )
}

export default Invite;