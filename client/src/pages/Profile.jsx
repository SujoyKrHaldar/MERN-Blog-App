import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import { Context } from "../context/Context";

function Profile() {
  const { user } = useContext(Context);
  return (
    <Layout>
      <div className="container py-[8rem]">
        <h1>Welcome {user?.data.username}</h1>
      </div>
    </Layout>
  );
}

export default Profile;
