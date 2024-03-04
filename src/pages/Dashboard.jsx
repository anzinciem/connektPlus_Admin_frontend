import React, { useEffect, useState } from 'react'
import { sb } from 'react-pro-sidebar'
import Sidebar from '../components/Sidebar'
import SmallSidebar from '../components/SmallSidebar'
import { useNavigate } from 'react-router-dom'
import { getUserDataApi } from '../server/allApi'

function Dashboard() {
    const [toggle, setToggle] = useState(false)
    const [userData, setUserData] = useState([])
    const navigate = useNavigate();


    const handleToggle=()=>{
        setToggle(prevToggle => !prevToggle);
    }

    const handleLogout=()=>{
        sessionStorage.removeItem("existingAdmin")
        sessionStorage.removeItem("token")
        navigate('/')
    }

    useEffect(()=>{
        const fetchUserData=async()=>{
          try{
            const response = await getUserDataApi()
            console.log(response.data);
            setUserData(response.data)
          }catch(err){
            console.log(err);
          }
          
        }
        fetchUserData()
      },[])
  return (
    <div style={{overflowX:"hidden"}}>
        {/* top-navbar */}
            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark fixed-top">
                {/* <!-- Navbar Brand--> */}
                <a class="navbar-brand ps-3" href="index.html">ConnektPlus</a>
                {/* <!-- Sidebar Toggle--> */}
                

                <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" style={{color:"#9a9b9c"}} id="sidebarToggle" onClick={handleToggle} href="#!"><i class="fas fa-bars"></i></button>
                {/* <!-- Navbar Search--> */}
                <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                    </div>
                </form>
                {/* <!-- Navbar--> */}
                <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#!">Settings</a></li>
                            <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li onClick={handleLogout}><a class="dropdown-item" href="#!">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            {/* sidebar */}
        <div className='row d-flex'>
            <div>
                {toggle && <div className='bg-dark pe-4 ps-2' style={{height:"100vh",position:"fixed",zIndex:"1"}}>
                        <Sidebar/>
                    </div>}
            </div>
            {/* <div>
                {toggle?(<div className='bg-dark pe-4' style={{height:"100vh",position:"fixed"}}>
                    <Sidebar/>
                </div>):
                (<div className='bg-dark' style={{height:"100vh",position:"fixed"}}>
                <SmallSidebar/>
            </div>
            )}
            </div> */}
            {/* dashboard */}
            {/* <div className='row ps-0 pe-0 pt-5 d-flex justify-content-center align-items-center'  style={{ marginLeft: toggle ? '150px' : '100px', flex: '1',width:"100%"}}>
             */}
             <div className='row ps-0 pe-0 pt-5 d-flex justify-content-center align-items-center'  style={{ marginLeft: toggle ? '150px':"5px",flex:"1",width:"100%"}}>
                <div id="layoutSidenav">
                    
                    <div id="layoutSidenav_content">
                        <main>
                            <div class="container-fluid px-4">
                                <h1 class="mt-4">Dashboard</h1>
                                <ol class="breadcrumb mb-4">
                                    <li class="breadcrumb-item active">Dashboard</li>
                                </ol>
                                <div class="row">
                                    <div class="col-xl-3 col-md-6">
                                        <div class="card bg-primary text-white mb-4">
                                            <div class="card-body">Primary Card</div>
                                            <div class="card-footer d-flex align-items-center justify-content-between">
                                                <a class="small text-white stretched-link" href="#">View Details</a>
                                                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-6">
                                        <div class="card bg-warning text-white mb-4">
                                            <div class="card-body">Warning Card</div>
                                            <div class="card-footer d-flex align-items-center justify-content-between">
                                                <a class="small text-white stretched-link" href="#">View Details</a>
                                                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-6">
                                        <div class="card bg-success text-white mb-4">
                                            <div class="card-body">Success Card</div>
                                            <div class="card-footer d-flex align-items-center justify-content-between">
                                                <a class="small text-white stretched-link" href="#">View Details</a>
                                                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-6">
                                        <div class="card bg-danger text-white mb-4">
                                            <div class="card-body">Danger Card</div>
                                            <div class="card-footer d-flex align-items-center justify-content-between">
                                                <a class="small text-white stretched-link" href="#">View Details</a>
                                                <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-6">
                                        <div class="card mb-4">
                                            <div class="card-header">
                                                <i class="fas fa-chart-area me-1"></i>
                                                Area Chart Example
                                            </div>
                                            <div class="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="card mb-4">
                                            <div class="card-header">
                                                <i class="fas fa-chart-bar me-1"></i>
                                                Bar Chart Example
                                            </div>
                                            <div class="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <i class="fas fa-table me-1"></i>
                                        DataTable Example
                                    </div>
                                    <div class="card-body">
                                        <table id="datatablesSimple" className='table table-hover'>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>User Id</th>
                                                    <th>Subscribed User Emails</th>
                                                   {/* <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th> */}
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                <th>#</th>
                                                <th>User Id</th>
                                                <th>Subscribed User Emails</th>
                                                {/* <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th> */}
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {userData?.length>0?
                                                userData.map((item, index)=>( 
                                                    <tr key={item._id}>
                                                        <td>{index+1}</td>
                                                        <td>{item._id}</td>
                                                        <td>{item.email}</td>
                                                        {/* <td>Edinburgh</td>
                                                        <td>61</td>
                                                        <td>2011/04/25</td>
                                                        <td>$320,800</td> */}
                                                    </tr>

                                                )):
                                                <p>No User Data</p>}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <footer class="py-4 bg-light mt-auto">
                            <div class="container-fluid px-4">
                                <div class="d-flex align-items-center justify-content-between small">
                                    <div class="text-muted">Copyright &copy; Your Website 2023</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        &middot;
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard