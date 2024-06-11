import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {

    const [login,setData]=useState(
        {
                "name":'',
                "dob":'',
                "blood":'',
                "mob":'',
                "add":'',
                "pin":'',
                "dis":'',
                "uname":'',
                "pwd":'',
                "confirm":''
        }
    )
    const inputHandler=(event)=>{
        setData({...login,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(login)
        axios.post("http://localhost:8081/register",login).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Sucessfully added")
                } else {
                    alert("error!")
                }
            }
        ).catch()
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control"  name='name' value={login.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input type="text" className="form-control" name='dob' value={login.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Blood group</label>
                            <select name="blood" id="" className="form-control" value={login.blood} onChange={inputHandler}>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Mobile</label>
                            <input type="text" className="form-control" name='mob' value={login.mob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                        <input type="text" className="form-control" name='add' value={login.add} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PinCode</label>
                        <input type="text" className="form-control"  name='pin' value={login.pin} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">District</label>
                            <select name="dis" id="" className="form-control" value={login.dis} onChange={inputHandler}>
                                <option value="Alappuzha">Alappuzha</option>
                                <option value="Ernakulam">Ernakulam</option>
                                <option value="Idukki">Idukki</option>
                                <option value="Kannur">Kannur</option>
                                <option value="Kasaragod">Kasaragod</option>
                                <option value="Kollam">Kollam</option>
                                <option value="Kottayam">Kottayam</option>
                                <option value="Malappuram">Malappuram</option>
                                <option value="Palakkad">Palakkad</option>
                                <option value="Pathanamthitta">Pathanamthitta</option>
                                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                <option value="Thrissur">Thrissur</option>
                                <option value="Wayanad">Wayanad</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" className="form-control"  name='uname' value={login.uname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="text" className="form-control" name='pwd' value={login.pwd} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Confirm Password</label>
                        <input type="text" className="form-control" name='confirm' value={login.confirm} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                    <button className="btn btn-info" onClick={readValue}>Register</button><br></br><br></br>
                    <a href="/">
                    <button className="btn btn-info" onClick={readValue}>BackToLogin</button><br></br><br></br>
                    </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add