import { IoCreate } from "react-icons/io5";
import { useContext, useRef, useState } from "react";

function CreateForm() {
  const [loading, setLoading] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="mt-4 max-w-2xl" onSubmit={handelSubmit}>
        <div className="mb-4">
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm justify-center text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer bg-white font-medium text-black "
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="hidden"
                  />
                </label>
                {/* <p className="text-sm pl-1">or drag and drop</p> */}
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2 text-sm">Title</p>
          <input
            // ref={userRef}
            autoFocus={true}
            type="text"
            required
            className="appearance-none  relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          {/* <p className="text-sm text-red-600 mt-1">Enter valid Email.</p> */}
        </div>

        <div className="mb-4">
          <p className="mb-2 text-sm">Tell your story</p>
          <textarea
            // ref={userRef}
            rows={8}
            type="text"
            required
            className="appearance-none duration-75 relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          {/* <p className="text-sm text-red-600 mt-1">Enter valid Email.</p> */}
        </div>

        <button
          {...(loading && { disabled: true })}
          type="submit"
          className="group relative w-full flex items-center justify-center p-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-[#393939] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          {loading ? (
            <>
              <div className="animate-spin h-[15px] w-[15px] mr-2 border-2 border-white border-l-transparent rounded-full"></div>
              createing ...
            </>
          ) : (
            <>
              <div className="absolute left-0 inset-y-0 flex items-center pl-3 text-lg text-[#6f6f6f]">
                <IoCreate />
              </div>
              Create Post
            </>
          )}
        </button>
      </form>
    </>
  );
}

export default CreateForm;
