import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import anime from "animejs";
import CheckoutFrom from "./CheckoutFrom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCart from "../../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);
const Payment = () => {
  const param = useParams().id;
  const [cart] = useCart("carts");
  const [filterData, setFIlterData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (cart.length == 0) {
      setLoader(true);
    } else {
      const filteredData = cart.filter((item) => item._id === param);
      setFIlterData(filteredData[0]);
      setLoader(false);
    }

    anime({
      targets: ".w-80.h-96",
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: "easeOutSine",
    });
  }, [cart, param]);

  return (
    <>
      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <>
          {param !== "null" && (
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
                          cart={cart}
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
