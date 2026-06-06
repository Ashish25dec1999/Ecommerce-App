import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'

import Sidebar from '../../Components/Sidebar'
import HeroSection from '../../Components/HeroSection'

import formValidators from '../../Components/Validators/formValidators'
import imageValidators from '../../Components/Validators/imageValidators'

import { updateSubCategory, getSubCategory } from "../../Redux/ActionCreators/SubcategoryActionCreators"
export default function AdminUpdateSubcategory() {
    let { id } = useParams()
    let [data, setData] = useState({
        name: "",
        pic: "",
        active: true
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "",
        pic: ""
    })
    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    let dispatch = useDispatch()
    let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)

    function getInputData(e) {
        let name = e.target.name
        let value = e.target.files ? "/subcategory/" + e.target.files[0].name : e.target.value
        // let value = e.target.files ? e.target.files[0] : e.target.value
        if (name !== "active") {
            setErrorMessage((old) => {
                return {
                    ...old,
                    [name]: e.target.files ? imageValidators(e) : formValidators(e)
                }
            })
        }
        setData((old) => {
            return {
                ...old,
                [name]: name === "active" ? (value === "1" ? true : false) : value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find((x) => x !== "")
        if (error)
            setShow(true)
        else {
            let item = SubcategoryStateData.find((x) => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase() && x.id !== id)
            if (item) {
                setShow(true)
                setErrorMessage((old) => {
                    return {
                        ...old,
                        'name': "Subcategory Name is Already Exist"
                    }
                })
            }
            else {
                //this line is used in both dumy server and real server if form has no file field
                dispatch(updateSubCategory({ ...data }))

                navigate("/admin/subcategory")
            }
        }
    }

    useEffect(() => {
        (() => {
            dispatch(getSubCategory())
            if (SubcategoryStateData.length)
                setData(SubcategoryStateData.find((x) => x.id === id))
        })()
    }, [SubcategoryStateData.length])
    return (
        <>
            <HeroSection title="Admin" />
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-center text-light p-2'>Update Subcategory <Link to="/admin/subcategory"> <i className='fa fa-backward text-light float-end'></i></Link></h5>
                        <form onSubmit={postData}>

                            <div className="mb-3">
                                <label>Name*</label>
                                <input type="text" name="name" value={data.name} onChange={getInputData} className={`form-control border-3 ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} placeholder='Subcategory Name' />
                                {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Pic*</label>
                                    <input type="file" name="pic" onChange={getInputData} className={`form-control border-3 ${show && errorMessage.pic ? 'border-danger' : 'border-primary'}`} placeholder='Subcategory Name' />
                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Active*</label>
                                    <select name="active" value={data.active ? "1" : "0"} onChange={getInputData} className='form-select border-3 border-primary'>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3">
                                <button type="submit" className='btn btn-primary w-100'>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


//without redux
// import React, { useState, useEffect } from "react";

// import Sidebar from "../../Components/Sidebar";
// import HeroSection from "../../Components/HeroSection";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { data } from "jquery";
// import formValidators from "../../Components/Validators/formValidators";
// import imageValidators from "../../Components/Validators/imageValidators";

// export default function AdminUpdateMaincategory() {
//     let { id } = useParams()
//     let [allData, setAllData] = useState([])
//     let [data, setData] = useState({
//         name: "",
//         pic: "",
//         active: true
//     })

//     let [errorMessage, setErrorMessage] = useState({
//         name: "",
//         pic: ""
//     })

//     let [show, setShow] = useState(false)
//     let navigate = useNavigate()

//     function getInptData(e) {
//         let name = e.target.name
//         let value = e.target.files ? "/maincategory/" + e.target.files[0].name : e.target.value
//         if (name !== "active") {
//             setErrorMessage((old) => {
//                 return {
//                     ...old,
//                     [name]: e.target.files ? imageValidators(e) : formValidators(e)
//                 }
//             })
//         }
//         setData((old) => {
//             return {
//                 ...old,
//                 [name]: name === "active" ? (value === "1" ? true : false) : value
//             }
//         })
//     }

//     async function postData(e) {
//         e.preventDefault();

//         let error = Object.values(errorMessage).find((x) => x !== "")
//         if (error) {
//             setShow(true);
//         }
//         else {

//             let item = allData.find((X) => X.name.toLocaleLowerCase() === data.name.toLocaleLowerCase() && X.id !== id)
//             if (item) {
//                 setShow(true)
//                 setErrorMessage((old) => {
//                     return {
//                         ...old,
//                         'name': "Maincategory Name is Already Exist"
//                     }
//                 })
//             }
//             else {
//                 let response = await fetch(`${process.env.REACT_APP_SERVER}/maincategory/${id}`, {
//                     method: "PUT",
//                     headers: {
//                         "content-type": "application/json"
//                     },
//                     body: JSON.stringify({ ...data })
//                 })

//                 response = await response.json()

//                 if (response)
//                     navigate("/admin/maincategory")
//                 else
//                     alert("Something went wrong")
//             }
//         }
//     }

//     useEffect(() => {
//         (async () => {
//             let response = await fetch(`${process.env.REACT_APP_SERVER}/maincategory`, {
//                 method: "GET",
//                 headers: {
//                     "content-type": "application.json"
//                 }
//             })
//             response = await response.json()
//             setAllData(response)
//             setData(response.find((X) => X.id === id))
//         })()
//     }, [])

//     return (
//         <>
//             <HeroSection title='Admin' />
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <Sidebar />
//                     </div>
//                     <div className="col-md-9">
//                         <h5 className="bg-primary text-light text-center p-2">Update Maincategory <Link to='/admin/maincategory'><i className="fa fa-backward text-light float-end"></i></Link></h5>
//                         <form onSubmit={postData}>

//                             <div className="mb-3">
//                                 <label>Name*</label>
//                                 <input type="text" name="name" value={data.name} onChange={getInptData} className={`form-control border-2 ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} placeholder="Maincategory Name" />
//                                 {show && errorMessage.name ? <p className="text-danger text-capitalize">{errorMessage.name}</p> : null}
//                             </div>

//                             <div className="row">
//                                 <div className="col-md-6 mb-3">
//                                     <label>Name*</label>
//                                     <input type="file" name="pic" onChange={getInptData} className={`form-control border-2 ${show && errorMessage.pic ? 'border-danger' : 'border-primary'}`} placeholder="Maincategory Name" />
//                                     {show && errorMessage.pic ? <p className="text-danger text-capitalize">{errorMessage.pic}</p> : null}
//                                 </div>
//                                 <div className="col-md-6 mb-3">
//                                     <label>Active*</label>
//                                     <select name="active" value={data.active ? "1" : "0"} onChange={getInptData} className="form-select border-2 border-primary">
//                                         <option value="1">Yes</option>
//                                         <option value="0">No</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="mb-2">
//                                 <button type="submit" className="btn btn-primary w-100">Update</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }