import CreateForm from "../designs/forms/CreateForm";

function CreatePost() {
  return (
    <>
      <div className="container py-[8rem]">
        <h2>
          Write a <span className="font-bold">Post</span>
        </h2>

        <CreateForm />
      </div>
    </>
  );
}

export default CreatePost;
