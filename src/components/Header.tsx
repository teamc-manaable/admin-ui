import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Modal } from './ui/Modal';
import { LoginForm } from './forms/LoginForm';

export function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { login } = useAuth();

  const handleLogin = (data: { email: string; password: string }) => {
    const success = login(data.email, data.password);
    if (success) {
      setIsLoginModalOpen(false);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <header className="bg-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-white" />
            <span className="ml-2 text-white text-xl font-bold">UpSkillU</span>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-white">Welcome, {user?.name}</span>
                <button 
                  className="text-white hover:text-indigo-100"
                  onClick={() => logout()}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title="Sign In"
      >
        <LoginForm
          onSubmit={handleLogin}
          onCancel={() => setIsLoginModalOpen(false)}
        />
      </Modal>
    </header>
  );
}