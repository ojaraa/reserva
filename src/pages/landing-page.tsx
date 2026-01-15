import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
// import {  BarChart3, CheckCircle2, Users, Zap } from "lucide-react";
import {
  // Calendar,
  Clock,
  // Shield,
  Zap,
  CheckCircle2,
  Users,
  Bell,
  ArrowRight,
  Star,
  // Menu,
  // X,
  Smartphone,
  BarChart3,
  Calendar,
} from "lucide-react";
// import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

const LandingPage = () => {
  const { user, userData } = useAuth();
  const isUserSignedIn = user && userData?.role;

  return (
    <div className="grid gap-6">
      <Navbar />

      <section className=" px-6">
        <div className="max-w-7xl mx-auto text-center ">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-6">
            <span
              className={`w-2 h-2 rounded-full bg-primary-blue animate-pulse`}
            ></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
              Now powering businesses
            </span>
          </div>
          <h1 className="text-[32px]  md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 ">
            The <span className="text-primary-blue">simplest</span> way to book
            appointments online.
          </h1>
          <p className="w-full md:w-3/4  text-muted-foreground text-lg md:text-xl  max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop the manual back-and-forth messaging. Start providing a
            professional, smooth booking experience instantly.
          </p>

          {!isUserSignedIn && (
            <div className="flex items-center justify-center gap-4 mt-2">
              <Link to={`/login`}>
                <Button className="py-7 px-6! text-lg">
                  Start for free
                  <ArrowRight />
                </Button>
              </Link>

              <Button variant="outline" className="py-7 px-6! text-lg">
                Book a demo
              </Button>
            </div>
          )}
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent z-10 h-full w-full"></div>
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 shadow-2xl max-w-5xl mx-auto overflow-hidden">
            <div className="bg-white rounded-lg border border-slate-200 h-[400px] flex items-center justify-center">
              <div className="flex flex-col items-center opacity-40">
                <BarChart3 size={48} className="mb-4" />
                <p className="font-medium">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Reserva works
            </h2>
            <p className="text-slate-600">
              A synchronized experience for both sides of the counter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* For Vendors */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <span className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-4 block">
                For Providers
              </span>
              <h3 className="text-2xl font-bold mb-6">
                Manage with total control
              </h3>
              <ul className="space-y-6">
                {vendorSteps.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div
                      className={`bg-primary-blue text-white p-1 rounded-md h-fit mt-1`}
                    >
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <p className="font-bold">{item.t}</p>
                      <p className="text-slate-600 text-sm">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Clients */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <span className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-4 block">
                For Clients
              </span>
              <h3 className="text-2xl font-bold mb-6">Book in 30 seconds</h3>
              <ul className="space-y-6">
                {clientSteps.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div
                      className={`bg-primary-blue text-white p-1 rounded-md h-fit mt-1`}
                    >
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <p className="font-bold">{item.t}</p>
                      <p className="text-slate-600 text-sm">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to manage bookings in one place.
            </h2>
            <p className="text-slate-600 text-lg">
              From availability to confirmations, Reserva keeps bookings simple
              and organized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all group"
              >
                <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Social Proof Section */}
      <section
        id="testimonials"
        className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 mb-24 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Less back-and-forth. More time for real work.
              </h2>

              <p className="text-indigo-200 text-lg mb-8">
                Reserva helps service providers stay organized by turning
                messages and availability into a simple booking flow clients can
                actually use.
              </p>

              <div className="flex gap-4 items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-yellow-400 text-yellow-400 w-5 h-5"
                    />
                  ))}
                </div>
                <p className="font-medium italic text-indigo-100">
                  “Booking finally feels structured.”
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <p className="text-3xl font-bold mb-1">One</p>
                <p className="text-indigo-300 text-sm">
                  Calendar for all your bookings
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <p className="text-3xl font-bold mb-1">Zero</p>
                <p className="text-indigo-300 text-sm">
                  Manual availability tracking
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <p className="text-3xl font-bold mb-1">Direct</p>
                <p className="text-indigo-300 text-sm">
                  Client-to-vendor booking flow
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <p className="text-3xl font-bold mb-1">Anytime</p>
                <p className="text-indigo-300 text-sm">
                  Clients can request bookings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
<section className="pb-24 px-4 text-center">
  <div className="max-w-4xl mx-auto bg-indigo-50 rounded-[2.5rem] p-12 md:p-20 border border-indigo-100">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
      Start accepting bookings the simple way.
    </h2>

    <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
      Create your profile, set your availability, and let clients book without the back-and-forth.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button
        className={`bg-primary-blue text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all`}
      >
        Get started
      </button>

      <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
        View how it works
      </button>
    </div>

    <p className="mt-8 text-sm text-slate-400">
      Built for service providers and their clients.
    </p>
  </div>
</section>


      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            
            <span className="text-lg font-bold tracking-tight">Reserva</span>
          </div>
          <div className="flex gap-8 text-slate-500 text-sm">
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Twitter
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            © 2025 Reserva Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

const vendorSteps = [
  {
    t: "Create Your Vendor Profile",
    d: "Sign up and set up your business profile with your details, service categories, and basic information.",
  },
  {
    t: "Add Services & Set Availability",
    d: "List your services, set prices and durations, and configure your availability using the built-in calendar.",
  },
  {
    t: "Manage Your Booking Calendar",
    d: "View all bookings in one calendar, block unavailable dates, and avoid double bookings automatically.",
  },
  {
    t: "Receive & Manage Bookings",
    d: "Get notified when clients book directly on your dashboard.",
  },
];

const clientSteps = [
  {
    t: "Discover Vendors",
    d: "Browse vendors by category or search for the service you need.",
  },
  {
    t: "View Services & Availability",
    d: "Check vendor services, prices, and real-time availability through their booking calendar.",
  },
  {
    t: "Book a Time Slot",
    d: "Select a service, choose a date and time that works for you, and submit your booking request.",
  },
  {
    t: "Get Confirmed & Stay Updated",
    d: "Receive booking confirmations, reminders, and updates—all in one place.",
  },
];

// const features = [
//   {
//     icon: <Clock className="text-primary-blue" />,
//     title: "24/7 Booking",
//     desc: "Your business stays open even when you're asleep. Let clients book whenever they want.",
//   },
//   {
//     icon: <Bell className="text-primary-blue" />,
//     title: "Smart Reminders",
//     desc: "Reduce no-shows by 40% with automated SMS and email notifications.",
//   },
//   {
//     icon: <Smartphone className="text-primary-blue" />,
//     title: "Mobile First",
//     desc: "A fully responsive experience that looks great on iPhones, Androids, and tablets.",
//   },
//   {
//     icon: <Shield className="text-primary-blue" />,
//     title: "Secure Payments",
//     desc: "Enterprise-grade encryption for every transaction. PCI-compliant and safe.",
//   },
//   {
//     icon: <Users className="text-primary-blue" />,
//     title: "Team Management",
//     desc: "Assign staff to specific services and manage individual schedules with ease.",
//   },
//   {
//     icon: <Zap className="text-primary-blue" />,
//     title: "Rapid Setup",
//     desc: "Go from sign-up to your first booking in less than 15 minutes. No dev required.",
//   },
// ];

const features = [
  {
    icon: <Calendar className="text-primary-blue" />,
    title: "Booking Calendar",
    desc: "Vendors manage availability in one place, while clients see real-time time slots before booking.",
  },
  {
    icon: <Clock className="text-primary-blue" />,
    title: "24/7 Online Booking",
    desc: "Clients can request bookings anytime without sending DMs or waiting for replies.",
  },
  {
    icon: <Bell className="text-primary-blue" />,
    title: "Booking Notifications",
    desc: "Get instant updates when a booking is requested, confirmed, or rescheduled.",
  },
  {
    icon: <Users className="text-primary-blue" />,
    title: "Vendor Profiles",
    desc: "Each vendor gets a public profile with services, pricing, photos, and availability.",
  },
  {
    icon: <Smartphone className="text-primary-blue" />,
    title: "Mobile-Friendly Experience",
    desc: "Reserva works smoothly on mobile so clients can book and vendors can manage bookings on the go.",
  },
  {
    icon: <Zap className="text-primary-blue" />,
    title: "Simple Setup",
    desc: "Create a profile, add services, set availability, and start accepting bookings in minutes.",
  },
];
