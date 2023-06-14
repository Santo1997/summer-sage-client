const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center px-5 lg:px-0 lg:w-4/6 my-8">
      <h1 className="text-3xl uppercase py-4 font-bold">{heading}</h1>
      <p className=" mb-2">{subHeading} </p>
    </div>
  );
};

export default SectionTitle;
