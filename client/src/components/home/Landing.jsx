import { useState } from "react";
import Popup from "./components/Popup";

function Landing() {
  const [open, setOpen] = useState(false);

  const openPopup = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="w-full h-[60vh]">
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="background"
            src="https://images.unsplash.com/photo-1512580770426-cbed71c40e94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1207&q=80"
          />
        </div>
        <div className="container w-full h-full flex items-end py-16">
          <div className="max-w-lg text-white">
            <h1>
              Stay <span className="font-bold">Curious</span>.
            </h1>
            <p className="mb-8 max-w-[425px]">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <div
              onClick={openPopup}
              className="btn bg-white text-black cursor-pointer"
            >
              Start reading
            </div>
          </div>
        </div>
      </div>

      <Popup open={open} setOpen={setOpen} />
    </>
  );
}

export default Landing;
