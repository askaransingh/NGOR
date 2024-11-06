// import axios from "axios";
// import { signInWithPopup } from "firebase/auth";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, googleProvider, db } from "../config/firebase";
// import { doc, setDoc } from "firebase/firestore";

// const SignUp = ({ setUser, setcurrent }) => {
//   const [name, setname] = useState("");
//   const [username, setusername] = useState("");
//   const [state, setstate] = useState("");
//   const [phone, setphone] = useState("");
//   const [address, setaddress] = useState("");
//   const [password, setpassword] = useState("");
//   const [city, setcity] = useState("");
//   const [email, setemail] = useState("");
//   const [True, setTrue] = useState(true);
//   const navigate = useNavigate();

//   const signInWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       // Save user data to Firestore
//       const userRef = doc(db, "users", user.uid);  // Create a document reference for the user
//       await setDoc(userRef, {
//         uid: user.uid,
//         displayName: user.displayName,
//         email: user.email,
//         photoURL: user.photoURL,
//         lastLogin: new Date()  // Track when the user last logged in
//       }, { merge: true });  // Merge will avoid overwriting existing data

//       // Set the authenticated user in state
//       navigate("/");
//       setUser(user);
//       console.log("User info saved in Firestore: ", user);
//     } catch (error) {
//       console.error("Error during Google login or Firestore save: ", error);
//     }
//   };

//   return (
//     <div>
//       {True ? (
//         <div className="flex  flex-col mb-10 items-center justify-center mt-10">
//           <div className="flex flex-col w-[98%] md:w-[50%] xl:w-[40%] pb-5 justify-between items-center border-2 lg:p-4 pt-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] gap-10">
//             <div className="flex flex-col w-full items-center gap-5">
//               <h1 className="text-red-500 font-bold text-3xl">LOGIN</h1>

//               <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
//                 User Name:{" "}
//                 <input
//                   type="text"
//                   className="border-2 px-1 py-2 text-black font-sans border-black"
//                   value={username}
//                   onChange={(e) => {
//                     setusername(e.target.value);
//                   }}
//                   required
//                 />
//               </div>

//               <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
//                 Password:{" "}
//                 <input
//                   type="password"
//                   required
//                   value={password}
//                   onChange={(e) => {
//                     setpassword(e.target.value);
//                   }}
//                   className="border-2 px-1 py-2 text-black font-sans border-black"
//                 />
//               </div>
//             </div>
//             <div className="flex gap-5">
//               <button onClick={s}>Log in</button>
//               <button onClick={signInWithGoogle}>Sign in with Google</button>
//               <button
//                 onClick={() => {
//                   setTrue(!True);
//                 }}
//                 className="bg-red-600"
//               >
//                 Create Account
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="flex flex-col mb-10 items-center justify-center mt-10">
//           <div className="flex flex-col w-[98%] md:w-[50%] xl:w-[40%] pb-5 justify-between items-center border-2 lg:p-4 pt-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)]  gap-10">
//             <div className="flex flex-col w-full items-center gap-5">
//               <h1 className="text-red-500 font-bold text-3xl">Register</h1>
//               <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
//                 Name:{" "}
//                 <input
//                   type="text"
//                   className="border-2 px-1 py-2 text-black font-sans border-black"
//                   value={name}
//                   required
//                   onChange={(e) => {
//                     setname(e.target.value);
//                   }}
//                 />
//               </div>
//               <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
//                 User Name:{" "}
//                 <input
//                   type="text"
//                   className="border-2 px-1 py-2 text-black font-sans border-black"
//                   value={username}
//                   required
//                   onChange={(e) => {
//                     setusername(e.target.value);
//                   }}
//                 />
//               </div>

//               <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
//                 Email:{" "}
//                 <input
//                   type="text"
//                   className="border-2 px-1 py-2 text-black font-sans border-black"
//                   value={email}
//                   onChange={(e) => {
//                     setemail(e.target.value);
//                   }}
//                   required
//                 />
//               </div>

//               <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
//                 Password:{" "}
//                 <input
//                   value={password}
//                   required
//                   onChange={(e) => {
//                     setpassword(e.target.value);
//                   }}
//                   type="password"
//                   className="border-2 px-1 py-2 text-black font-sans border-black"
//                 />
//               </div>

//               <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
//                 address:{" "}
//                 <input
//                   type="text"
//                   className="border-2 px-1 py-2 text-black font-sans border-black"
//                   value={address}
//                   required
//                   onChange={(e) => {
//                     setaddress(e.target.value);
//                   }}
//                 />
//               </div>

//               <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
//                 City:{" "}
//                 <input
//                   type="text"
//                   className="border-2 px-1 py-2 text-black font-sans border-black"
//                   value={city}
//                   required
//                   onChange={(e) => {
//                     setcity(e.target.value);
//                   }}
//                 />
//               </div>

//               <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
//                 State:{" "}
//                 <input
//                   type="text"
//                   className="border-2 px-1 py-2 text-black font-sans border-black"
//                   value={state}
//                   required
//                   onChange={(e) => {
//                     setstate(e.target.value);
//                   }}
//                 />
//               </div>

//               <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
//                 Phone:{" "}
//                 <input
//                   type="text"
//                   className="border-2 px-1 py-2 text-black font-sans border-black"
//                   value={phone}
//                   required
//                   onChange={(e) => {
//                     setphone(e.target.value);
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col xs:flex-row justify-center items-center gap-5">
//               <button
//                 onClick={() => {
//                   Register();
//                 }}
//               >
//                 Register
//               </button>
//               <button
//                 onClick={() => {
//                   setTrue(!True);
//                 }}
//                 className="bg-red-600"
//               >
//                 Already Have An account?
//               </button>
//               <button onClick={signInWithGoogle}>Sign in with Google</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignUp;
// import axios from "axios";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, db } from "../config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAlert } from "../AlertContext";
// import { useContext } from "react";
import UserContext from "../UserContext";

const SignUp = ({ setcurrent }) => {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [state, setstate] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  const [email, setemail] = useState("");
  const [True, setTrue] = useState(true);
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState('');
  const { showAlert } = useAlert();
  const { setUser } = useContext(UserContext);
  const signInWithGoogle = async () => {

    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save user data to Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL,
      });
      setUser({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
      // Set the authenticated user in state
      navigate("/");
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      console.log("User info saved in Firestore: ", user);
      setLoginMessage(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Error during Google login or Firestore save: ", error);
      setLoginMessage("Error during Google login.");

    }
  };
  const Register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user data to Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          uid: user.uid,
          displayName: name, // You can save the name here
          username: username,
          email: email,
          phone: phone,
          address: address,
          city: city,
          state: state,
          lastLogin: new Date(), // Track when the user registered
        },
        { merge: true }
      ); // Merge will avoid overwriting existing data

      // Set the authenticated user in state
      navigate("/");
      setUser(user);
      console.log("User registered and info saved in Firestore: ", user);
      setLoginMessage(`Welcome, ${name}! You have registered successfully.`);
    } catch (error) {
      console.error("Error during registration: ", error);
    //  alert("Error during registration ");
    setLoginMessage("Error during registration.");
    }
  };

 
  const Login = async () => {
    try {
      // Trim email and password
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();

      // Validate email format
      if (!trimmedEmail || !/\S+@\S+\.\S+/.test(trimmedEmail)) {
       setLoginMessage("Invalid email format");
        return; // Early return if the email is invalid
      }

      // Attempt to log in the user
      const userCredential = await signInWithEmailAndPassword(
        auth,
        trimmedEmail,
        trimmedPassword
      );
      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);
  
      // Further processing, like saving user info to Firestore...
      showAlert("Login successful!");
      setLoginMessage(`Welcome, ${user.displayName || trimmedEmail}!`);
      navigate("/");
      console.log("User logged in: ", user);
    } catch (error) {
      showAlert("Error during login.");
      console.error("Error during login: ", error);
      setLoginMessage('Error logging in. Please check your credentials.');
    }
  };
  useEffect(() => {
    if (loginMessage) {
      const timer = setTimeout(() => setLoginMessage(''), 5000);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [loginMessage]);
  return (
    <div>
      {/* {loginMessage && <p className="text-red-600">{loginMessage}</p>} */}
      {loginMessage && (
        <div className="fixed top-0 left-0 w-full bg-red-600 text-white py-3 text-center z-50">
          {loginMessage}
        </div>
      )}
      {True ? (
        <div className="flex flex-col mb-10 items-center justify-center mt-10">
          <div className="flex flex-col w-[98%] md:w-[50%] xl:w-[40%] pb-5 justify-between items-center border-2 lg:p-4 pt-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] gap-10">
            <div className="flex flex-col w-full items-center gap-5">
              <h1 className="text-red-500 font-bold text-3xl">LOGIN</h1>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Email :{" "}
              
                <input
                  type="email"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Password:{" "}
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <button onClick={Login}>Log in</button>
              <button onClick={signInWithGoogle}>Sign in with Google</button>
              <button onClick={() => setTrue(!True)} className="bg-red-600">
                Create Account
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mb-10 items-center justify-center mt-10">
          <div className="flex flex-col w-[98%] md:w-[50%] xl:w-[40%] pb-5 justify-between items-center border-2 lg:p-4 pt-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] gap-10">
            <div className="flex flex-col w-full items-center gap-5">
              <h1 className="text-red-500 font-bold text-3xl">Register</h1>
              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Name:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={name}
                  required
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                User Name:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={username}
                  required
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Email:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Password:{" "}
                <input
                  value={password}
                  required
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Address:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={address}
                  required
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                City:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={city}
                  required
                  onChange={(e) => setcity(e.target.value)}
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                State:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={state}
                  required
                  onChange={(e) => setstate(e.target.value)}
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Phone:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={phone}
                  required
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col xs:flex-row justify-center items-center gap-5">
              <button onClick={Register}>Register</button>
              <button onClick={signInWithGoogle}>Sign in with Google</button>
              <button onClick={() => setTrue(!True)} className="bg-red-600">
                Already Have An account?
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;




