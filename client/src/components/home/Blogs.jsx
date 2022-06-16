import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Loading from "../designs/others/Loading";
import Posts from "./components/Posts";
import Content from "./components/Content";

function Blogs() {
  const [blog, setBlog] = useState([]);
  const [Load, setLoad] = useState(false);

  const fetchData = async (url) => {
    setLoad(true);
    const res = await axios.get(url);
    setLoad(false);
    setBlog(res.data);
  };

  useEffect(() => {
    fetchData("/post");
    console.log("useEffect running... at home page");
  }, []);

  return (
    <>
      <div className="pt-[8rem] pb-8 w-full min-h-screen bg-[#eeeeee]">
        <div className="container w-full h-full">
          <Content />
          {Load && <Loading />}
          <Posts data={blog} />
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Blogs;
