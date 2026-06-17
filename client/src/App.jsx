
import './App.css'
import Header from './components/Header';

import SkillForm from './components/SkillForm';

function App() {
  
  return (
    <div>

      <Header 
        title="AI Project Idea Generator"
        description="Generate project ideas based on your skills."
      />   
      
      <SkillForm />
      
      
    </div>
    
  );
}

export default App
