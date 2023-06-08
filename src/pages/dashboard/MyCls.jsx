const MyCls = () => {
  let img =
    "https://i.ibb.co/19cZpB9/360-F-46340033-r4r-ZUll7-MDn-SXM4n-S87qoy-AKEg-BGXIKE.jpg";

  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Teacher Name</th>
            <th>Available seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={img} />
                </div>
              </div>
            </td>
            <td>
              <h2 className="font-bold">Hart Hagerty</h2>
            </td>
            <td>
              <h2 className="font-bold">Hart Hagerty</h2>
            </td>
            <td>12</td>
            <td>
              $ <span>12</span>
            </td>
            <td>
              <h2 className="font-bold">Pending</h2>
            </td>
            <td className="text-left">
              <h2 className="font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyCls;
