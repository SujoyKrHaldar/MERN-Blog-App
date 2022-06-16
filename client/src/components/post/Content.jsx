import { Link } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";

function Content() {
  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-8">
        <p>
          All <span className="font-bold">Articles</span>
        </p>

        <Link to="/create">
          <div className="text-sm px-4 py-2 hover:shadow-lg text-white bg-[#222222] flex items-center justify-center gap-2">
            <div className="text-[0.7rem]">
              <BsPencilFill />
            </div>
            <p className="text-sm">Write your article</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Content;
