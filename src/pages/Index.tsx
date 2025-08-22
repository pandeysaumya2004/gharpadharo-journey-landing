import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import backgroundImage from "/lovable-uploads/85cc878b-ccee-43ca-bc00-29abbb289d15.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      {/* Content with overlay */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-grey-primary/80 to-blue-grey-dark/80">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-text-light mb-6 leading-tight">
              Find Your Perfect Room
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
              Find a variety of properties that suits you very easily, forget all difficulties in finding a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/journey">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
                  Discover Our Journey
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4 h-auto">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 px-4 bg-blue-grey-dark/90">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">Why Choose Gharpadharo?</h2>
              <p className="text-xl text-text-muted">Experience the future of property discovery</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-grey-light/20 rounded-lg backdrop-blur-sm border border-blue-grey-light/30">
                <div className="w-16 h-16 bg-blue-grey-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-text-light mb-2">Easy Discovery</h3>
                <p className="text-text-muted">Find the perfect room with our intuitive search and smart filters</p>
              </div>
              
              <div className="text-center p-6 bg-blue-grey-light/20 rounded-lg backdrop-blur-sm border border-blue-grey-light/30">
                <div className="w-16 h-16 bg-blue-grey-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-text-light mb-2">Quick Process</h3>
                <p className="text-text-muted">Skip the hassle with our streamlined booking and verification process</p>
              </div>
              
              <div className="text-center p-6 bg-blue-grey-light/20 rounded-lg backdrop-blur-sm border border-blue-grey-light/30">
                <div className="w-16 h-16 bg-blue-grey-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-text-light mb-2">Trusted Partners</h3>
                <p className="text-text-muted">Work with verified property owners and trusted local agents</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-blue-grey-dark/90 border-t border-blue-grey-light/20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <img src="/lovable-uploads/c40ced00-1521-4653-821d-d2becbbec957.png" alt="Gharpadharo Logo" className="w-8 h-8" />
                <span className="text-text-light font-semibold">Gharpadharo</span>
              </div>
              
              <div className="text-center">
                <p className="text-text-muted">© 2025 Gharpadharo. All rights reserved.</p>
              </div>
              
              <div className="flex gap-6">
                <a href="#" className="text-text-muted hover:text-text-light transition-colors">Terms of Service</a>
                <a href="#" className="text-text-muted hover:text-text-light transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;