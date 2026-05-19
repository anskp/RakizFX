import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart2, Boxes, LineChart, Users, BadgeDollarSign, Wallet, Monitor, Copy, Activity, Handshake, Percent, Building2, Headset, Briefcase } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface NavLink {
  name: string;
  href: string;
  dropdown?: {
    title: string;
    desc: string;
    icon: React.ReactNode;
    badge?: string;
    href?: string;
  }[];
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const isLightBgPage = pathname === '/partners' || pathname === '/company';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    {
      name: 'Trading',
      href: '/trading',
      dropdown: [
        { title: 'Overview', desc: 'Access 1,000+ CFDs across global markets', icon: <BarChart2 size={20} strokeWidth={1.5} />, href: '/trading#overview' },
        { title: 'Trading Accounts', desc: 'Standard, Raw Spread, and Islamic accounts', icon: <Users size={20} strokeWidth={1.5} />, href: '/trading#accounts' },
        { title: 'Platforms', desc: 'Trade on MT4, MT5, TradingView & WebTrader', icon: <Monitor size={20} strokeWidth={1.5} />, href: '/trading#platforms' },
        { title: 'Copy Trading', desc: 'Copy, trade, and earn from top strategy providers', icon: <Copy size={20} strokeWidth={1.5} />, href: '/trading#copy-trading' },
        { title: 'Trading Fees', desc: 'Competitive spreads, commissions, and zero hidden fees', icon: <BadgeDollarSign size={20} strokeWidth={1.5} />, href: '/market#pricing' },
        { title: 'Deposit and Withdrawal', desc: 'Fast & secure deposits and withdrawals', icon: <Wallet size={20} strokeWidth={1.5} />, href: '/market#funding' },
      ]
    },
    {
      name: 'Market',
      href: '/market',
      dropdown: [
        { title: 'Forex', desc: 'Trade major, minor, and exotic currency pairs', icon: <LineChart size={20} strokeWidth={1.5} />, href: '/market#instruments' },
        { title: 'Shares CFDs', desc: 'Trade CFDs on global company blue-chip stocks', icon: <Building2 size={20} strokeWidth={1.5} />, href: '/market#instruments' },
        { title: 'Crypto CFDs', desc: 'Trade popular cryptocurrencies with 24/7 exposure', icon: <Activity size={20} strokeWidth={1.5} />, href: '/market#instruments' },
        { title: 'Indices', desc: 'Speculate on major global stock market indices', icon: <BarChart2 size={20} strokeWidth={1.5} />, href: '/market#instruments' },
        { title: 'Metals & Energies', desc: 'Trade precious safe-haven metals and oil markets', icon: <Boxes size={20} strokeWidth={1.5} />, href: '/market#instruments' },
        { title: 'ETFs & Futures', desc: 'Diversify your portfolio with sector-specific products', icon: <Briefcase size={20} strokeWidth={1.5} />, href: '/market#instruments' },
      ]
    },
    {
      name: 'Partners',
      href: '/partners',
      dropdown: [
        { title: 'Overview', desc: 'Transform your expertise into potential earnings', icon: <Handshake size={20} strokeWidth={1.5} />, href: '/partners#overview' },
        { title: 'Introducing Brokers', desc: 'Partner with RakizFx for top-tier IB commissions', icon: <Percent size={20} strokeWidth={1.5} />, href: '/partners#programs' },
        { title: 'CPA Affiliate', desc: 'Refer clients and earn industry-leading commissions', icon: <Users size={20} strokeWidth={1.5} />, href: '/partners#programs' },
      ]
    },
    {
      name: 'Company',
      href: '/company',
      dropdown: [
        { title: 'About Us', desc: 'Learn about our institutional-grade legacy', icon: <Building2 size={20} strokeWidth={1.5} />, href: '/company#about' },
        { title: 'Contact', desc: 'Get in touch with our global support team', icon: <Headset size={20} strokeWidth={1.5} />, href: '/company#contact' },
        { title: 'Careers', desc: 'Join our team of global innovators', icon: <Briefcase size={20} strokeWidth={1.5} />, href: '/company#careers' },
      ]
    }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-zinc-200 shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <a href="/" className="flex items-center group h-full">
          <img
            src="/assets/Rakiz logo.png"
            alt="RakizFx Logo"
            className="h-10 w-auto block"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 h-full">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group h-full flex items-center">
              <Link
                to={link.href}
                className={cn(
                  "px-4 py-2 text-[14px] font-semibold hover:text-primary transition-colors flex items-center gap-1",
                  (isScrolled || isLightBgPage) ? "text-zinc-700" : "text-white"
                )}
              >
                {link.name}
              </Link>

              {/* Dropdown */}
              {link.dropdown && (
                <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.10)] border border-zinc-200 p-3 flex flex-col gap-1 relative
                    before:absolute before:-top-[9px] before:left-1/2 before:-translate-x-1/2
                    before:w-4 before:h-4 before:bg-white before:rotate-45
                    before:border-l before:border-t before:border-zinc-200">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        to={item.href || link.href}
                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-50 transition-colors group/item relative z-10"
                      >
                        <div className="mt-0.5 text-zinc-400 group-hover/item:text-primary transition-colors shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-sm font-bold text-zinc-800 group-hover/item:text-primary transition-colors">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="bg-[#f05a28] text-white text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className={cn(
            "px-5 py-2 text-[13px] font-semibold hover:text-primary border hover:border-primary rounded-lg transition-all cursor-pointer",
            (isScrolled || isLightBgPage)
              ? "text-zinc-700 border-zinc-300 bg-white"
              : "text-white border-white/30 bg-white/10 backdrop-blur-sm"
          )}>
            Sign In
          </button>
          <button className="bg-primary hover:bg-primary/90 text-black px-5 py-2 text-[13px] font-bold rounded-lg transition-all cursor-pointer shadow-[0_4px_20px_rgba(0,202,115,0.25)]">
            Open Live Account
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden", (isScrolled || isLightBgPage) ? "text-zinc-700" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200 p-6 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-zinc-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-semibold text-zinc-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <hr className="border-zinc-200 my-2" />
            <button className="w-full text-center py-3 text-zinc-700 font-semibold border border-zinc-300 rounded-xl hover:border-primary hover:text-primary transition-all">
              Sign In
            </button>
            <button className="w-full bg-primary py-4 rounded-xl text-black font-bold flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,202,115,0.25)]">
              Open Live Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
