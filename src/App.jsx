

import './App.css';
import StudentCard from './components/StudentCard';

function App() {
  const etudiants = [
    {
      nom: 'Mariem Nouira',
      age: 22,
      email: 'nouirmariem329@gmail.com',
      specialite: 'GLSI',
      niveau: '2ème année',
      groupe: 'GLSIG2',
      etablissement: 'ISIMA Mahdia',
      ville: 'TEBOULBA',
      telephone: '25825293',
      photo: '/etudiant.jpg.jpg',
    },
    {
      nom: 'Roua Jemaa',
      age: 24,
      email: 'rouajemaa@gmail.com',
      specialite: 'GLSI',
      niveau: '2ème année',
      groupe: 'GLSIG1',
      etablissement: 'ISIMA Mahdia',
      ville: 'Mahdia',
      telephone: '56070046',
      photo: '/roua.jpg.jpg',
    },
  ];

  return (
    <div className="page">
      <h1>Liste des étudiants</h1>

      <div className="liste-etudiants">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            nom={etudiant.nom}
            age={etudiant.age}
            email={etudiant.email}
            specialite={etudiant.specialite}
            niveau={etudiant.niveau}
            groupe={etudiant.groupe}
            etablissement={etudiant.etablissement}
            ville={etudiant.ville}
            telephone={etudiant.telephone}
            photo={etudiant.photo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
