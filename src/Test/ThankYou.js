import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
function ThankYou() {
  const { getAccessTokenSilently } = useAuth0();
  async function sendPayement() {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get(
        "http://localhost:5000/payment/0123456",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="container-fluid">
      <button onClick={sendPayement}>OK</button>
    </div>
  );
}

export default ThankYou;
