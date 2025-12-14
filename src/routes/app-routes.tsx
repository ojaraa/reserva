import VendorDashboardLayout from "@/components/VendorDashboardLayout";
import LandingPage from "@/pages/landing-page";
import Onboarding from "@/pages/onboarding";
import SignUp from "@/pages/signup";
import VendorCalendar from "@/pages/vendor/vendor-calendar";
import VendorDashboard from "@/pages/vendor/vendor-dashboard";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: "/signup",
        element: <SignUp/>,
    },

    {
        path: "/onboarding",
        element: <Onboarding/>,

    },
    {
        path: "vendor",
        element: <VendorDashboardLayout/>,
        children: [
            {
                path:"dashboard",
                element: <VendorDashboard/>
            },
            {
                path:"bookings",
                element: <div>Vendor Booking Page</div>
            },
            {
                path: "services",
                element: <div>Vendor Services Page</div>
            },
            {
                path: "calendar",
                element: <VendorCalendar/>
            }
        ]

    },
      { path: "*", element: <div>404 – Page not found</div> },
])

export default router;