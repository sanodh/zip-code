import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import News from "../Componenet/News";

function AdminDashboard() {
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="card mb-3 bg-warning" style={{ width: "1200px" }}>
        <div className="row g-0">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Admin Dashboard</h5>
              <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Manage News</h5>
                      <p className="card-text">Manage all news in system.</p>
                      <a href="/news" className="btn btn-primary">
                        Click Here &emsp; <i class="fa-solid fa-newspaper"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Leaderboard</h5>
                      <p className="card-text">
                        View leaderboard for each matches.
                      </p>
                      <a href="/leaderboard" className="btn btn-primary">
                        Click Here &emsp; <i class="fa-solid fa-star"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Manage User Profiles</h5>
                      <p className="card-text">
                        Manage user profile in system.
                      </p>
                      <a href="/mprofile" className="btn btn-primary">
                        Click Here &emsp; <i class="fa-solid fa-users"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Create Match</h5>
                      <p className="card-text">Create New Match</p>
                      <a href="/addMatch" className="btn btn-primary">
                        Click Here &emsp; <i class="fa-solid fa-gun"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Manage Match</h5>
                      <p className="card-text">Manage Match.</p>
                      <a href="/match" className="btn btn-primary">
                        Click Here &emsp; <i class="fa-solid fa-list-check"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Back to Dashboard </h5>
                      <p className="card-text">Back to main Dashboard.</p>
                      <a href="/dashboard" className="btn btn-danger">
                        Click here &emsp; <i class="fa-solid fa-house"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
