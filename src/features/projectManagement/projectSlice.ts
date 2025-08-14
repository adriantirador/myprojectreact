import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardState {
    userData: any; // Replace 'any' with a specific type as needed
    settings: any; // Replace 'any' with a specific type as needed
}

const initialState: DashboardState = {
    userData: null,
    settings: {},
};

const dashboardSlice = createSlice({
    name: 'projectManagement',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<any>) { // Replace 'any' with a specific type as needed
            state.userData = action.payload;
        },
        updateSettings(state, action: PayloadAction<any>) { // Replace 'any' with a specific type as needed
            state.settings = { ...state.settings, ...action.payload };
        },
    },
});

export const { setUserData, updateSettings } = dashboardSlice.actions;

export default dashboardSlice.reducer;