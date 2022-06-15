import { Link, useNavigate } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";

function Popup({ open, setOpen }) {
  const navigate = useNavigate();
  const changePath = () => {
    navigate("/stories");
  };
  return (
    <>
      <div
        className={`fixed inset-0 w-full h-screen flex items-center justify-center bg-[#00000046] duration-300
                   ${
                     open
                       ? "z-[55] opacity-100 pointer-events-auto "
                       : "z-[-55] opacity-0 pointer-events-none"
                   } `}
      >
        <div className="max-w-xl p-16 text-center shadow-lg bg-white">
          <div
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 flex items-center justify-center cursor-pointer text-3xl"
          >
            <GrFormClose />
          </div>
          <p className="text-2xl">
            Start Your <span className="font-bold">Creative Journey</span> Now!
          </p>

          <div className="flex items-center justify-center gap-4 my-4">
            <Link to="/register">
              <p className="inline-block text-[1rem] px-4 py-[0.6rem] bg-[#000000] text-white hover:bg-[#434343] border-[1.5px] border-black">
                Create a Account
              </p>
            </Link>
            <Link to="/login">
              <p className="inline-block text-[1rem] px-4 py-[0.6rem] hover:bg-[#d4d4d4] border-[1.5px] border-black">
                Log in to your account
              </p>
            </Link>
          </div>

          <p
            onClick={changePath}
            className="text-base cursor-pointer underline underline-offset-2"
          >
            Skip for now
          </p>
        </div>
      </div>
    </>
  );
}

export default Popup;
