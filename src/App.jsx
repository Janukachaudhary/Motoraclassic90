import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { CartProvider } from "./assets/CartContext";

// Pages Import
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import NotFound from "./Pages/NotFound";
import MotorcycleDetail from  "../src/Pages/MotorcycleDetail";

// Root Layout
function RootLayout() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

// Router Config
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "collection", element: <Collection /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "motorcycle/:id", element: <MotorcycleDetail /> }, // ✅ Dynamic route
      { path: "*", element: <NotFound /> },
    ],
  },
]);

// App Component
export default function App() {
  return <RouterProvider router={router} />;
}