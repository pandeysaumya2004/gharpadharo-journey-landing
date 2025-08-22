import { Link } from "react-router-dom";
import gharpadharoLogo from "/lovable-uploads/c40ced00-1521-4653-821d-d2becbbec957.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-blue-grey-primary/90 backdrop-blur-sm border-b border-blue-grey-light/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={gharpadharoLogo} alt="Gharpadharo Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-text-light">Gharpadharo</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="https://www.gharpadharo.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light hover:text-text-muted transition-colors font-medium"
          >
            Home
          </a>
          <Link 
            to="/journey"
            className="text-text-light hover:text-text-muted transition-colors font-medium"
          >
            Journey
          </Link>
          <Link 
            to="/contact"
            className="text-text-light hover:text-text-muted transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;