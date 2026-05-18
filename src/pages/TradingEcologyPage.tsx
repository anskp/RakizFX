import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer, ArchitectureReliability } from '../components/Footer';
import { Platform } from '../components/Platform';
import { TradingPlatforms } from '../components/TradingPlatforms';

export default function TradingEcologyPage() {
  return (
    <div className="min-h-screen bg-dk text-tx selection:bg-nn/20 selection:text-nn">
      <Navbar />
      
      <main className="pt-20">
        <Platform />
        <TradingPlatforms />
        <ArchitectureReliability />
      </main>

      <Footer />
    </div>
  );
}
