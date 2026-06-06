import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import $ from 'jquery';  // Import jQuery
import 'datatables.net-dt/css/dataTables.dataTables.min.css'; // Import DataTables styles
import 'datatables.net';


import Sidebar from '../../Components/Sidebar'
import HeroSection from '../../Components/HeroSection'

import { deleteNewsletter, getNewsletter, updateNewsletter } from "../../Redux/ActionCreators/NewsActionCreators"
export default function AdminNewsletter() {
  let [data, setData] = useState([])
  let [flag, setFlag] = useState(false)

  let dispatch = useDispatch()
  let NewsletterStateData = useSelector((state) => state.NewsletterStateData)

  function deleteRecord(id) {
    if (window.confirm("Are You Sure to Delete that Item : ")) {
      dispatch(deleteNewsletter({ id: id }))
      getAPIData()
    }
  }
  function updateRecord(id) {
    if (window.confirm("Are You Sure to Update Status of that Item : ")) {
      let item = data.find((x) => x.id === id)
      let index = data.findIndex((x) => x.id === id)
      dispatch(updateNewsletter({ ...item, active: !item.active }))
      data[index].active = !(data[index].active)
      setFlag(!flag)
    }
  }

  function getAPIData() {
    dispatch(getNewsletter())

    if (NewsletterStateData.length)
      setData(NewsletterStateData)
    else
      setData([])

    let time = setTimeout(() => {
      $('#DataTable').DataTable()
    }, 500);
    return time
  }
  useEffect(() => {
    let time = getAPIData()
    return () => clearTimeout(time)
  }, [NewsletterStateData.length])

  return (
    <>
      <HeroSection title="Admin" />
      <div className="container-fluid">
        <div className='row'>
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className='bg-primary text-center text-light p-2'>Newsletter</h5>
            <table className='table table-bordered table-hover table-striped' id='DataTable'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Active</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => {
                    return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td onClick={() => updateRecord(item.id)} title='Click to Change Status'>{item.active ? "Yes" : "No"}</td>
                      <td><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash'></i></button></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}