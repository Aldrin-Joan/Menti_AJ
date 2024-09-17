"use client";
import { SignIn } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { db } from "../../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

function Page() {
  const { isSignedIn, user, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      const syncUserWithFirebase = async () => {
        try {
          const userRef = doc(db, "users", user.id);
          await setDoc(
            userRef,
            {
              id: user.id,
              email: user.primaryEmailAddress?.emailAddress,
              firstName: user.firstName,
              lastName: user.lastName,
              updatedAt: user.updatedAt,
            },
            { merge: true }
          );
        } catch (error) {
          console.error("Error syncing user with Firebase:", error);
        }
      };

      syncUserWithFirebase();
      router.push("/dashboard");
    }
  }, [isSignedIn, isLoaded, user, router]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignIn fallbackRedirectUrl="/dashboard" />
    </div>
  );
}

export default Page;
