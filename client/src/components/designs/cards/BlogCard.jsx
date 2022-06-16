import { Link } from "react-router-dom";
import { CgSearchLoading } from "react-icons/cg";
import Moment from "react-moment";

function BlogCard({ data }) {
  return (
    <>
      <div className=" bg-white shadow-sm hover:shadow-lg  border-[1px] hover:border-[#dadada]">
        <div className="w-full h-[160px] bg-black">
          {data?.photo ? (
            <img
              src="https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt="blog"
            />
          ) : (
            <div className="text-white animate-pulse  w-full h-full flex items-center justify-center text-3xl">
              <CgSearchLoading />
            </div>
          )}
        </div>

        <div className="p-4">
          <p className="text-base mb-2 font-bold">{data.title}</p>
          <p className="text-sm mb-2 max-w-[350px]">
            {data.desc.length > 95 ? data.desc.slice(0, 95) + "..." : data.desc}
            {}
          </p>
          <p className="text-sm mb-4">
            <i>
              by <span className="font-medium">{data.username}</span>
            </i>
          </p>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <Link to={`/stories/${data._id}`}>
              <p className="text-[0.9rem] font-bold">Read more</p>
            </Link>

            <p className="text-sm">
              <Moment format="MMM Do YY">{data.createdAt}</Moment>
              {/* or {new Date(data.createdAt).toDateString()} */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
