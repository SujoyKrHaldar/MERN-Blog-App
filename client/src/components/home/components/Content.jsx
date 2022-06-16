import { Link } from "react-router-dom";

function Content() {
  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-8">
        <p>
          Latest <span className="font-bold">Posts</span>
        </p>

        <div className="flex items-center justify-end gap-4">
          <Link to="/stories">
            <p className="text-sm px-4 py-2 bg-[#ffffff] hover:shadow-lg">
              View all stories
            </p>
          </Link>
          <Link to="/create">
            <p className="text-sm px-4 py-2 hover:shadow-lg text-white bg-[#222222] ">
              Create new +
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Content;
