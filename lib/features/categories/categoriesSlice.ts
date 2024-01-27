import { TCategories } from "@/lib/definitions";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface InitialState {
  categories: TCategories;
}

const initialState: InitialState = {
  categories: [],
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/categories`);
    const categories = await response.json();
    return categories;
  }
);

export const { actions, reducer } = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload as TCategories;
    });
  },
});