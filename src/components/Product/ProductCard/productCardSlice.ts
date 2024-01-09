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
  images: string[];
  price: number;
  productId: string;
  priority: number;
  _id: string;
  ratings: { average: number; count: number };
  features: { type: string, value: string }[];
  reviews: {customer : string, rating: number, comment: string, reviewDate: string }[];
};
const initialState: InitialState = {
  loading: false,
  productData: {
    category: "",
    name: "",
    description: "",
    image: "",
    images: [],
    price: 0,
    productId: "",
    priority: 0,
    _id: "",
    ratings: { average: 5, count: 0 },
    features: [],
    reviews:[]
  },
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id: string) => {
    const res = await axios.get(
      `${import.meta.env.VITE_THANAL_API_BASE_URL}/products/product?id=${id}`
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
