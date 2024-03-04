import React from 'react'

function Sidebar() {
  return (
    <div className='bg-tertiary'>
        <div id="layoutSidenav_nav" className='md-12 lg-12'>
                    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div class="sb-sidenav-menu">
                            <div class="nav flex-column">
                                <div class="sb-sidenav-menu-heading" style={{color:"#636466"}}><b>Core</b></div>
                                <a class="nav-link d-flex" href="index.html">
                                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt me-2" style={{color:"#636466"}}></i></div>
                                    <span style={{color:"#9a9b9c"}}>Dashboard</span>
                                </a>
                                <div class="sb-sidenav-menu-heading" style={{color:"#636466"}}><b>Interface</b></div>
                                <a class="nav-link collapsed d-flex" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div class="sb-nav-link-icon"><i class="fas fa-columns me-2" style={{color:"#636466"}}></i></div>
                                    <span style={{color:"#9a9b9c"}}>Layouts</span>
                                    <div class="sb-sidenav-collapse-arrow ms-2"><i class="fas fa-angle-down" style={{color:"#636466"}}></i></div>
                                </a>
                                <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav class="sb-sidenav-menu-nested nav d-flex flex-column">
                                        <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                        <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                    </nav>
                                </div>
                                <a class="nav-link collapsed d-flex" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div class="sb-nav-link-icon"><i class="fas fa-book-open me-2" style={{color:"#636466"}}></i></div>
                                    <span style={{color:"#9a9b9c"}}>Pages</span>
                                    <div class="sb-sidenav-collapse-arrow ms-2"><i class="fas fa-angle-down" style={{color:"#636466"}}></i></div>
                                </a>
                                <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                    <nav class="sb-sidenav-menu-nested nav accordion d-flex flex-column" id="sidenavAccordionPages">
                                        <div>
                                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                                Authentication
                                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down" style={{color:"#636466"}}></i></div>
                                            </a>
                                            <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                <nav class="sb-sidenav-menu-nested nav d-flex flex-column">
                                                    <a class="nav-link" href="login.html">Login</a>
                                                    <a class="nav-link" href="register.html">Register</a>
                                                    <a class="nav-link" href="password.html">Forgot Password</a>
                                                </nav>
                                            </div>
                                        </div>
                                        <div>
                                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                Error
                                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down" style={{color:"#636466"}}></i></div>
                                            </a>
                                            <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                <nav class="sb-sidenav-menu-nested nav d-flex flex-column">
                                                    <a class="nav-link" href="401.html">401 Page</a>
                                                    <a class="nav-link" href="404.html">404 Page</a>
                                                    <a class="nav-link" href="500.html">500 Page</a>
                                                </nav>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <div class="sb-sidenav-menu-heading" style={{color:"#636466"}}><b>Addons</b></div>
                                <a class="nav-link d-flex" href="charts.html">
                                    <div class="sb-nav-link-icon"><i class="fas fa-chart-area me-2" style={{color:"#636466"}}></i></div>
                                    <span style={{color:"#9a9b9c"}}>Charts</span>
                                </a>
                                <a class="nav-link d-flex" href="tables.html">
                                    <div class="sb-nav-link-icon"><i class="fas fa-table me-2" style={{color:"#636466"}}></i></div>
                                    <span style={{color:"#9a9b9c"}}>Tables</span>
                                </a>
                            </div>
                        </div>
                        <div class="sb-sidenav-footer">
                            <div class="small">Logged in as:</div>
                            Start Bootstrap
                        </div>
                    </nav>
                </div>
    </div>
  )
}

export default Sidebar