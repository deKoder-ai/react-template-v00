import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/reset.css';
import './css/poppins.css';
import './css/styles.css';

import TodoListApp from './components/TodoList';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoListApp />
  </StrictMode>
);
