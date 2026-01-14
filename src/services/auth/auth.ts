import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase.config";

export const signUpWithEmailAndPassword = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const loginWithEmailAndPassword = async (email: string, password: string) => {
    return await signInWithEmailAndPassword (auth, email, password);
}
export const handleLoginWithGoogle = async () => {
  return signInWithPopup(auth, googleProvider);
};

export const logout = () => {
  return signOut(auth);
};

// export const signupWithEmail = async (
//   email: string,
//   password: string
// ): Promise<UserCredential | null> => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     return userCredential;
//   } catch (error: any) {
//     console.error("Signup error:", error.message);
//     return null; // component will handle UI feedback
//   }
// };

// // Login with email/password
// export const loginWithEmail = async (
//   email: string,
//   password: string
// ): Promise<UserCredential | null> => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     return userCredential;
//   } catch (error: any) {
//     console.error("Login error:", error.message);
//     return null;
//   }
// };

// // Login with Google
// export const loginWithGoogle = async (): Promise<UserCredential | null> => {
//   try {
//     const userCredential = await signInWithPopup(auth, googleProvider);
//     return userCredential;
//   } catch (error: any) {
//     console.error("Google login error:", error.message);
//     return null;
//   }
// };

// // Logout
// export const logout = async (): Promise<void> => {
//   try {
//     await signOut(auth);
//   } catch (error: any) {
//     console.error("Logout error:", error.message);
//   }
// };
