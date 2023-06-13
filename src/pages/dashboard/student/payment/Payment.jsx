import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { useParams } from "react-router-dom";
import useCart from "../../../../hooks/useCart";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import anime from "animejs";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);
const Payment = () => {
  const { user } = useContext(AuthContext);
  const param = useParams().id;
  const [cart] = useCart();
  const [axiosSecure] = useAxiosSecure();
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [filterData, setFIlterData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (cart.length == 0) {
      setLoader(true);
      return;
    }

    const filteredData = cart.filter((item) => item._id === param);
    setFIlterData(filteredData[0]);
    setLoader(false);

    anime({
      targets: ".w-80.h-96",
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: "easeOutSine",
    });
  }, [cart, param]);

  useEffect(() => {
    axiosSecure.get(`/userpayments?user=${user.email}`).then((res) => {
      setPaymentHistory(res.data);
      setLoader(false);
    });
  }, [axiosSecure, user]);

  console.log(paymentHistory);

  return (
    <>
      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <>
          {param === "null" ? (
            <>
              <div className=" mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Payment History</h1>
                {paymentHistory.length > 0 ? (
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Course</th>
                        <th className="px-4 py-2">User</th>
                        <th className="px-4 py-2">Patment Id </th>
                        <th className="px-4 py-2">Patment Date </th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentHistory.map((payment) => (
                        <tr key={payment._id}>
                          <td className="border px-4 py-2">
                            {payment.course_name}
                          </td>
                          <td className="border px-4 py-2">{payment.user}</td>
                          <td className="border px-4 py-2">
                            {payment.transactionId}
                          </td>
                          <td className="border px-4 py-2">{payment.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No payment history available.</p>
                )}
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="mx-auto text-center my-8">
                  <h1 className="text-3xl uppercase py-4 font-bold">Payment</h1>
                </div>
                <div className="card lg:card-side bg-base-100 border shadow-xl">
                  <figure>
                    <img src={filterData.course_img} className="w-80 h-96" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-3xl">
                      {filterData.course_name}
                    </h2>
                    <ul>
                      <li>Available: {filterData.available_seats}</li>
                      <li>Price: ${filterData.course_price}</li>
                    </ul>
                    <div>
                      <Elements stripe={stripePromise}>
                        <CheckoutFrom
                          filterData={filterData}
                          price={parseFloat(filterData.course_price.toFixed(2))}
                        ></CheckoutFrom>
                      </Elements>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Payment;
