
import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';

const formulaireVide = {
  nom: '',
  age: '',
  email: '',
  specialite: 'GLSI',
  niveau: '',
  groupe: '',
  etablissement: '',
  ville: '',
  telephone: '',
  photo: '',
};

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

  const [formulaire, setFormulaire] = useState(formulaireVide);
  const [afficherFormulaire, setAfficherFormulaire] = useState(false);
  const [filiereChoisie, setFiliereChoisie] = useState('Toutes');

  function changerChamp(e) {
    const { name, value } = e.target;

    setFormulaire({
      ...formulaire,
      [name]: value,
    });
  }

  function ajouterEtudiant(e) {
    e.preventDefault();

    const nouvelEtudiant = {
      ...formulaire,
      id: Date.now(),
      age: Number(formulaire.age),
    };

    setEtudiants([...etudiants, nouvelEtudiant]);
    setFormulaire({ ...formulaireVide });
    setAfficherFormulaire(false);
  }

  function supprimerEtudiant(id) {
    setEtudiants(
      etudiants.filter((etudiant) => etudiant.id !== id)
    );
  }

  function modifierEtudiant(id, nouveauNom) {
    setEtudiants(
      etudiants.map((etudiant) =>
        etudiant.id === id
          ? { ...etudiant, nom: nouveauNom }
          : etudiant
      )
    );
  }

  const etudiantsFiltres =
    filiereChoisie === 'Toutes'
      ? etudiants
      : etudiants.filter(
          (etudiant) => etudiant.specialite === filiereChoisie
        );

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
            setFormulaire({ ...formulaireVide });
            setAfficherFormulaire(true);
          }}
        >
          + Ajouter un étudiant
        </button>
      </div>

      {afficherFormulaire && (
        <div className="formulaire-container">
          <h2>Nouvelle fiche étudiant</h2>

          <form
            className="form-etudiant"
            onSubmit={ajouterEtudiant}
          >
            <input
              name="nom"
              type="text"
              placeholder="Nom et prénom"
              value={formulaire.nom}
              onChange={changerChamp}
              required
            />

            <input
              name="age"
              type="number"
              placeholder="Âge"
              min="1"
              value={formulaire.age}
              onChange={changerChamp}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formulaire.email}
              onChange={changerChamp}
              required
            />

            <input
              name="telephone"
              type="tel"
              placeholder="Téléphone"
              value={formulaire.telephone}
              onChange={changerChamp}
              required
            />

            <select
              name="specialite"
              value={formulaire.specialite}
              onChange={changerChamp}
              required
            >
              <option value="GLSI">GLSI</option>
              <option value="Autre">Autre</option>
            </select>

            <input
              name="niveau"
              type="text"
              placeholder="Niveau d'étude"
              value={formulaire.niveau}
              onChange={changerChamp}
              required
            />

            <input
              name="groupe"
              type="text"
              placeholder="Groupe"
              value={formulaire.groupe}
              onChange={changerChamp}
              required
            />

            <input
              name="etablissement"
              type="text"
              placeholder="Établissement"
              value={formulaire.etablissement}
              onChange={changerChamp}
              required
            />

            <input
              name="ville"
              type="text"
              placeholder="Ville"
              value={formulaire.ville}
              onChange={changerChamp}
              required
            />

            <input
              name="photo"
              type="text"
              placeholder="Photo (ex: /ahmed.jpg)"
              value={formulaire.photo}
              onChange={changerChamp}
            />

            <div className="actions-formulaire">
              <button type="submit" className="bouton">
                Enregistrer l'étudiant
              </button>

              <button
                type="button"
                className="bouton bouton-annuler"
                onClick={() => {
                  setAfficherFormulaire(false);
                  setFormulaire({ ...formulaireVide });
                }}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      <h2>Filtrer les étudiants</h2>

      <div className="filtre-etudiants">
        <select
          value={filiereChoisie}
          onChange={(e) => setFiliereChoisie(e.target.value)}
        >
          <option value="Toutes">Toutes les filières</option>
          <option value="GLSI">GLSI</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div className="liste-etudiants" id="etudiants">
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            {...etudiant}
            onSupprimer={supprimerEtudiant}
            onModifier={modifierEtudiant}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
