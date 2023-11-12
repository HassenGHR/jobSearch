import React from "react";
import Link from "next/link";
import Layout from "../Components/Layout/Layout";
import Login from "../Components/Auth/Login";

const LoginPage = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default LoginPage;
