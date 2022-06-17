import { HiLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <form className="mt-4">
        <div className="mb-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none  relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
          {/* <p className="text-sm text-red-600 mt-1">Enter valid Email.</p> */}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none  relative block w-full p-3  border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
          {/* <p className="text-sm text-red-600 mt-1">Enter valid password.</p> */}
        </div>

        <div className="flex items-center justify-start gap-1 mb-4">
          <p className="text-sm">Don't have an account? </p>
          <Link
            to="/register"
            className=" text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </div>

        <button
          type="submit"
          className="group relative w-full flex justify-center p-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-[#393939] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <div className="absolute left-0 inset-y-0 flex items-center pl-3 text-lg text-[#6f6f6f]">
            <HiLockClosed />
          </div>
          Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
