import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../Env';

function Update() {
    const [updatemsg, setUpdatemsg] = useState("")
    const [id, setId] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [states, setStates] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const redirect = useNavigate();


      useEffect(()=>{
          setId(localStorage.getItem("id"));
          setFirstname(localStorage.getItem("firstName"));
          setLastname(localStorage.getItem("lastName"));
          setEmail(localStorage.getItem("email"));
          setAddress(localStorage.getItem("address"));
          setPhone(localStorage.getItem("phone"));
          setCity(localStorage.getItem("city"));
          setStates(localStorage.getItem("states"));
          setCountry(localStorage.getItem("country"));
          setPostalCode(localStorage.getItem('postalCode'));
      },[])
      const updatesData = {id, firstName, lastName, email, phone, city, states, country, address, postalCode }
    const updateData = async(e)=>{
        e.preventDefault();
      await axios.put(API_URL + id, updatesData)
      .then((res)=>{
         setUpdatemsg("User Updated");
         setTimeout(() => {
             redirect("/read")
          
         }, 1000);
      }).catch((err)=>{
          console.log(err);
      })
    }
  return (
    <div>
            <div className="container">
                <div className="row py-3 mt-2 mb-2">
                    <div className="col-md-6 offset-md-3">
                        <h3>Add User Details</h3>
                        <form onSubmit={updateData}>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Firstname' className='form-control' value={firstName} onChange={e => setFirstname(e.target.value)} />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Lastname' className='form-control' value={lastName} onChange={e => setLastname(e.target.value)} />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Email' className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Phone Number' className='form-control' value={phone} onChange={e => setPhone(e.target.value)} />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Address' className='form-control' value={address} onChange={e => setAddress(e.target.value)} />
                            </div>

                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter City' className='form-control' value={city} onChange={e => setCity(e.target.value)} />
                          
                            </div>
                        
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter State' className='form-control' value={states} onChange={e => setStates(e.target.value)} />
                          
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Country' className='form-control' value={country} onChange={e => setCountry(e.target.value)} />
                          
                            </div>
                            <div className="form-group py-2">
                                <input type="text" value={postalCode}  placeholder='Enter Postalcode' className='form-control' onChange={e => setPostalCode(e.target.value)} />
                            </div>

                            <button type='submit' className='btn btn-primary'>UPDATE DETAILS</button>
                        </form>
                        {updatemsg && <div class="alert alert-success mt-3" role="alert">
                            {updatemsg}
                        </div>}

                   


                    </div>
                </div>
            </div>
    </div>
  )
}

export default Update