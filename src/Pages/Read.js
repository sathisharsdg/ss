import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../Env';
function Read() {
const [userData,setuserData] = useState([]);
const redirect = useNavigate();
const [deletemsg,setDeletemsg] = useState("");
 
 
const getUser = async()=>{
     await axios.get(API_URL)
     .then((res)=>{
          setuserData(res.data)
     })
     .catch((err)=>{
        console.log(err);
     })
}

 useEffect(()=>{
    getUser();
 },[])

 const updatePassdata = ({id,firstName,lastName,email,phone,address,postalCode,city,country,states})=>{
    redirect("/update"); 
    localStorage.setItem("id",id);
    localStorage.setItem("firstName",firstName);
    localStorage.setItem("lastName",lastName);
    localStorage.setItem("email",email);
    localStorage.setItem("phone",phone);
    localStorage.setItem("address",address);
    localStorage.setItem("city",city);
    localStorage.setItem("country",country);
    localStorage.setItem("states",states);
    localStorage.setItem("postalCode",postalCode);
 }
 const deletUser = async(id)=>{
    await axios.delete(API_URL+id)
    .then((res)=>{
        console.log("User Deleted");
        setDeletemsg("User Deleted")
        getUser();
    }).catch((err)=>{
        console.log(err);
    })
 }


    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3>User Lists</h3>
                        <table class="table py-5">
                            <thead>
                                <tr>
                                    <th scope="col" >#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Postal Code</th>
                                    <th scope="col">Update/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData.map((res)=>{
                                        return(
                                            <tr key={res.id}>
                                                <td>{res.id}</td>
                                                <td>{res.firstName}</td>
                                                <td>{res.lastName}</td>
                                                <td>{res.email}</td>
                                                <td>{res.phone}</td>
                                                <td>{res.address}</td>
                                                <td>{res.city}</td>
                                                <td>{res.states}</td>
                                                <td>{res.country}</td>
                                                <td>{res.postalCode}</td>
                                                <td>
                                                    <button onClick={()=>updatePassdata(res)} className='btn btn-primary me-3'><i className="bi bi-pencil-square"></i></button>
                                                    <button onClick={()=>deletUser(res.id)}className='btn btn-danger'><i className="bi bi-trash3"></i></button>
                                                    
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            </table>
                            {deletemsg && <div class="alert alert-danger mt-3" role="alert">
                            {deletemsg}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read