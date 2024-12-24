import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log(auth.currentUser.email);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-svh ">
      <div className="flex flex-col gap-y-10 items-center w-fit border p-10 rounded-xl border-black">
        <h1 className="font-black text-2xl">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border  p-2 px-3 rounded-lg border-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="border  p-2 px-3 rounded-lg border-gray-500"
        />
        <div className="flex gap-x-2 flex-wrap items-center justify-center w-40 gap-y-2">
          <button
            onClick={signIn}
            className="bg-black text-white p-2 rounded-lg w-full"
          >
            Signin
          </button>
          <button
            onClick={signInGoogle}
            className="bg-blue-500 text-white p-2 rounded-lg w-full"
          >
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
