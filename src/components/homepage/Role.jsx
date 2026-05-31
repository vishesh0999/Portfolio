
export default function Role({forwardedRef}) {
  return (
    <section ref={forwardedRef} id="about" className="select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change" aria-label="">
      <div className="flex w-full items-center space-x-20">
        <h1 className="text-heading-1 font-bold text-gray-100 leading-[1.25em] md:leading-[1.08em] drop-shadow-lg">
        Building AI-powered products that solve real problems and drive meaningful business impact through data-driven strategy
        </h1>
      </div>
    </section>
  );
}
