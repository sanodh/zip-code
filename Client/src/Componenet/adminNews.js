import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminNews(props) {
  const id = props.id;

  const onDelete = () => {
    if (window.confirm("Do you want to delete this")) {
      axios.delete(`http://localhost:8000/deleteNews/${id}`).then((res) => {
        alert("Deleted successfuly");
      });
    } else {
      alert("Record not deleted");
    }
  };

  return (
    <div class="card-deck" style={{ width: "40rem", height: "37rem" }}>
      <div className="card">
        <img
          className="card-img-top"
          style={{ height: "25rem" }}
          alt="..."
          src={props.photo}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <button className="btn btn-success">
              <Link className="btn btn-success " to={`/updateNews/${id}`}>
                Edit
              </Link>
            </button>
            &nbsp;
            <button className="btn btn-danger" onClick={onDelete}>
              <a className="btn btn-danger">Delete</a>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminNews;
