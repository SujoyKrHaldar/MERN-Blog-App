function AuthTemp({ title, children }) {
  return (
    <>
      <div className="w-full h-[93vh] py-16 flex items-center justify-center bg-[#eeeeee]">
        <div className="max-w-md w-full space-y-8 p-8 bg-white">
          <h2 className=" text-3xl font-bold text-gray-900">{title}</h2>
          {children}
        </div>
      </div>
    </>
  );
}

export default AuthTemp;
