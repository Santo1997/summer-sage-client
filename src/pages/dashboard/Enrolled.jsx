const Enrolled = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>ClassName</th>
            <th>Teacher Name</th>
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
            <td className="">
              <button className="btn btn-xs btn-outline me-3 btn-success">
                Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Enrolled;
