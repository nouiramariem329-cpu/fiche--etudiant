
import { useState, useEffect } from 'react';

const formulaireVide = {
  nom: '',
  age: '',
  email: '',
  telephone: '',
  specialite: 'GLSI',
  niveau: '',
  groupe: '',
  etablissement: '',
  ville: '',
  photo: '',
};

function StudentForm({
  onAjouterEtudiant,
  etudiantAModifier,
  onModifierEtudiant,
  onAnnuler,
}) {
  const [formulaire, setFormulaire] = useState(formulaireVide);

  useEffect(() => {
    if (etudiantAModifier) {
      setFormulaire({
        ...formulaireVide,
        ...etudiantAModifier,
      });
    } else {
      setFormulaire({ ...formulaireVide });
    }
  }, [etudiantAModifier]);

  function changerChamp(e) {
    const { name, value } = e.target;

    setFormulaire({
      ...formulaire,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const donnees = {
      ...formulaire,
      age: Number(formulaire.age),
    };

    if (etudiantAModifier) {
      onModifierEtudiant(etudiantAModifier.id, donnees);
    } else {
      onAjouterEtudiant(donnees);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-etudiant">
      <h2>
        {etudiantAModifier
          ? 'Modifier la fiche étudiant'
          : 'Nouvelle fiche étudiant'}
      </h2>

      <label>Nom et prénom</label>
      <input
        name="nom"
        type="text"
        value={formulaire.nom}
        onChange={changerChamp}
        required
      />

      <label>Âge</label>
      <input
        name="age"
        type="number"
        min="1"
        value={formulaire.age}
        onChange={changerChamp}
        required
      />

      <label>Email</label>
      <input
        name="email"
        type="email"
        value={formulaire.email}
        onChange={changerChamp}
        required
      />

      <label>Téléphone</label>
      <input
        name="telephone"
        type="tel"
        value={formulaire.telephone}
        onChange={changerChamp}
        required
      />

      <label>Filière</label>
      <select
  name="specialite"
  value={formulaire.specialite}
  onChange={changerChamp}
>
  <option value="">Choisir une filière</option>
  <option value="GLSI">GLSI</option>
  <option value="IRS">IRS</option>
  <option value="TI">TI</option>
  <option value="Autre">Autre</option>
</select>

      <label>Niveau d'étude</label>
      <input
        name="niveau"
        type="text"
        value={formulaire.niveau}
        onChange={changerChamp}
        required
      />

      <label>Groupe</label>
      <input
        name="groupe"
        type="text"
        value={formulaire.groupe}
        onChange={changerChamp}
        required
      />

      <label>Établissement</label>
      <input
        name="etablissement"
        type="text"
        value={formulaire.etablissement}
        onChange={changerChamp}
        required
      />

      <label>Ville</label>
      <input
        name="ville"
        type="text"
        value={formulaire.ville}
        onChange={changerChamp}
        required
      />

      <label>Photo de l'étudiant :</label>
<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const fichier = e.target.files[0];

    if (fichier) {
      const lecteur = new FileReader();

      lecteur.onloadend = () => {
        setFormulaire({
          ...formulaire,
          photo: lecteur.result
        });
      };

      lecteur.readAsDataURL(fichier);
    }
  }}
/>

      <button type="submit" className="bouton">
        {etudiantAModifier
          ? 'Enregistrer les modifications'
          : 'Ajouter'}
      </button>

      <button
        type="button"
        className="bouton bouton-annuler"
        onClick={onAnnuler}
      >
        Annuler
      </button>
    </form>
  );
}

export default StudentForm;
