import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileNav } from '@/components/layout/MobileNav';
import { Home } from '@/pages/Home';
import { RecipeDetail } from '@/pages/RecipeDetail';
import { Error } from '@/pages/Error';
import { currentUser } from '@/lib/mock-data';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header currentUser={currentUser} />
          <div className="flex flex-1">
            <Sidebar currentUser={currentUser} />
            <main className="flex-1 md:ml-16 lg:ml-64">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </main>
          </div>
          <MobileNav />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;