// src/components/__tests__/Login.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login";
import { AuthContext } from "../../contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";

describe("Login Component", () => {
  test("renders login form and inputs", () => {
    render(
      <AuthContext.Provider value={{ currentUser: null }}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("shows logged-in message when currentUser exists", () => {
    render(
      <AuthContext.Provider value={{ currentUser: { email: "test@example.com" } } as any}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText(/already logged in/i)).toBeInTheDocument();
  });
});
