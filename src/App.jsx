
import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import StudentForm from './components/StudentForm';
import Footer from './components/Footer';

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
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
      id: 2,
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
  ]);

  const [afficherFormulaire, setAfficherFormulaire] = useState(false);
  const [etudiantAModifier, setEtudiantAModifier] = useState(null);
  const [filiereChoisie, setFiliereChoisie] = useState('Toutes');
  const [recherche, setRecherche] = useState('');
const [rechercheAppliquee, setRechercheAppliquee] = useState('');
  function ajouterEtudiant(nouvelEtudiant) {
    const etudiant = {
      ...nouvelEtudiant,
      id: Date.now(),
    };

    setEtudiants([...etudiants, etudiant]);
    fermerFormulaire();
  }

  function supprimerEtudiant(id) {
    setEtudiants(
      etudiants.filter((etudiant) => etudiant.id !== id)
    );
  }

  function ouvrirModification(etudiant) {
    setEtudiantAModifier(etudiant);
    setAfficherFormulaire(true);
  }

  function modifierEtudiant(id, donneesModifiees) {
    setEtudiants(
      etudiants.map((etudiant) =>
        etudiant.id === id
          ? { ...etudiant, ...donneesModifiees }
          : etudiant
      )
    );

    fermerFormulaire();
  }

  function fermerFormulaire() {
    setAfficherFormulaire(false);
    setEtudiantAModifier(null);
  }
  

 const etudiantsFiltres = etudiants.filter((etudiant) => {
  const correspondFiliere =
    filiereChoisie === 'Toutes' ||
    etudiant.specialite === filiereChoisie;

  const correspondRecherche =
    etudiant.nom
      .toLowerCase()
      .includes(rechercheAppliquee.toLowerCase());

  return correspondFiliere && correspondRecherche;
});

  return (
    <div className="page">
      <Header />
      <Navbar />

      <h1>Liste des étudiants</h1>

      <div className="gestion-etudiants">
        <button
          type="button"
          className="bouton"
          onClick={() => {
            setEtudiantAModifier(null);
            setAfficherFormulaire(!afficherFormulaire);
          }}
        >
          {afficherFormulaire
            ? 'Fermer le formulaire'
            : '+ Ajouter un étudiant'}
        </button>
      </div>

      {afficherFormulaire && (
        <div className="formulaire-container">
          <StudentForm
            onAjouterEtudiant={ajouterEtudiant}
            etudiantAModifier={etudiantAModifier}
            onModifierEtudiant={modifierEtudiant}
            onAnnuler={fermerFormulaire}
          />
        </div>
      )}
      <h2>Rechercher un étudiant</h2>

<form
  className="recherche-etudiants"
  onSubmit={(e) => {
    e.preventDefault();
    setRechercheAppliquee(recherche.trim());
  }}
  
>
  <input
    type="text"
    placeholder="Entrer le nom de l'étudiant..."
    value={recherche}
    onChange={(e) => setRecherche(e.target.value)}
  />

  <button type="submit">
    Rechercher
  </button>
</form>
      <h2>Filtrer les étudiants</h2>

      <div className="filtre-etudiants">
  <select
    value={filiereChoisie}
    onChange={(e) => setFiliereChoisie(e.target.value)}
  >
    <option value="Toutes">Toutes les filières</option>
    <option value="GLSI">GLSI</option>
    <option value="IRS">IRS</option>
    <option value="TI">TI</option>
    <option value="Autre">Autre</option>
  </select>
</div>
      <div className="liste-etudiants" id="etudiants">
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            {...etudiant}
            onSupprimer={supprimerEtudiant}
            onModifier={ouvrirModification}
          />
        ))}
      </div>
{etudiantsFiltres.length === 0 && (
  <p>Aucun étudiant trouvé !</p>
)}
      <Footer />
    </div>
  );
}

export default App;
