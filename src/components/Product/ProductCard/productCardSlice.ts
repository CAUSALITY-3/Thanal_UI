import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = {
  loading: boolean;
  productData: ProductData;
  error: string;
};

type ProductData = {
  category: string;
  name: string;
  description: string;
  image: string;
  price: number;
  productId: string;
  priority:number;
  _id:string;
};
const initialState: InitialState = {
  loading: false,
  productData: {
    category: "",
    name: "",
    description: "",
    image: "",
    price: 0,
    productId: "",
    priority:0,
    _id:""
  },
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id:string) => {
    const res = await axios.get(
      `http://localhost:5000/products/product?id=${id}`
    );
    return res.data;
  }
);

const productCardSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
        fetchProduct.fulfilled,
      (state, action: PayloadAction<ProductData>) => {
        state.loading = false;
        state.productData = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default productCardSlice.reducer;
// export const { ordered, restocked } = homeSlice.actions
