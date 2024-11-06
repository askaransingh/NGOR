import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Causes from "./pages/Causes";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Events from "./pages/Event";
import Login from "./pages/Login";
import UseGlobal from "./hooks/UseGlobal";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { AlertProvider } from "./AlertContext";
import AlertMessage from "./AlertMessage";
import { UserProvider } from "./UserContext";
import GALLERY from "./pages/GALLERY";
import AdminPanel from "./Adminpanel";
import UserList from "./UserList";

function App() {
  const { getUser } = UseGlobal();
  const [User, setUser] = useState(getUser());
  const [eventTitle, setEventTitle] = useState("");
  const [newsTitle, setnewsTitle] = useState("");
 
  const updateNewsTitle = useCallback((title) => {
    setnewsTitle(title);
    localStorage.setItem('newsTitle', title); // Store in local storage
}, []);

const requiredUid = "80A0kqpyKZXh3iScNqVWxijH2Do1";

  return (
      <AlertProvider>
        <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout User={User} setUser={setUser} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="causes" element={<Causes />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News newsTitle={newsTitle} setnewsTitle={updateNewsTitle} />} />
          <Route path="events" element={<Events eventTitle={eventTitle} setEventTitle={setEventTitle} />} />
          <Route path="GALLERY" element={<GALLERY/>} />


{/* 
          <Route 
                path="User List" 
                element={User  && User.uid === requiredUid ? (
                  <User List setEventTitle={setEventTitle} setnewsTitle={updateNewsTitle} />
                ) : (
                  <Navigate to="/" /> // Redirect to home if user doesn't have access
                )}
              /> */}


          <Route path="UserList" element={<UserList setEventTitle={setEventTitle} setnewsTitle={updateNewsTitle}/>} />
       
          <Route
            path="login"
            element={<Login User={User} setUser={setUser} />}
          />
         
        </Route>
      </Routes>
    

          <AlertMessage />
          {/* <AdminPanel/> */}
    </BrowserRouter>
    </UserProvider>

      </AlertProvider>
  );
}

export default App;
