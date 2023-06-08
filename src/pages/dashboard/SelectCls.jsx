const SelectCls = () => {
  let img =
    "https://i.ibb.co/19cZpB9/360-F-46340033-r4r-ZUll7-MDn-SXM4n-S87qoy-AKEg-BGXIKE.jpg";
  return (
    <div className="grid grid-cols-3">
      <div className="card card-compact shadow-xl">
        <figure>
          <img src={img} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Classname</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Pay</button>
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCls;
