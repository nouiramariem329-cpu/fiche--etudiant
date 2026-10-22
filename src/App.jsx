
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';

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
      <Header />
      <Navbar />

      <h1>Liste des étudiants</h1>

      <div className="liste-etudiants" id="etudiants">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            {...etudiant}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
