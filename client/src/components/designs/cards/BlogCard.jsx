import { Link } from "react-router-dom";
import { CgSearchLoading } from "react-icons/cg";
import Moment from "react-moment";

function BlogCard({ data }) {
  return (
    <>
      <div
        className="flex items-center justify-start gap-4 mb-8 last:mb-0 
      hover:bg-white duration-200 hover:shadow-xl hover:scale-105 
      border-[1px] border-[#bcbcbc] hover:border-black"
      >
        <div className="flex-1 w-full max-w-[200px] h-[250px] bg-black ">
          {data?.photo ? (
            <img
              src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
              alt="blog"
            />
          ) : (
            <div className="text-white animate-pulse  w-full h-full flex items-center justify-center text-3xl">
              <CgSearchLoading />
            </div>
          )}
        </div>

        <div className="p-8 flex-1">
          <p className="text-2xl mb-2 font-bold">{data.title}</p>
          <p className="text-[1rem] mb-2 max-w-[350px]">
            {data.desc.length > 95 ? data.desc.slice(0, 95) + "..." : data.desc}
            {}
          </p>
          <p className="text-[1rem] mb-4">
            by <span className="font-bold">{data.username}</span> ,{" "}
            <span>
              <Moment format="MMM Do YY">{data.createdAt}</Moment>
              {/* or {new Date(data.createdAt).toDateString()} */}
            </span>
          </p>
          <Link to={`/stories/${data._id}`}>
            <p className="text-[0.9rem] font-bold">Read more</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
