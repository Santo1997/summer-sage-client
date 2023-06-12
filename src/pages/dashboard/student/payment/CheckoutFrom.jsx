import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import "./Checkout.css";
import { AuthContext } from "../../../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import useCart from "../../../../hooks/useCart";

const CheckoutFrom = ({ cart, price }) => {
  const {
    _id,
    course_name,
    course_img,
    langId,
    student_enroll,
    available_seats,
  } = cart[0];
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart("carts");
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        user: user?.email,
        transactionId: paymentIntent.id,
        langId,
        course_name,
        course_img,
        student_enroll: student_enroll + 1,
        available_seats: available_seats - 1,
        date: new Date(),
        enroll: "success",
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.result.insertedId) {
          toast.success("Payment Successfull");
        }
      });
      axiosSecure.put(`/updateInfoCourse/${langId}`, payment);
      axiosSecure.delete(`/carts/${_id}`);
      refetch();
    }
  };

  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete. Your transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutFrom;
