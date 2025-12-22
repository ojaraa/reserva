import ClientDashboardLayout from "@/components/ClientDashboardLayout";
import VendorDashboardLayout from "@/components/VendorDashboardLayout";
import CllientAppointments from "@/pages/client/client-appointments";
import ClientCalendar from "@/pages/client/client-calendar";
import ClientDashboard from "@/pages/client/client-dashboard";
import ClientVendorList from "@/pages/client/client-vendor-list";
import LandingPage from "@/pages/landing-page";
import Onboarding from "@/pages/onboarding";
import SignUp from "@/pages/signup";
import BookingDetails from "@/pages/vendor/booking-details";
import Bookings from "@/pages/vendor/bookings";
import ServiceDetails from "@/pages/vendor/service-details";
import VendorServices from "@/pages/vendor/services";
import VendorCalendar from "@/pages/vendor/vendor-calendar";
import VendorDashboard from "@/pages/vendor/vendor-dashboard";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/onboarding",
    element: <Onboarding />,
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
                element: <VendorServices/>,
            },
            {
                path: ":id",
                element: <ServiceDetails/>
            }
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
    element: <ClientDashboardLayout/>,
    children: [
        {
            path: "dashboard",
            element: <ClientDashboard/>
        },
        {
            path:"appointments",
            element: <CllientAppointments/>
        },
        {
            path:"calendar",
            element: <ClientCalendar/>
        },
        {
            path:"vendors",
            element: <ClientVendorList/>
        }

    ]
  },
  { path: "*", element: <div>404 – Page not found</div> },
]);

export default router;
