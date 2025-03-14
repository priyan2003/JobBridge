import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    name: "application",
    initialState: {
        applicants: { applications: [] }, // Ensure applicants is always an object
    },
    reducers: {
        setAllApplicants: (state, action) => {
            state.applicants = action.payload || { applications: [] }; // Prevent null
        },
    },
});

export const { setAllApplicants } = applicationSlice.actions;
export default applicationSlice.reducer;
