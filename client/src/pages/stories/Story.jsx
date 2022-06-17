import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/designs/others/Loading";
import BlogCard from "../../components/designs/cards/BlogCard";
import Content from "../../components/post/Content";

function Story() {
  const [blog, setBlog] = useState([]);
  const [Load, setLoad] = useState(false);

  const fetchData = async (url) => {
    setLoad(true);
    const res = await axios.get(url);
    setBlog(res.data);
    setLoad(false);
  };

  useEffect(() => {
    fetchData("/post");
    console.log("useEffect running... at home page");
  }, []);

  return (
    <>
      <Layout>
        <div className="pt-[8rem] pb-8 w-full min-h-screen bg-[#eeeeee]">
          <div className="container w-full h-full">
            <Content />
            {Load && <Loading />}
            <div className="grid grid-cols-4 gap-4">
              {blog.map((item) => (
                <BlogCard key={item._id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Story;
