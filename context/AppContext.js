// src/context/state.js
import { createContext, useContext, useState } from 'react';

const AppContext = createContext(['false', () => {}, () => {}]);

export function AppWrapper({ children }) {
	const [mobileMenuState, setmobileMenuState] = useState(false);

	const toggleMenuState = () => {
		setmobileMenuState(!mobileMenuState);
	};

	const falseMenuState = () => {
		setmobileMenuState(false);
	};

	let sharedState = {
		mobileMenuState,
		toggleMenuState,
		falseMenuState
	};

	return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
	return useContext(AppContext);
}
