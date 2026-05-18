import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, BarChart2, Boxes, LineChart, Users, BadgeDollarSign, Wallet, Monitor, Smartphone, LayoutDashboard, Copy, Newspaper, CalendarDays, FileText, PieChart, Activity, Handshake, Percent, Building2, Headset, Briefcase } from 'lucide-react';
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
    {
      name: 'Trading',
      href: '/trading',
      dropdown: [
        { title: 'Overview', desc: 'Access 1,000+ CFDs across global markets', icon: <BarChart2 size={20} strokeWidth={1.5} /> },
        { title: 'All Trading Products', desc: 'Discover our wide range of products to trade', icon: <Boxes size={20} strokeWidth={1.5} /> },
        { title: 'Markets', desc: 'Access the latest product offerings', icon: <LineChart size={20} strokeWidth={1.5} /> },
        { title: 'Trading Accounts', desc: 'Tailored for traders of all experience levels', icon: <Users size={20} strokeWidth={1.5} /> },
        { title: 'Trading Fees', desc: 'Trading costs for executing buy or sell orders', icon: <BadgeDollarSign size={20} strokeWidth={1.5} /> },
        { title: 'Deposit and Withdrawal', desc: 'Discover all funding and withdrawal methods', icon: <Wallet size={20} strokeWidth={1.5} /> },
      ]
    },
    {
      name: 'Platforms',
      href: '/account',
      dropdown: [
        { title: 'Overview', desc: 'Access various platforms for diverse trading options', icon: <Monitor size={20} strokeWidth={1.5} /> },
        { title: 'RakizFx App', desc: 'Trade global markets anytime, anywhere', icon: <Smartphone size={20} strokeWidth={1.5} /> },
        { title: 'MetaTrader 5', desc: 'Experience fast execution and advanced signals', icon: <LayoutDashboard size={20} strokeWidth={1.5} /> },
        { title: 'TradingView', desc: 'Trade smarter on the leading global charting platform', icon: <LineChart size={20} strokeWidth={1.5} /> },
        { title: 'Copy Trading', desc: 'Copy, trade, and earn in one tap', icon: <Copy size={20} strokeWidth={1.5} /> },
      ]
    },
    {
      name: 'Analysis',
      href: '/analysis',
      dropdown: [
        { title: 'Overview', desc: 'Get market analysis and stay informed', icon: <Newspaper size={20} strokeWidth={1.5} /> },
        { title: 'Economic Calendar', desc: 'Track and stay updated on key market events', icon: <CalendarDays size={20} strokeWidth={1.5} /> },
        { title: 'News and Analysis', desc: 'Stay ahead with the latest news', icon: <FileText size={20} strokeWidth={1.5} /> },
        { title: 'Client Sentiment', desc: 'Gauge overall market trends and sentiment', icon: <PieChart size={20} strokeWidth={1.5} /> },
        { title: 'Trading Signal', desc: 'Trade insights driven by technical analysis', icon: <Activity size={20} strokeWidth={1.5} /> },
      ]
    },
    {
      name: 'Partners',
      href: '/partners',
      dropdown: [
        { title: 'Overview', desc: 'Transform your expertise into potential earnings', icon: <Handshake size={20} strokeWidth={1.5} /> },
        { title: 'Introducing Brokers', desc: 'Partner with RakizFx for top-tier IB commissions', icon: <Percent size={20} strokeWidth={1.5} /> },
        { title: 'CPA Affiliate', desc: 'Refer clients and earn industry-leading commissions', icon: <Users size={20} strokeWidth={1.5} /> },
      ]
    },
    {
      name: 'Company',
      href: '/company',
      dropdown: [
        { title: 'About Us', desc: 'Learn about our institutional-grade legacy', icon: <Building2 size={20} strokeWidth={1.5} /> },
        { title: 'Contact', desc: 'Get in touch with our global support team', icon: <Headset size={20} strokeWidth={1.5} /> },
        { title: 'Careers', desc: 'Join our team of global innovators', icon: <Briefcase size={20} strokeWidth={1.5} /> },
      ]
    }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-[#0b120e]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl" 
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-12 flex items-center justify-between h-20">
        <a href="/" className="flex items-center group h-full">
          <img 
            src="/assets/logo_main logo( white text).svg" 
            alt="RakizFx Logo" 
            className="h-full w-auto block py-2" 
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 h-full">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group h-full flex items-center">
              <Link
                to={link.href}
                className="px-4 py-2 text-[14px] font-medium text-white/90 hover:text-primary transition-all flex items-center gap-1"
              >
                {link.name}
              </Link>
              
              {/* Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-[#0b120e] rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5 p-3 flex flex-col gap-1 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-[#0b120e] before:rotate-45 before:border-l before:border-t before:border-white/5">
                    {link.dropdown.map((item, i) => (
                      <Link key={i} to={link.href} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group/item relative z-10">
                        <div className="mt-0.5 text-zinc-500 group-hover/item:text-primary transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">{item.title}</span>
                            {item.badge && (
                              <span className="bg-[#f05a28] text-white text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
