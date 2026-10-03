import React from 'react';
import { createRoot } from 'react-dom/client';
import MedicalLearningPlatform from './app/MedicalLearningPlatform.jsx';
import './index.css';
import './features/platform/course-first.css';
import './features/learning/learning-workspace.css';
import './features/learning/study-depth.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MedicalLearningPlatform />
  </React.StrictMode>
);
