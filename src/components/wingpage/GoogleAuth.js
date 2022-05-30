
import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId = "160874880764-a40k8ckg7h31p9oms2ti2pljvb29t9qk.apps.googleusercontent.com";
export default function GoogleAuth() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };
  return (
    <div className="App">
      <div >
        {showloginButton ? (
          <GoogleLogin
            clientId={clientId}
            buttonText="Signin with google"
         onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        ) : null}

        {showlogoutButton ? (
          <GoogleLogout
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={onSignoutSuccess}
          ></GoogleLogout>
        ) : null}
      </div>
    </div>
  );
}
