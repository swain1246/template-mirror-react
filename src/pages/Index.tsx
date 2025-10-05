import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Main Content Area - Add your page content here */}
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">Welcome to Movers & Packers</h1>
            <p className="text-xl text-muted-foreground">Your trusted transport and courier service</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
