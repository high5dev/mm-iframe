import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    title: string;
    imageUri: string;
    productType: string;
    handle: string;
    status: string;
    whenToUse: string;
    price: string;
}

interface productState {
    primaryConcernProduct: {
        Cleanser: Product[] | null;
        Toner: Product[] | null;
        Treatment: Product[] | null;
        Moisturizer: Product[] | null;
        Sunscreen: Product[] | null;
    };
    secondaryConcernProduct: {
        Cleanser: Product[] | null;
        Toner: Product[] | null;
        Treatment: Product[] | null;
        Moisturizer: Product[] | null;
        Sunscreen: Product[] | null;
    };
}

const initialState: productState = {
    primaryConcernProduct: {
        Cleanser: null,
        Toner: null,
        Treatment: null,
        Moisturizer: null,
        Sunscreen: null,
    },
    secondaryConcernProduct: {
        Cleanser: null,
        Toner: null,
        Treatment: null,
        Moisturizer: null,
        Sunscreen: null,
    },
};

const ProductSlice = createSlice({
    name: 'recommendations',
    initialState,
    reducers: {
        setProduct(state, action: PayloadAction<productState>) {
            state.primaryConcernProduct = action.payload.primaryConcernProduct;
            state.secondaryConcernProduct = action.payload.secondaryConcernProduct;
        }
    },
});

export const { setProduct } = ProductSlice.actions;
export default ProductSlice.reducer;