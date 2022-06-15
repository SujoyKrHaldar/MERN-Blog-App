function AuthTemp({ title, imgUrl, children }) {
  return (
    <>
      <div className="w-full h-screen py-16 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img alt="background" src={imgUrl} />
        </div>
        <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg">
          <h2 className=" text-3xl font-bold text-gray-900">{title}</h2>
          {children}
        </div>
      </div>
    </>
  );
}

export default AuthTemp;
