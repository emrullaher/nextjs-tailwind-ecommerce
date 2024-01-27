import { IUser } from "@/lib/definitions";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from 'jwt-decode';

interface InitialState {
    token: null | string;
    user: null | IUser
}

const initialState: InitialState = {
    token: null,
    user: null,
};

export const login = createAsyncThunk(
    "auth/login",
    async ({ username = 'jimmie_k', password = 'klein*#%*' }: { username: string, password: string }) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })

        });
        const { token } = await response.json();
        return token;
    }
);

export const getUser = createAsyncThunk(
    "auth/getUser",
    async (token: string) => {
        if (!token) {
            return {} as IUser;
        }
        const decoded = jwtDecode(token);
        const id = decoded.sub;

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`);
        const user = await response.json();
        return user;
    }
);


export const { actions, reducer } = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
            document.cookie = `token=${action.payload}, path=/`;
        },
        resetUser(state) {
            state.token = null;
            state.user = null;
            document.cookie = 'token=; Max-Age=-99999999;path:/';
        },
        setUser(state, action) {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload as string;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload as IUser;
        });
    },
});

export const { setToken, resetUser, setUser } = actions;

