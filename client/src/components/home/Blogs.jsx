import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../designs/lists/Sidebar";
import Posts from "./components/Posts";

function Blogs() {
  const [blog, setBlog] = useState([]);

  const fetchData = async (url) => {
    const res = await axios.get(url);
    setBlog(res.data);
  };

  useEffect(() => {
    fetchData("/post");
  }, []);

  return (
    <>
      <div className="py-16 w-full h-auto">
        <div className="container w-full h-full">
          <h2 className="mb-2 pb-4 border-b-2 border-[#707070]">
            Latest <span className="font-bold">Posts</span>
          </h2>
          <div className="flex items-start justify-between gap-8 mt-8">
            <div className="flex-1">
              <Posts data={blog} />
            </div>
            <div className="flex-1 max-w-[435px]">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
