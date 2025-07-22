// src/components/NavBar.tsx
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
      <Link to="/cart">Cart</Link> | <Link to="/orders">Orders</Link> |{" "}
      {currentUser ? (
        <>
          <span>Welcome, {currentUser.email}</span>{" "}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
