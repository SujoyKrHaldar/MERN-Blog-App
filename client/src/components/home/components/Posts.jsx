import BlogCard from "../../designs/cards/BlogCard";

function Posts({ data }) {
  return (
    <>
      {data.map((item) => (
        <BlogCard key={item._id} data={item} />
      ))}
    </>
  );
}

export default Posts;
