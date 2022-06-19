import { useContext } from "react";
import Avatar from "react-avatar";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../context/Context";

function Navbar() {
  const { user, dispatch } = useContext(Context);
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[88px] flex items-center justify-center z-[50] bg-white py-4">
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

              <NavLink to="/about">
                <p className="text-sm px-4 py-2 hover:bg-[#eeeeee]">About</p>
              </NavLink>

              {user && (
                <>
                  <NavLink to="/create">
                    <p className="text-sm px-4 py-2 hover:bg-[#eeeeee]">
                      Create
                    </p>
                  </NavLink>

                  <NavLink to="/profile">
                    <p className="text-sm px-4 py-2 hover:bg-[#eeeeee]">
                      Profile
                    </p>
                  </NavLink>
                </>
              )}
            </div>
          </div>

          {!user ? (
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
          ) : (
            <div className="flex items-center justify-end gap-4">
              {user?.data.profilePicture ? (
                <div className="w-[50px] h-[50px] rounded-full bg-black"></div>
              ) : (
                <>
                  <Avatar
                    name={user?.data.username}
                    size={40}
                    round={true}
                    textSizeRatio={2.5}
                  />

                  <p className="text-sm font-bold">{user?.data.username}</p>
                </>
              )}

              <p
                onClick={() => dispatch({ type: "LOGOUT" })}
                className="cursor-pointer text-sm px-4 py-2 font-medium bg-[#f4f4f4] hover:shadow-lg"
              >
                Log out
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
