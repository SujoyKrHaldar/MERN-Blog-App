import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-auto z-[50] bg-white py-4 shadow-md">
        <div className="container flex items-center justify-between gap-4">
          <Link to="/">
            <h1 className="text-[1.6rem] font-bold">React-Blog</h1>
          </Link>

          <div className="flex items-center justify-between gap-3">
            <NavLink to="/">
              <p className="text-[1rem] px-4 py-2 hover:bg-[#e1e1e1]">Home</p>
            </NavLink>

            <NavLink to="/stories">
              <p className="text-[1rem] px-4 py-2 hover:bg-[#e1e1e1]">
                Stories
              </p>
            </NavLink>

            <NavLink to="/create">
              <p className="text-[1rem] px-4 py-2 hover:bg-[#e1e1e1]">Create</p>
            </NavLink>

            <NavLink to="/about">
              <p className="text-[1rem] px-4 py-2 hover:bg-[#e1e1e1]">About</p>
            </NavLink>
          </div>

          <div className="">
            <NavLink to="/register">
              <p className="text-[1rem] px-6 py-3 bg-[#000000] text-white hover:bg-[#434343] font-bold">
                Get started
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
