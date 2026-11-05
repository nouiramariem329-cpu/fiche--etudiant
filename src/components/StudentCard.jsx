
import { useState } from 'react';

function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] =
    useState(false);

  function basculerInformations() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  function modifierNom() {
    const nouveauNom = window.prompt(
      'Entrez le nouveau nom :',
      props.nom
    );

    if (nouveauNom && nouveauNom.trim() !== '') {
      props.onModifier(props.id, nouveauNom.trim());
    }
  }

  return (
    <div className="carte">
      {props.photo && (
        <img
          src={props.photo}
          alt={props.nom}
          className="photo-etudiant"
        />
      )}

      <h2>{props.nom}</h2>

      <p>
        <strong>Âge :</strong>{' '}
        {props.age === 0 ? 'Non renseigné' : `${props.age} ans`}
      </p>

      <p>
        <strong>Spécialité :</strong> {props.specialite}
      </p>

      <p>
        <strong>Niveau :</strong> {props.niveau}
      </p>

      <p>
        <strong>Groupe :</strong> {props.groupe}
      </p>

      <p>
        <strong>Établissement :</strong> {props.etablissement}
      </p>

      <p>
        <strong>Ville :</strong> {props.ville || 'Non renseignée'}
      </p>

      <button
        type="button"
        className="bouton"
        onClick={basculerInformations}
      >
        {coordonneesVisibles
          ? 'Masquer les informations'
          : 'Afficher les informations'}
      </button>

      {coordonneesVisibles && (
        <div>
          <p>
            <strong>Email :</strong> {props.email}
          </p>

          <p>
            <strong>Téléphone :</strong>{' '}
            {props.telephone || 'Non renseigné'}
          </p>
        </div>
      )}

      <button
        type="button"
        className="bouton"
        onClick={modifierNom}
      >
        Modifier le nom
      </button>

      <button
        type="button"
        className="bouton"
        onClick={() => props.onSupprimer(props.id)}
      >
        Supprimer
      </button>

      <a href={`mailto:${props.email}`} className="bouton">
        Contacter
      </a>
    </div>
  );
}

export default StudentCard;
