import React from "react";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import type { NextPage } from "next";
import { firebase, auth } from "lib/Firebase";

const SignUp: NextPage = () => {
  const router = useRouter();
  const signUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider).catch(alert);
      router.push("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div className="wrapper">
        <form className="auth" onSubmit={signUp}>
          <button className="auth-btn" type="submit">
            Googleでログイン
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
