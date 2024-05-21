import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

// type Props = {
//   showHero?: boolean;
// };

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 pb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
