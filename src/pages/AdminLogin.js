// /src/pages/AdminLogin.jsx

import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const ADMIN_EMAIL = "manojmamillapalli156@gmail.com";
const FIREBASE_CONSOLE_URL =
  "https://console.firebase.google.com/project/techstorieswithmanojnaid-bf686/overview?fb_gclid=CjwKCAjw7rbEBhB5EiwA1V49nTlaY06QymOrSApdOXU0n5xo91w0ruGl4NBO1DE5hvIWZXww4gq1IxoCel4QAvD_BwE";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      if (userCred.user.email !== ADMIN_EMAIL) {
        setError("Access denied: Only admin allowed.");
        return;
      }
      // navigate("/", { replace: true }); // Go to main page

      // setTimeout(() => {
      //   const el = document.getElementById("techblog");
      //   if (el) el.scrollIntoView({ behavior: "smooth" });
      // }, 100);
      // Successful admin login — redirect to Firebase Console (external URL)
      window.location.href = FIREBASE_CONSOLE_URL;
    } catch (err) {
      setError("Invalid User Credentials, please try again.");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <img src="/backgroundLogin.jpg" alt="background" className="admin-bg-image" />
      <form onSubmit={handleLogin} className="admin-login-form">
        <h2>Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
