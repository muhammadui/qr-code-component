function App() {
  return (
    <>
      <main className="flex w-full justify-center items-center h-screen bg-blue-100 p-6">
        <div className=" max-w-md bg-white rounded-[1.2rem] p-4">
          <div className="flex flex-col">
            <img
              src="/images/image-qr-code.png"
              alt="qr code image"
              className="w-100 h-auto rounded-2xl"
            />
          </div>
          <h1 className="text-[1.4rem]  text-center p-4 font-bold text-slate-900 md:text-[1.8rem]">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-normal text-center text-slate-600 p-4 pb-4 md:text-[1.2rem] ">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
