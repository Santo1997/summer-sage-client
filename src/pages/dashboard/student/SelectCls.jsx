const SelectCls = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>ClassName</th>
            <th>Teacher Name</th>
            <th>Available</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <h2 className="font-bold">Hart Hagerty</h2>
            </td>
            <td>
              <h2 className="font-bold">Hart Hagerty</h2>
            </td>
            <td>
              <span>12</span>
            </td>
            <td>
              $<span>12</span>
            </td>
            <td className="">
              <button className="btn btn-xs btn-outline me-3 btn-success">
                Payment
              </button>
              <button className="btn btn-xs btn-outline me-3 btn-success">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SelectCls;
