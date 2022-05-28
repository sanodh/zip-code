import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function AdminMatch(props) {

    const id = props.id;

    const onDelete = () => {
        if (window.confirm("Do you want to delete this")) {
            axios.delete(`http://localhost:8000/deleteMatch/${id}`).then((res) => {
                alert("Deleted successfuly");
            })
        }
        else {
            alert("Record not deleted");
        }
    }
    
            return (
                <div className="card mb-3" >
                    <div className="card-body">
                        <h5 className="card-title" class="text-center">{props.matchname}</h5>
                        <p className="card-text" class="text-center">{props.description}</p>
                        <p className="card-text" class="text-center">
                            <small className="text-muted" >Join Now</small>
                        </p>
                    </div>
                    <div class="col text-center">
                        <button className="btn btn-success">
                            <Link to={`/updateMatch/${id}`} className="btn btn-success">Edit
                            </Link>
                        </button>
                        &nbsp;
                        <button className="btn btn-danger" onClick={onDelete}>
                            <a className="btn btn-danger" >
                                Delete
                            </a>
                        </button>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            );
 
}

export default AdminMatch;
