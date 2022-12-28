import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import ProductDetail from "../views/products/ProductDetail";
import Products from "../views/products/Products";
import RootLayout from "../views/layouts/RootLayout";
import AdminProducts from "../views/products/admin/AdminProducts";
import AdminProductNew from "../views/products/admin/AdminProductNew";
import AdminProductEdit from "../views/products/admin/AdminProductEdit";
import NotFound from "../views/products/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "admin/products",
        element: <AdminProducts />,
      },
      {
        path: "admin/products/new",
        element: <AdminProductNew />,
      },
      {
        path: "admin/products/:productId/edit",
        element: <AdminProductEdit />,
      },
    ],
  },
]);

export default router;
