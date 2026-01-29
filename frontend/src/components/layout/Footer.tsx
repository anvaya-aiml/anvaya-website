import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 border-t-4 border-accent-600 mt-auto text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-accent-400">Anvaya Club</h3>
            <p className="text-primary-200 text-sm">Department of AI & ML, DSCE</p>
          </div>
          <p className="text-center text-sm text-primary-300">
            © {currentYear} Anvaya Club - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
