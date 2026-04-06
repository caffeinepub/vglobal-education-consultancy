import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import LeadMagnetPopup from "./components/LeadMagnetPopup";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Admissions from "./pages/Admissions";
import AiTools from "./pages/AiTools";
import Bangladesh from "./pages/Bangladesh";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import China from "./pages/China";
import Compare from "./pages/Compare";
import Contact from "./pages/Contact";
import Counselling from "./pages/Counselling";
import Eligibility from "./pages/Eligibility";
import Events from "./pages/Events";
import Faq from "./pages/Faq";
import Fees from "./pages/Fees";
import Gallery from "./pages/Gallery";
import Georgia from "./pages/Georgia";
import Home from "./pages/Home";
import JaipurLocal from "./pages/JaipurLocal";
import Kazakhstan from "./pages/Kazakhstan";
import Kyrgyzstan from "./pages/Kyrgyzstan";
import MbbsAbroad from "./pages/MbbsAbroad";
import NmcFmge from "./pages/NmcFmge";
import NmcNotification from "./pages/NmcNotification";
import Philippines from "./pages/Philippines";
import Russia from "./pages/Russia";
import Scholarships from "./pages/Scholarships";
import Services from "./pages/Services";
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
      {/* Floating social media bar - left side */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1">
        <a
          href="https://facebook.com/vglobal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#1877f2] text-white px-2 py-2 rounded-r-lg hover:px-4 transition-all duration-300 group overflow-hidden"
          aria-label="VGLOBAL on Facebook"
          data-ocid="social.facebook.link"
        >
          <svg
            className="w-4 h-4 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span className="text-xs font-semibold max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300">
            Facebook
          </span>
        </a>
        <a
          href="https://instagram.com/vglobal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-b from-[#f09433] via-[#e6683c] to-[#bc1888] text-white px-2 py-2 rounded-r-lg hover:px-4 transition-all duration-300 group overflow-hidden"
          aria-label="VGLOBAL on Instagram"
          data-ocid="social.instagram.link"
        >
          <svg
            className="w-4 h-4 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="text-xs font-semibold max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300">
            Instagram
          </span>
        </a>
        <a
          href="https://youtube.com/@vglobal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#ff0000] text-white px-2 py-2 rounded-r-lg hover:px-4 transition-all duration-300 group overflow-hidden"
          aria-label="VGLOBAL on YouTube"
          data-ocid="social.youtube.link"
        >
          <svg
            className="w-4 h-4 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          <span className="text-xs font-semibold max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300">
            YouTube
          </span>
        </a>
        <a
          href="https://wa.me/917230032949"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25d366] text-white px-2 py-2 rounded-r-lg hover:px-4 transition-all duration-300 group overflow-hidden"
          aria-label="VGLOBAL on WhatsApp"
          data-ocid="social.whatsapp.link"
        >
          <svg
            className="w-4 h-4 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="text-xs font-semibold max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300">
            WhatsApp
          </span>
        </a>
        <a
          href="https://t.me/vglobal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#229ed9] text-white px-2 py-2 rounded-r-lg hover:px-4 transition-all duration-300 group overflow-hidden"
          aria-label="VGLOBAL on Telegram"
          data-ocid="social.telegram.link"
        >
          <svg
            className="w-4 h-4 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          <span className="text-xs font-semibold max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300">
            Telegram
          </span>
        </a>
      </div>
      <Chatbot />
      <LeadMagnetPopup />
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917230032949?text=Hi%20VGLOBAL%2C%20I%20want%20to%20know%20more%20about%20MBBS%20abroad%20admission%202026."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25d366] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl animate-whatsapp-pulse hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
        data-ocid="layout.whatsapp.floating_button"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
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
    path: "/nmc-notification",
    component: NmcNotification,
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
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/services",
    component: Services,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/compare",
    component: Compare,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/ai-tools",
    component: AiTools,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/mbbs-consultancy-jaipur",
    component: JaipurLocal,
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
