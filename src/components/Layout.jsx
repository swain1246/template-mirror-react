// src/components/Layout.tsx
import Header from "./Header";
import Footer from "./Footer";
import BottomNav from "./BottomNav"
const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {children}
      </main>
<BottomNav/>
      <Footer />
    </div>
  );
};

export default Layout;