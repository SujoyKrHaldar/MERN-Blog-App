import { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import Moment from "react-moment";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/designs/others/Loading";
import Layout from "../../components/layout/Layout";

function StoryById() {
  const location = useLocation();
  const navigate = useNavigate();
  const url = location.pathname.split("/")[2];

  const [story, setStory] = useState([]);
  const [Load, setLoad] = useState(false);

  const fetchData = async (url) => {
    setLoad(true);
    const res = await axios.get(url);
    setStory(res.data);
    setLoad(false);
  };

  useEffect(() => {
    fetchData("/post/" + url);
    console.log("useEffect running..." + url);
  }, [url]);

  return (
    <>
      <Layout>
        <div className="container w-full h-screen py-[8rem] bg-[#eeeeee]">
          <div
            onClick={() => navigate(-1)}
            className="mb-4 max-w-fit cursor-pointer px-4 py-2 hover:shadow-lg bg-[#ffffff] flex items-center justify-center gap-2 "
          >
            <div className="text-[0.7rem]">
              <IoChevronBackOutline />
            </div>
            <p className="text-sm">Go back</p>
          </div>

          {Load && <Loading />}

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
