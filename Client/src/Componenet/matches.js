import React from 'react'
import { Link } from "react-router-dom";

export default function Matches(props) {
  return (
    <div className="container">
    <div className="card mb-3" >
    <div className="card-body">
        <h2 className="card-title" class="text-center">{props.matchname}</h2>
        <p className="card-text" class="text-center">{props.description}</p>
        <p className="card-text" class="text-center">
            <small className="text-muted" >Join Now</small>
        </p>
    </div>
    <div class="col text-center">
            <Link to={`/matchl/${props.id}`} className="btn btn-success">Join Now &emsp;<i class="fa-solid fa-right-to-bracket"></i>
            </Link>
    </div>
    <br></br>
    <br></br>
</div>
</div>
  )
}
