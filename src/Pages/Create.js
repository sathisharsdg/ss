import React, { useState } from 'react'
import axios from "axios";
import { API_URL } from '../Env';
import { useNavigate } from 'react-router-dom';
function Create() {
    const [success, setSuccess] = useState("")
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
    const listdata = { firstName, lastName, email, phone, city, states, country, address, postalCode }
    const addData = async (e) => {
        e.preventDefault();
        await axios.post(API_URL, listdata)
            .then((res) => {
                setSuccess("Data added successfully...!")
                setTimeout(() => {
                    redirect("/read")
                }, 1000)
            })
            .catch((err)=>{
                console.log(err);
             })
    }
    return (
        <div>
            <div className="container">
                <div className="row py-3 mt-2 mb-2">
                    <div className="col-md-6 offset-md-3">
                        <h3>Add User Details</h3>
                        <form onSubmit={addData}>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Firstname' className='form-control' onChange={e => setFirstname(e.target.value)} />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Lastname' className='form-control' onChange={e => setLastname(e.target.value)} />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Email' className='form-control' onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Phone Number' className='form-control' onChange={e => setPhone(e.target.value)} />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Address' className='form-control' onChange={e => setAddress(e.target.value)} />
                            </div>

                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter City' className='form-control'  onChange={e => setCity(e.target.value)} />
                          
                            </div>
                        
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter State' className='form-control'   onChange={e => setStates(e.target.value)} />
                          
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Country' className='form-control'   onChange={e => setCountry(e.target.value)} />
                          
                            </div>
                        
                       
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Postalcode' className='form-control' onChange={e => setPostalCode(e.target.value)} />
                            </div>

                            <button type='submit' className='btn btn-primary'>SUBMIT DETAILS</button>
                        </form>


                        {success && <div class="alert alert-success mt-3" role="alert">
                            {success}
                        </div>}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create