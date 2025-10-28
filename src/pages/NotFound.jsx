// src/pages/NotFound.tsx
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <h2 className="mb-6 text-3xl font-bold text-foreground">Page Not Found</h2>
        <p className="mb-8 text-xl text-muted-foreground text-center max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button onClick={() => navigate("/")} className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8">
          Go to Homepage
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;