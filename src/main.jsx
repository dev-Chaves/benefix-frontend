import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

// Páginas
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/AdminDashboard'
import Users from './pages/Users'
import Companies from './pages/Companies'
import Benefits from './pages/Benefits'

// Componentes
import ProtectedRoute from './components/ProtectedRoute'

// Contextos
import { AuthProvider } from './contexts/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rota principal */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Rotas de autenticação */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          
          {/* Rotas protegidas */}
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/users" 
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/companies" 
            element={
              <ProtectedRoute>
                <Companies />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/benefits" 
            element={
              <ProtectedRoute>
                <Benefits />
              </ProtectedRoute>
            } 
          />
          
          {/* Rota de fallback - redireciona para home */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>,
)