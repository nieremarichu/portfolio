'use client'
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Home from '../pages/home';
import Experience from '../components/Experience';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import { initAOS } from '@/config/client-entry';

function App() {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Home />
        <Experience />
        <Skill />
        <Contact />
      </main>
    </div>
  );
}

export default App;

