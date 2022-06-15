import { useEffect, useState } from "react";
import Moment from "react-moment";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Layout from "../../components/layout/Layout";

function StoryById() {
  const location = useLocation();

  const url = location.pathname.split("/")[2];

  const [story, setStory] = useState([]);

  const fetchData = async (url) => {
    const res = await axios.get(url);
    setStory(res.data);
  };

  useEffect(() => {
    fetchData("/post/" + url);
    console.log("useEffect running..." + url);
  }, [url]);

  return (
    <>
      <Layout>
        <div className="container w-full h-screen py-[8rem]">
          {story.photo && (
            <div className="w-full h-[250px] bg-white ">
              <img
                src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
                alt="blog"
              />
            </div>
          )}
          <h2 className="font-bold mb-4">{story.title}</h2>
          <p>{story.desc}</p>

          <p className="mt-8  text-base">by</p>
          <p className="font-bold">{story.username}</p>
          <p>
            <Moment format="MMM Do YY">{story.createdAt}</Moment>
          </p>
        </div>
      </Layout>
    </>
  );
}

export default StoryById;
