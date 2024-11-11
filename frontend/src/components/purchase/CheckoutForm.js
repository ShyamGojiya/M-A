// src/CheckoutForm.js
import React, { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { REACT_APP_BACKEND_URL } from "../../config";

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Fetch client secret from the backend when the component mounts
    const fetchClientSecret = async () => {
      const response = await fetch(REACT_APP_BACKEND_URL + "/product/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    };

    fetchClientSecret();
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
        },
      }
    );

    if (error) {
      console.log("[Error]", error);
    } else if (paymentIntent.status === "succeeded") {
      console.log("Payment succeeded!", paymentIntent);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
