import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-auto z-[50] bg-white py-4">
        <div className="container flex items-center justify-between gap-4">
          <div className="flex items-center justify-start gap-4">
            <Link to="/">
              <h1 className="text-xl font-bold">React-Blog</h1>
            </Link>

            <div className="flex items-center justify-between gap-3 ">
              <NavLink to="/">
                <p className="text-sm px-4 py-2 hover:bg-[#eeeeee]">Home</p>
              </NavLink>

              <NavLink to="/stories">
                <p className="text-sm px-4 py-2 hover:bg-[#eeeeee]">Stories</p>
              </NavLink>

              <NavLink to="/create">
                <p className="text-sm px-4 py-2 hover:bg-[#eeeeee]">Create</p>
              </NavLink>

              <NavLink to="/about">
                <p className="text-sm px-4 py-2 hover:bg-[#eeeeee]">About</p>
              </NavLink>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <Link to="/login">
              <p className="text-sm px-4 py-2 font-medium bg-[#f4f4f4] ">
                Log in
              </p>
            </Link>
            <Link to="/register">
              <p className="text-sm px-4 py-2 text-white bg-[#222222] ">
                Get started
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
