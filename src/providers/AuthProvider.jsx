import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Google Login
	const googleProvider = new GoogleAuthProvider();
	const googleLogin = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// Registraion via Email & Password
	const emailPasswordRegistration = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Update DisplayName and photoURL
	const updateUserProfile = (userInfo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, userInfo);
	};

	// Login via Email & Password
	const emailPasswordLogin = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Logout User
	const loggedOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// Observer
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const authInfo = {
		googleLogin,
		emailPasswordRegistration,
		updateUserProfile,
		emailPasswordLogin,
		user,
		setUser,
		loading,
		loggedOut,
	};

	return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
