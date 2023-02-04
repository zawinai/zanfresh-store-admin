import { Routes, Route, Navigate } from "react-router-dom";
// ELements
import Signin from "../elements/signin";
import Dashboard from "../elements/dashboard";
import AddProductForm from "../elements/addProductForm";
import Users from "../elements/users";
import Products from "../elements/products";
import Orders from "../elements/orders";
import Feedbacks from "../elements/feedback";
// Hooks
import { useAuth } from "../context/authContext";

// Utils
import { HashLoader } from "react-spinners";

const Layout = () => {
  const { user, loading } = useAuth();

  return loading ? (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <HashLoader color='#36d7b7' />
    </div>
  ) : user == null ? (
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/*' element={<Navigate to='..' />} />
    </Routes>
  ) : (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='products' element={<Products />} />
      <Route path='addproduct' element={<AddProductForm />} />
      <Route path='orders' element={<Orders />} />
      <Route path='users' element={<Users />} />
      <Route path='feedbacks' element={<Feedbacks />} />
    </Routes>
  );
};

export default Layout;
