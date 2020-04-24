import React from "react";
import Form from "./Form";

var userIsRegistered = false;
var isLoggedIn = false;

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/* isLoggedIn === true ? <h1>Hello</h1> : <Login /> */}
      <Form isRegistered={userIsRegistered} />
      {currentTime > 12 && <h1> Good Afternoon </h1>}
    </div>
  );
}

export default App;
