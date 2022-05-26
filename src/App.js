
import './App.css';
import Header from './components/Header/Header';
import ProjectManagements from './components/ProjectManagements/ProjectManagements';
import SideMenue from './components/SideMenue/SideMenue';

function App() {
  return (
    <div className="layout">
      <div className="rightSide">
        <SideMenue className="sideMenue" />
      </div>
      <div className="leftSide">
        <Header />
        <ProjectManagements />
      </div>
    </div>
  );
}

export default App;
