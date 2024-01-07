import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = {
  loading: boolean;
  productMainList: ProductMainList[];
  error: string;
};

type ProductMainList = {
  type: string;
  data: {
    category: string;
    name: string;
    description: string;
    image: string;
    price: number;
    productId: string;
    ratings: { average: number; count: number };
  }[];
};
const initialState: InitialState = {
  loading: false,
  productMainList: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const res = await axios.get(
      "http://localhost:5000/products/productMainList"
    );
    return res.data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<ProductMainList[]>) => {
        state.loading = false;
        state.productMainList = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.productMainList = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default homeSlice.reducer;
// export const { ordered, restocked } = homeSlice.actions
