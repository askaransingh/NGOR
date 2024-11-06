import React, { useEffect, useState } from "react";
import LoggedIn from "../components/LoggedIn";
import SignUp from "../components/SignUp";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider,db } from "../config/firebase";
import { useNavigate } from "react-router-dom";
// import { doc, setDoc } from "firebase/firestore";
const Login = ({ User, setUser }) => {
  const [current, setcurrent] = useState({ session: null });
  // const axiosInstance = axios.create({
  //   withCredentials: true,
  // });
  const navigate = useNavigate();
  // const signInWithGoogle = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, googleProvider);
  //     const user = result.user;
  //     setUser(user); // Set the authenticated user
  //     navigate("/");
  //     console.log("User info: ", user);
  //   } catch (error) {
  //     console.error("Error during Google login: ", error);
  //   }
  // };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   const checkSession = async () => {
  //     const res = await axios.get("http://localhost:8000/user/login", {
  //       withCredentials: true,
  //     });
  //     setcurrent(res.data);
  //     setUser(res.data.session);
  //     console.log(res.data, "fnfdfjnfjdnfjfdjfdjfdbdjfdfjj");
  //   };
  //   checkSession();
  // }, []);

  return (
    <div className="flex flex-col mb-20">
     
      {User && User.username ? (
        <LoggedIn setUser={setUser} user={User} />
      ) : (
        <SignUp setUser={setUser} setcurrent={setcurrent} />
      )}
      
    </div>
  );
};

export default Login;
