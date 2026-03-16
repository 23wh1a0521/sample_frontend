import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { SidebarProvider } from './context/SidebarContext';
import './index.css';

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Root element not found');
  
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
    </StrictMode>,
  );
} catch (error) {
  console.error('Failed to render app:', error);
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; color: #e11d48; font-family: sans-serif;">
        <h1 style="font-size: 20px; margin-bottom: 10px;">Failed to render application</h1>
        <pre style="background: #f1f5f9; padding: 10px; border-radius: 8px; overflow: auto; font-size: 12px;">${error instanceof Error ? error.stack : String(error)}</pre>
      </div>
    `;
  }
}
