import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Bangladesh from "./pages/Bangladesh";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import China from "./pages/China";
import Contact from "./pages/Contact";
import Counselling from "./pages/Counselling";
import Eligibility from "./pages/Eligibility";
import Events from "./pages/Events";
import Faq from "./pages/Faq";
import Fees from "./pages/Fees";
import Gallery from "./pages/Gallery";
import Georgia from "./pages/Georgia";
import Home from "./pages/Home";
import Kazakhstan from "./pages/Kazakhstan";
import Kyrgyzstan from "./pages/Kyrgyzstan";
import MbbsAbroad from "./pages/MbbsAbroad";
import NmcFmge from "./pages/NmcFmge";
import Philippines from "./pages/Philippines";
import Russia from "./pages/Russia";
import Scholarships from "./pages/Scholarships";
import Testimonials from "./pages/Testimonials";
import Ukraine from "./pages/Ukraine";
import Universities from "./pages/Universities";
import Uzbekistan from "./pages/Uzbekistan";
import Visa from "./pages/Visa";
import WhyStudyAbroad from "./pages/WhyStudyAbroad";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

const rootRoute = createRootRoute({ component: Layout });

const routes = [
  createRoute({ getParentRoute: () => rootRoute, path: "/", component: Home }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/about",
    component: About,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/why-study-abroad",
    component: WhyStudyAbroad,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/mbbs-abroad",
    component: MbbsAbroad,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/kyrgyzstan",
    component: Kyrgyzstan,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/russia",
    component: Russia,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/georgia",
    component: Georgia,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/kazakhstan",
    component: Kazakhstan,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/philippines",
    component: Philippines,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/bangladesh",
    component: Bangladesh,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/ukraine",
    component: Ukraine,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/china",
    component: China,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/uzbekistan",
    component: Uzbekistan,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/admissions",
    component: Admissions,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/eligibility",
    component: Eligibility,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/fees",
    component: Fees,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/visa",
    component: Visa,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/scholarships",
    component: Scholarships,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/nmc-fmge",
    component: NmcFmge,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/universities",
    component: Universities,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/testimonials",
    component: Testimonials,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/gallery",
    component: Gallery,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/blog",
    component: Blog,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/events",
    component: Events,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/career",
    component: Career,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/faq",
    component: Faq,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/counselling",
    component: Counselling,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/contact",
    component: Contact,
  }),
];

const routeTree = rootRoute.addChildren(routes);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
