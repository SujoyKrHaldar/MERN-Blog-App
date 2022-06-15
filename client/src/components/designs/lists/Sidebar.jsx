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
      <div className=" h-full ">
        <div className="mb-8 p-8 bg-[#e1e1e1]">
          <p className="mb-4 font-bold pb-2 border-b-2 border-[#636363]">
            About us
          </p>
          <p className="text-[1rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially
          </p>
        </div>

        <div className=" p-8 mb-8 bg-[#e1e1e1]">
          <p className="mb-4 font-bold pb-2 border-b-2 border-[#636363]">
            Discover more
          </p>
          <div className="flex items-center justify-start gap-2 flex-wrap">
            {data.map((item, index) => (
              <p
                className="flex-1  bg-white text-center text-[1rem] border-[1px]  border-black px-[1.3rem] pt-[0.6rem] pb-[0.7rem]"
                key={index}
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>

        <div className="p-8 bg-[#e1e1e1]">
          <p className="mb-4 font-bold pb-2 border-b-2 border-[#636363]">
            Follow us on Social
          </p>
          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center text-3xl">
              <AiFillFacebook />
            </div>
            <div className="flex items-center text-3xl">
              <AiFillInstagram />
            </div>

            <div className="flex items-center text-3xl">
              <AiFillTwitterSquare />
            </div>

            <div className="flex items-center text-3xl">
              <FaPinterestSquare />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
