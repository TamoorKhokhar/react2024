import React from "react";

function UserInfo({ isLoggedIn, userName }) {
  //   if (isLoggedIn) {
  //     return <h1>Hey {userName} you are Logged In</h1>;
  //   } else {
  //     return <h2> Please Log in to continue</h2>;
  //   }

  // Another option we can use ternory operator
  return (
    // <h1>
    //   {isLoggedIn
    //     ? `Hey ${userName} you are Logged In`
    //     : "Please Log in to continue"}
    // </h1>

    // Or

    isLoggedIn ? (
      <>
        <div style={{ backgroundColor: "yellow" }}>
          Conditional Rendering
          <h1>Hey {userName} you are Logged In</h1>
        </div>
      </>
    ) : (
      <h3>Please Log in to continue</h3>
    )
  );
}

export default UserInfo;
