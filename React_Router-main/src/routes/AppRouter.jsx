// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Confirmation from "../pages/Confirmation";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";
import Service1 from "../pages/Service1";
import Service2 from "../pages/Service2";
import Service3 from "../pages/Service3";
import ServicesOverview from "../components/ServicesOverview";
import UserList from "../pages/UserList"; // Import the UserList component

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* About Route */}
          <Route path="/about" element={<About />} />

          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />

          {/* Confirmation Route */}
          <Route path="/confirmation" element={<Confirmation />} />

          {/* User List Route */}
          <Route path="/user-list" element={<UserList />} /> {/* Add User List route */}

          {/* Services with Nested Routes */}
          <Route path="/services" element={<Services />}>
            <Route index element={<ServicesOverview />} /> {/* Default service overview */}
            <Route path="service1" element={<Service1 />} />
            <Route path="service2" element={<Service2 />} />
            <Route path="service3" element={<Service3 />} />
          </Route>

          {/* Catch-all for Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
