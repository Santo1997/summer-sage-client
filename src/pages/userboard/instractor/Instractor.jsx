import InstractorData from "./InstreactorData";

const Instractor = () => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src="{teacherHead[0].img}" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">name</h2>
          <p>
            <span> Email: </span> <br />
            <span>Number of Classes</span> <br />
            <span>Name of the Classes </span> <br />
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-5">
        <InstractorData />;
      </div>
    </>
  );
};

export default Instractor;
