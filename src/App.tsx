// import HelpScout, { NOTIFICATION_TYPES } from "@helpscout/javascript-sdk";
// import { Button, DefaultStyle, Heading } from "@helpscout/ui-kit";
// import { useEffect, useState } from "react";

// function App() {
//   const [userEmail, setUserEmail] = useState<string | undefined>(
//     "unknown user"
//   );

//   useEffect(() => {
//     HelpScout.getApplicationContext().then(({ user }) =>
//       setUserEmail(user?.email)
//     );
//   }, []);

//   function onClick() {
//     HelpScout.showNotification(
//       NOTIFICATION_TYPES.SUCCESS,
//       "Hello from the sidebar app"
//     );
//   }

//   return (
//     <div className="App">
//       <DefaultStyle />
//       <Heading level="h4">Hi, {userEmail}</Heading>
//       <br />
//       <Button size="sm" onClick={onClick}>
//         Click me
//       </Button>
//     </div>
//   );
// }

// export default App;
import React from "react";
import HelpScout from "@helpscout/javascript-sdk";
import { DefaultStyle, Heading } from "@helpscout/ui-kit";
import { useEffect, useState } from "react";

function App() {
  const [userFirstName, setUserFirstName] = useState("there");

  useEffect(() => {
    HelpScout.getApplicationContext().then(({ user }) =>
      setUserFirstName(user?.firstName || "there")
    );
  }, []);

  return (
    <div className="App">
      <DefaultStyle />
      <Heading level="h4">Hi {userFirstName}! 👋</Heading>
    </div>
  );
}

export default App;
