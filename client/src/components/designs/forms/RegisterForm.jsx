import { useState } from "react";
import axios from "axios";
import { HiLockClosed } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setmsg] = useState("");
  const [error, setError] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });

      setLoading(false);
      setmsg(res.data.message);
      setTimeout(() => {
        setmsg(" Redirect to Login ...");
      }, 2000);

      setTimeout(() => {
        navigate("/login");
      }, 3000);

      // console.log(res);
    } catch (err) {
      setLoading(false);

      setError(err.message);

      setTimeout(() => {
        setError("");
      }, 3000);

      // console.log(err);
    }

    setUsername(" ");
    setPassword(" ");
    setEmail(" ");
  };

  return (
    <>
      <form className="mt-4" onSubmit={handelSubmit}>
        <div className="mb-4">
          <p className="mb-2 text-sm">Username</p>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            autoComplete="username"
            required
            className="appearance-none  relative block w-full p-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          {/* <p className="text-sm text-red-600 mt-1">Enter valid Username.</p> */}
        </div>

        <div className="mb-4">
          <p className="mb-2 text-sm">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="appearance-none  relative block w-full p-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          {/* <p className="text-sm text-red-600 mt-1">Enter valid Email.</p> */}
        </div>

        <div className="mb-4">
          <p className="mb-2 text-sm">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            className="appearance-none  relative block w-full p-2  border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          {/* <p className="text-sm text-red-600 mt-1">Enter valid password.</p> */}
        </div>

        <div className="flex items-center justify-start gap-1 mb-4">
          <p className="text-sm">Already have an account? </p>
          <Link
            to="/login"
            className=" text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Log in
          </Link>
        </div>

        <button
          {...(loading && { disabled: true })}
          type="submit"
          className="group relative w-full flex items-center justify-center p-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-[#393939] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          {loading ? (
            <>
              <div className="animate-spin h-[15px] w-[15px] mr-2 border-2 border-white border-l-transparent rounded-full"></div>
              Please wait ...
            </>
          ) : (
            <>
              <div className="absolute left-0 inset-y-0 flex items-center pl-3 text-lg text-[#6f6f6f]">
                <HiLockClosed />
              </div>
              Register
            </>
          )}
        </button>
        {msg && (
          <p className="mt-2 font-medium text-green-600 text-sm">{msg}</p>
        )}
        {error && (
          <p className="mt-2 font-medium text-red-600 text-sm">{error}</p>
        )}
      </form>
    </>
  );
}

export default RegisterForm;
