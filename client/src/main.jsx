
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AuthProvider from './context/authContext/AuthContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <App />
  </AuthProvider>
 
);
