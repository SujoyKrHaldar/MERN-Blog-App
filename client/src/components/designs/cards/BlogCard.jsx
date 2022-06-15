import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <>
      <div
        className="flex items-center justify-start gap-4 mb-8 last:mb-0 
      hover:bg-white duration-200 hover:shadow-xl hover:scale-105 
      border-[1px] border-[#bcbcbc] hover:border-black"
      >
        <div className="flex-1 w-full max-w-[165px] h-full bg-white ">
          <img
            src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
            alt="blog"
          />
        </div>

        <div className="p-8 flex-1">
          <p className="text-2xl mb-2 font-bold">Some title text here.</p>
          <p className="text-[1rem] mb-2 max-w-[350px]">
            lorem ipsum doller some description is here with some dummy text as
            well.
          </p>
          <p className="text-[1rem] mb-4">
            by <span className="font-bold">Sujoy kr haldar</span> ,{" "}
            <span>20th Dec 2022</span>
          </p>
          <Link to="/stories/1">
            <p className="text-[0.9rem] font-bold">Read more</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
