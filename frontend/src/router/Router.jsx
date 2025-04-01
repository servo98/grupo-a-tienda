import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Product from "../pages/Product";
import PageNotFound from "../pages/PageNotFound";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import AdminProducts from "../pages/AdminProducts";
import CreateProduct from "../pages/CreateProduct";
import EditProduct from "../pages/EditProduct";

import CustomLayout from "../layouts/CustomLayout";
import ProtectedRoute from "./ProtectedRoute";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:productId" element={<Product />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin/products/add" element={<CreateProduct />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route
            path="/admin/products/:idProduct/edit?"
            element={<EditProduct />}
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
