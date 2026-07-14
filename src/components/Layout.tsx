import { Outlet } from "react-router-dom";
import { Navbar } from "./shared/Navbar";
import { Footer } from "./shared/Footer";
import { CookieConsent } from "./shared/CookieConsent";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <CookieConsent />
    </>
  );
}
