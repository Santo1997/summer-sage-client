const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center w-4/6 my-8">
      <h1 className="text-3xl uppercase py-4">{heading}</h1>
      <p className=" mb-2">{subHeading} </p>
    </div>
  );
};

export default SectionTitle;
