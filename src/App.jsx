

import './App.css';

function App() {
  return (
    <div className="page">
      <div className="carte">
        <img 
  src="/etudiant.jpg.jpg" 
  alt="Photo de l'étudiant" 
  style={{ width: '100px', height: '130px', objectFit: 'cover', objectposition: 'top' , borderRadius: '30%', display: 'block', margin: '0 auto 20px' }} 
/>
        <div className="avatar">MN</div>
        <h2>Mariem Nouira</h2>


        <p><strong>Âge :</strong> 22 ans</p>
        <p><strong>Email :</strong> nouirmariem329@gmail.com</p>
        <p><strong>Spécialité :</strong> GLSI</p>
        <p><strong>Niveau :</strong> 2ème année</p>
        <p><strong>Groupe :</strong> GLSIG2</p>
        <p><strong>Établissement :</strong> ISIMA Mahdia</p>
        <p><strong>VILLE :</strong> TEBOULBA</p>
        <p><strong>TELEPHONE:</strong> 25825293</p>
        
 
        <a
          href="mailto:nouirmariem329@gmail.com"
          className="bouton"
        >
          Contacter
        </a>
      </div>
    </div>
  );
}

export default App;
