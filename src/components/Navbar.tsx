import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trading', href: '/#trading' },
    { name: 'Account', href: '/#accounts' },
    { name: 'Market', href: '/#markets' },
    { name: 'Analysis', href: '/#analysis' },
    { name: 'Company', href: '/#company' },
    { name: 'Partners', href: '/#partners' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-2xl" 
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-12 flex items-center justify-between h-20">
        <a href="#" className="flex items-center group h-full">
          <img 
            src="/assets/logo_main logo( white text).svg" 
            alt="RakizFx Logo" 
            className="h-full w-auto block py-2" 
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a 
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-[13px] font-medium text-tx hover:text-txp hover:bg-nn/5 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="px-3 py-1.5 text-[13px] font-medium text-tx hover:text-txp hover:bg-nn/5 rounded-lg transition-all"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="bt bt-g px-5 py-2 text-[13px] font-semibold text-tx hover:text-nn border border-white/10 hover:border-nn rounded-lg transition-all cursor-pointer">
            Sign In
          </button>
          <button className="bg-nn hover:bg-nnl text-dk px-5 py-2 text-[13px] font-bold rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(0,202,115,0.2)]">
            Open Live Account
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0b0f0e] border-b border-white/5 p-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <hr className="border-white/10 my-2" />
            <button className="w-full text-center py-3 text-gray-300 font-semibold">Sign In</button>
            <button className="w-full bg-emerald-500 py-4 rounded-xl text-black font-bold flex items-center justify-center gap-2">
              Start Trading Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
