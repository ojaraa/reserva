import ClientDashboardLayout from "@/components/ClientDashboardLayout";
import WelcomePage from "@/components/onboarding-steps/welcome-page";
import VendorDashboardLayout from "@/components/VendorDashboardLayout";
import ChooseUserType from "@/pages/choose-user-type";
import BookAppointment from "@/pages/client/book-appointment";
import CllientAppointments from "@/pages/client/client-appointments";
import ClientCalendar from "@/pages/client/client-calendar";
import ClientDashboard from "@/pages/client/client-dashboard";
import ClientOnboarding from "@/pages/client/client-onboarding";
import ClientVendorList from "@/pages/client/client-vendor-list";
import VendorDetailsPage from "@/pages/client/vendor-details-page";
import VendorServiceDetail from "@/pages/client/vendor-service-detail";
import LandingPage from "@/pages/landing-page";
import LoginPage from "@/pages/login";
import SignUp from "@/pages/signup";
import BookingDetails from "@/pages/vendor/booking-details";
import Bookings from "@/pages/vendor/bookings";
import ServiceDetails from "@/pages/vendor/service-details";
import VendorServices from "@/pages/vendor/services";
import VendorCalendar from "@/pages/vendor/vendor-calendar";
import VendorDashboard from "@/pages/vendor/vendor-dashboard";
import VendorOnboarding from "@/pages/vendor/vendor-onboarding";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./protected-routes";
// import ReservaVendorDashboard from "@/pages/text";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  // {
  //   path: "test",
  //   element: <ReservaVendorDashboard/>
  // },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "",
    element: <ProtectedRoutes />,
    children: [
       {
            path: "/choose-your-user-type",
            element: <ChooseUserType />,
          },
      {
        path: "/onboarding",
        children: [
         
          {
            path: "vendor",
            element: <VendorOnboarding />,
          },
          {
            path: "client",
            element: <ClientOnboarding />,
          },
          {
            path: "success",
            element: <WelcomePage />,
          },
        ],
      },

      {
        path: "vendor",
        element: <VendorDashboardLayout />,
        children: [
          {
            path: "dashboard",
            element: <VendorDashboard />,
          },
          {
            path: "bookings",
            children: [
              {
                path: "",
                element: <Bookings />,
              },
              {
                path: ":id",
                element: <BookingDetails />,
              },
            ],
          },
          {
            path: "services",
            children: [
              {
                path: "",
                element: <VendorServices />,
              },
              {
                path: ":id",
                element: <ServiceDetails />,
              },
            ],
          },
          {
            path: "calendar",
            element: <VendorCalendar />,
          },
        ],
      },
      {
        path: "client",
        element: <ClientDashboardLayout />,
        children: [
          {
            path: "dashboard",
            element: <ClientDashboard />,
          },
          {
            path: "appointments",
            element: <CllientAppointments />,
          },
          {
            path: "calendar",
            element: <ClientCalendar />,
          },
          {
            path: "vendors",
            children: [
              {
                path: "",
                element: <ClientVendorList />,
              },
              {
                path: ":id",
                children: [
                  {
                    path: "",
                    element: <VendorDetailsPage />,
                  },
                  {
                    path: "services/:serviceId",
                    element: <VendorServiceDetail />,
                  },
                  {
                    path: "book-appointment",
                    element: <BookAppointment />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  { path: "*", element: <div>404 – Page not found</div> },
]);

export default router;
