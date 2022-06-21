import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [signinUrl, setsigninUrl] = useState('')
  const fetch = async ()=>{
    const {data} = await axios.get('/api/')
    setsigninUrl(data)
  }
  useEffect(() => {
    fetch()
  }, [])
  
  return (
    <>
      <div id="main-content" className="ms-Grid">
        <div className="ms-Grid-row">
          <div id="title-banner" className="ms-font-su">
            Outlook Calendar Integration @Shera
          </div>
        </div>
        <div id="body-content" className="ms-Grid-row">
          <a
            id="signin-button"
            className="ms-Button ms-Button--primary"
            href={signinUrl}
          >
            <span className="ms-Button-label">Click here to sign in</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
