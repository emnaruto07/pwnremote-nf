import { useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js'
import axios from "axios";
import { API } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import { useParams } from "react-router";
import { CheckoutForm } from "./CheckoutForm";

const stripePromise = loadStripe(

  'pk_test_51K9QyPDaN18cbJKsEWHCXgt4Kj1RWLgbowECFltGlQuq9PAP7tSHGmIKG0kPWWBNroogtcQCC1rlLSKOGttTUrav005GjSWTNJ'
);

export function Payment() {
    const { user: { token } } = useContext(AuthContext)
    const { id } = useParams()
    const [clientSecret, setClientSecret] = useState("");
    console.log(clientSecret)

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      axios.post(API.payment.updatePayment, {job_id: id }, {
        headers: {
          "Authorization": `Token ${token}`
        }
      })
        .then(res => setClientSecret(res.data.clientSecret))
  }, [token, id]);
  
    const appearance = {
      theme: 'stripe',
    };
  
    const options = {
      clientSecret,
      appearance,
    };

    return (
      <div className="flex justify-center">
          {clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm />
            </Elements>
          )}
      </div>
      
    )
}