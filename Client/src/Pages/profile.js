import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../css/Profile.css";
import { Link } from "react-router-dom"
import { auth, db, logout, registerWithEmailAndPassword } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "firebase/database";
import axios from 'axios';

function Profile() {


    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const [mobileNum, setmobileNum] = useState("");
    const [address, setAddress] = useState("");
    const [organization, setOrganization] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [age, setAge] = useState("");
    const [description, setDescription] = useState("");

    const profile = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setName(data.name);
            setemail(data.email);
            setpassword(data.password);
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

    let data = {
        name: name,
        mobileNum: mobileNum,
        address: address,
        email: email,
        organization: organization,
        country: country,
        state: state,
        age: age,
        description: description,
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post("http://localhost:8000/createprofile", data);
            if (res.status === 200) {
                console.log(data);
                alert("Profile created successfully");
            } else {
                alert("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                        <span class="font-weight-bold">{name}</span>
                        <span class="text-black-50">{email}</span>
                        <span></span>
                    </div>
                </div>
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Profile Settings</h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" onChange={(e) => setName(e.target.value)} value={name} readOnly /></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" onChange={(e) => setmobileNum(e.target.value)} /></div>
                            <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address line 1" onChange={(e) => setAddress(e.target.value)} /></div>
                            <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" onChange={(e) => setemail(e.target.value)} placeholder="enter email id" value={email} readOnly /></div>
                            <div class="col-md-12"><label class="labels">School/Club Name</label><input type="text" class="form-control" placeholder="enter your school or club name" onChange={(e) => setOrganization(e.target.value)} /></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" onChange={(e) => setCountry(e.target.value)} /></div>
                            <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" placeholder="state" onChange={(e) => setState(e.target.value)} /></div>
                        </div>
                        <div class="mt-5 text-center"><button class="btn btn-outline-primary profile-button" type="button" onClick={handleSubmit}>Save Profile</button></div>
                        <div class="mt-5 text-center"><button class="btn btn-outline-info profile-button" type="button" ><Link to={`/vprofile/${name}`} class="text-decoration-none text-black">View Profile</Link></button></div>
                        <div class="mt-5 text-center"><button class="btn btn-outline-warning profile-button" type="button" ><a href="/dashboard" class="text-decoration-none text-black">Dashboard</a></button></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 py-5">
                        <br />
                        <div class="col-md-12"><label class="labels">Age</label><input type="text" class="form-control" placeholder="Age" onChange={(e) => setAge(e.target.value)} /></div> <br />
                        <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" onChange={(e) => setDescription(e.target.value)} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
