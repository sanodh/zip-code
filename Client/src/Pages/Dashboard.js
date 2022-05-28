import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import News from "../Componenet/News";
import { Link } from "react-router-dom";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
        <a className="navbar-brand">Dashboard</a>&emsp;&emsp;&emsp;&emsp;
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          <ul className="navbar-nav text-right">
            {(name === "sanodh dulsanda") && (
              <li >
                <a className="nav-link" a href="/admindashboard">Admin Dashboard</a>
              </li>
            )}
            <li >
              <a className="nav-link" a href="/leaderboard">Leaderboard</a>
            </li>
            <li >
              <a className="nav-link" a href="/viewmatches">View Match</a>
            </li>
            <li >
              <a className="nav-link" a href="/profile">{name}</a>
            </li>
            <button className="btn btn-success ml-auto mr-1" onClick={logout}>Log Out</button>
          </ul>
        </div>
      </nav>
      <News />
    </div >
  );
}

export default Dashboard;
