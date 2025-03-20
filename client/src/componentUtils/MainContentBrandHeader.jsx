const MainContentBrandHeader = () => {
    return (
        <>
        <section className="relative h-[400px] flex items-center justify-center text-center text-white">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://wallpapercave.com/wp/wp9489413.jpg')",
            
            // https://png.pngtree.com/background/20231016/original/pngtree-cloudy-sky-over-gas-pipelines-supported-by-concrete-3d-rendered-picture-image_5573092.jpg
          opacity: 0.90, 
        }}
      ></div>

      
      <div className="relative p-6 rounded-lg max-w-2xl">
        <h1 className="text-4xl font-bold">
          India's Largest B2B Raw Materials Procurement & Credit Platform
        </h1>
        <p className="mt-3 text-lg">
          Get the best prices for your raw material requirements.
        </p>
        <div className="mt-5 border border-black rounded-lg flex">
          <input
            type="text"
            placeholder="Search for raw materials..."
            className="w-full px-4 py-2 rounded-md text-white"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md">
            Search
          </button>
        </div>
      </div>
    </section>
    </>
    )
}

export default MainContentBrandHeader;