import BlogCard from "../../designs/cards/BlogCard";

function Posts({ data }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {data.slice(2).map((item) => (
          <BlogCard key={item._id} data={item} />
        ))}
      </div>
    </>
  );
}

export default Posts;
