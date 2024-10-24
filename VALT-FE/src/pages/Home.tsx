import Header from "../layouts/Header";
import BackHeader from "../layouts/Header";
import Card from "../Elements/card";
import TextSection from "../Elements/TextSection";
import MainCpn from "../Elements/MainCpn";
import Footer from "../layouts/Footer";
import Eventlistbar from "../layouts/Eventlistbar";
import Eventlist from "../layouts/Eventlist";
import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        const unlisten = (() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);

    return (
        <>
            {/* <Header/> */}
            <BackHeader/>
            <Eventlistbar />    
            <Eventlist />
            <Footer/>
        </>
    )
}

export default Home;