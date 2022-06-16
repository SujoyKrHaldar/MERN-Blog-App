import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

import { FaPinterestSquare } from "react-icons/fa";

const data = [
  {
    name: "game",
  },
  {
    name: "movie",
  },
  {
    name: "art",
  },
  {
    name: "music",
  },
  {
    name: "book",
  },
  {
    name: "food",
  },
  {
    name: "travel",
  },
  {
    name: "development",
  },
  {
    name: "design",
  },
  {
    name: "photography",
  },
];

function Sidebar() {
  return (
    <>
      <div className="mt-8 h-full flex items-start justify-between gap-4">
        <div className="flex-1 p-8 bg-white">
          <p className="mb-4 font-bold">About us</p>
          <p className="text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially
          </p>

          <p className="mb-3 font-bold text-sm">Follow us</p>

          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center text-2xl">
              <AiFillFacebook />
            </div>
            <div className="flex items-center text-2xl">
              <AiFillInstagram />
            </div>

            <div className="flex items-center text-2xl">
              <AiFillTwitterSquare />
            </div>

            <div className="flex items-center text-2xl">
              <FaPinterestSquare />
            </div>
          </div>
        </div>

        <div className="flex-1 p-8  bg-white">
          <p className="mb-4">
            Search by <span className="font-bold">Category</span>
          </p>
          <div className="flex items-center justify-start gap-2 flex-wrap">
            {data.map((item, index) => (
              <p
                className="flex-1 text-sm px-4 py-2 bg-[#f4f4f4] text-center hover:shadow-lg"
                key={index}
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
