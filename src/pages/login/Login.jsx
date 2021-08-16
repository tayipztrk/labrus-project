import { useRef, useState, useEffect } from "react";
import "./login.css";
//import { Link } from "react-router-dom";
import axios from "axios";

export default function Login({ setUser }) {
  const email = useRef();
  const password = useRef();
  const [userData, setUserData] = useState("");

  const checkUser = async () => {
    await axios
      .post(
        "https://api.ziyuno.com/api/auth/login/en",
        {
          mail: email.current.value, //varEmail is a variable which holds the email
          password: password.current.value,
        },
        {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      )
      .then(function (response) {
        setUserData(response.data);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    checkUser();
    //console.log(data);
  };
  useEffect(() => {
    //console.log(userData);
    //  user = (userData?.result?.user) == null ? {} : {...userData?.result?.user}
    // console.log(user); userData?.result?.user) = null ? false :
    setUser(userData?.result?.user === "" ? "" : { ...userData?.result?.user });
  }, [userData]);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Labrus Project</h3>
          <span className="loginDesc">
            This project made by Tayip Öztürk for Labrus.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <span className="loginSpan">Email</span>
            <input
              placeholder="Email"
              className="loginInput"
              type="email"
              required
              ref={email}
            />
            <span className="loginSpan">Password</span>
            <input
              placeholder="Password"
              className="loginInput"
              type="password"
              required
              ref={password}
            />
            <button className="loginButton" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
