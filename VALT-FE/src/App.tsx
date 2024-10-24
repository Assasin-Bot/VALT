import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './layouts/Header';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Footer from './layouts/Footer';
import Eventlist from './layouts/Eventlistbar';
import Invite from './pages/Invite';
import Purchase from './pages/Purchase';
import Complete from './pages/Complete';
import Addevent from './pages/Add_event';
import AdminHome from './pages/Admin/AdminHome';
import Addorganizers from './pages/Add_organizer';
import Organizers from "./pages/Admin/Organizers";
import Report from "./pages/Admin/Report";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/invite/:id" element={<Invite/>} />
        <Route path="/purchase/:id" element={<Purchase/>} />
        <Route path="/complete/:id" element={<Complete/>} />
        <Route path="/admin/addevent" element={<Addevent/>} />
        <Route path="/admin" element={ <AdminHome />}/>
        <Route path="/admin/organizer" element={ <Organizers />}/>
        <Route path="/admin/report" element={ <Report />}/>
        <Route path="/admin/addorganizer" element={ <Addorganizers />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
