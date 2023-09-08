// import React, { useState } from 'react';
// import Axios from "axios";
// import { useNavigate } from "react-router-dom";
// import './Login.css'
// import Food7 from "../Images/Food7.jpg";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import Modal from "react-modal";
// // Modal.setAppElement("#root");

// function App() { 
//   //----------------------------
//   const navigate = useNavigate();
//   const [data, setData] = useState({ email: "", password:"" });

//   const changeHandler = (t) => {
//     let name1 = t.target.name;
//     let val = t.target.value;
//     setData({ ...data, [name1]: val });
//   };

//   const submitHandler = async (t) => {
//     t.preventDefault();
//     try{
//    const tdata = await Axios.post("http://localhost:3500/login", { ...data });
//    const { status, data: response } = tdata;
//    const message = response.msg;
//       console.log(message);
//       if (status !== 201) {
//         alert("Login Sucessful");
//         setTimeout(() => {
//           navigate("/");
//         }, 1000);
//       } else {
//         console.log("error");
//       }
//     } catch (error) {
//       console.log(error);
//       alert(error.response.data.msg);
//     }
//   //-------------------------------------------------
//   //  .then((res) => {
//   //     let ack = res.data;
//   //     if (ack === "success") {
//   //       alert("data inserted successfully");
//   //     } else {
//   //       alert("data not inserted");
//   //     }
//   //   });
//   };

//   return (
//     <div className="App">
//       <div className="account-page">
//         <div className="container text-center">
//           <div className="row">
//             <div className="col">
//               <img src={Food7} alt="First slide" />
//             </div>
//             <div className="col-4"> 
//               <div className="form-container">
//                 <div className="form-btn">
//                   <span >Login</span>
                 
//                 </div>
              
//                   <form action="POST" id="LoginForm" onSubmit={submitHandler}>   
//                     <input type="text"  name="email" placeholder="Email"  value={data.email} onChange={changeHandler}  />
//                     <input type="password" value={data.password} name="password" onChange={changeHandler} placeholder="Password" />
//                     <button type="Submit" className="btn btn-dark ms-auto px-4 rounded-pill" >Login</button>
//                     <a href="/">Forgot Password</a>
                    
//                   </form>
               
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "../Components/Login.css"
import 'bootstrap/dist/css/bootstrap.min.css';


 const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        
        <div className="form-container">
        <h2>Login</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
       
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
           <button type="submit" className="btn btn-dark ms-auto px-3 rounded-pill" >Login</button>
        </div>
       
      </form>
    </div>
  );
};


export default Login;
