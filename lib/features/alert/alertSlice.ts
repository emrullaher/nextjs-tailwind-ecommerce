// store.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAlert } from '@/lib/definitions';

const initialState = {
    alert: {
        message: '',
        type: 'success'
    } as IAlert
};

export const { actions, reducer } = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert: (state, action) => {
            state.alert = action.payload;
        },
        clearAlert: (state) => {
            state.alert = {} as IAlert;
        },
    },
});

export const { setAlert, clearAlert } = actions;