import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";

function ListElement(props) {
  return (
    <li key={props.movie.id}>
      <div className="input-box">
        <div className="floater-left">
          <p style={{ textAlign: "center" }}>
            Movie: {props.movie.movie_title} &ensp; &ensp; &ensp;Rating:{" "}
            {props.movie.rating}
          </p>
        </div>
        <div className="floater-right">
          <EditButton handleClick={props.editButtonClick} />
          <DeleteButton
            handleClick={() => props.deleteButtonClick(props.movie.id)}
          />
        </div>
      </div>
    </li>
  );
}

export default ListElement;
