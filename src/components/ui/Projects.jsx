export default function Projects({ name, img, alt, type, link, year, tools, priority = false }) {
  return (
    <div>
      <div
        className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
      >
        <img
          className="w-screen duration-700 ease-in-out group-hover:scale-105"
          src={img}
          alt={alt}
          width="800"
          height="600"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      </div>
      <div className="mt-4">
        <div className="flex space-x-2 mb-3">
            <p className="rounded-full bg-blue-500/20 border-2 border-blue-400/50 flex justify-center items-center px-5 py-2 text-blue-300 text-body-4 2xl:text-3xl font-bold shadow-lg">{year}</p>
            <p className="rounded-full bg-blue-500/20 border-2 border-blue-400/50 flex justify-center items-center px-5 py-2 text-blue-300 text-body-4 2xl:text-3xl font-bold shadow-lg">{tools}</p>
        </div>
        <div className="2xl:space-y-3">

        <h3 className="text-works-title 2xl:text-5xl font-bold uppercase text-white drop-shadow-md">
          {name}
        </h3>
        <p className="text-body-2 2xl:text-4xl font-semibold text-gray-300">{type}</p>
        </div>
      </div>
    </div>
  );
}
