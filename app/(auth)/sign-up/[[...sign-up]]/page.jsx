"use client";

import { SignUp } from "@clerk/nextjs";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { db } from "../../../firebaseConfig"; 
import { doc, setDoc } from "firebase/firestore";

export default function Page() {
  const { isSignedIn, user, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      const isNewUser =
        new Date(user.createdAt).getTime() === new Date(user.updatedAt).getTime();

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
              createdAt: user.createdAt,
              updatedAt: user.updatedAt,
            },
            { merge: true }
          );
        } catch (error) {
          console.error("Error syncing user with Firebase:", error);
        }
      };

      syncUserWithFirebase();

      if (isNewUser) {
        router.push("/onboard");
      } else {
        router.push("/dashboard");
      }
    }
  }, [isSignedIn, isLoaded, user, router]);

  return (
    <div className="h-screen w-screen justify-center items-center flex">
      <SignUp signUpUrl="/sign-up" fallbackRedirectUrl="/onboard" />
    </div>
  );
}
