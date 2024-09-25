"use client";
import React from "react";
// import { signIn } from "~/lib/auth";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      Discord
    </button>
  );
};

export default SignIn;

// "use client";
// import signIn from "next-auth/next";

// export default function SignIn() {
//   return (
//     <button
//       onClick={() => {
//         signIn("discord");
//       }}
//     >
//       DIscord
//     </button>
//   );
// }
