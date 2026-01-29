import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import dscelogo from '@/assets/dsce.png';
import anvayalogo from '@/assets/anvaya.png';
import iiclogo from '@/assets/iiclogo.png';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-30 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-glow-lg py-2' 
          : 'bg-white shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
            <img src={dscelogo} alt="DSCE Logo" className="h-14 w-14 sm:h-16 sm:w-16 object-contain drop-shadow-md" />
          </div>

          <div className="flex-1 min-w-0">
            <Link to="/" className="block group text-center sm:text-left">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-900 tracking-tight group-hover:text-primary-600 transition-colors duration-300">
                Dayananda Sagar College of Engineering
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-primary-700 font-semibold tracking-wide uppercase group-hover:text-primary-900 transition-colors duration-300">
                Dept. of Artificial Intelligence & Machine Learning
              </p>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <img 
                src={anvayalogo} 
                alt="Anvaya Club Logo" 
                className="h-14 w-14 object-contain drop-shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-300" 
              />
              <img 
                src={iiclogo} 
                alt="IIC Logo" 
                className="h-14 w-14 object-contain drop-shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-300" 
              />
            </div>
            
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-all duration-300"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden pb-4 mt-4 animate-slide-up border-t border-gray-100 pt-4">
            <div className="flex items-center justify-center gap-8">
              <img src={dscelogo} alt="DSCE Logo" className="h-14 w-14 object-contain drop-shadow-md" />
              <img src={anvayalogo} alt="Anvaya Club Logo" className="h-14 w-14 object-contain drop-shadow-md" />
              <img src={iiclogo} alt="IIC Logo" className="h-14 w-14 object-contain drop-shadow-md" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
