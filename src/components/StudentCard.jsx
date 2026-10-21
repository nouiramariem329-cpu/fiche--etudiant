
function StudentCard(props) {
  return (
    <div className="carte">
      <img
        src={props.photo}
        alt={props.nom}
        className="photo-etudiant"
      />

      <h2>{props.nom}</h2>
      <p><strong>Âge :</strong> {props.age} ans</p>
      <p><strong>Email :</strong> {props.email}</p>
      <p><strong>Spécialité :</strong> {props.specialite}</p>
      <p><strong>Niveau :</strong> {props.niveau}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Établissement :</strong> {props.etablissement}</p>
      <p><strong>Ville :</strong> {props.ville}</p>
      <p><strong>Téléphone :</strong> {props.telephone}</p>

      <a href={`mailto:${props.email}`} className="bouton">
        Contacter
      </a>
    </div>
  );
}

export default StudentCard;
