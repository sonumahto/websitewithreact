import React from 'react'

export default function Header() {
   return (
       <>
       <header>
            <div className = "">
          <div className="row justify-content-center" >
            <div className="col-xl-9 d-flex align-items-center">

            
           <nav className=" navbar navbar-expand-lg fixed-top navbar-dark ">
             
            <div className="container">
             <a className="navbar-brand text-white" href>Aligator</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
             </button>
             
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link active" href>Home <span className="sr-only">(current)</span></a>
                </li>
                <li className = "nav-item">
                  <a className ="nav-link" href >Services</a>
                </li>
                <li className = "nav-item">
                  <a className ="nav-link" href >About</a>
                </li>
                <li className = "nav-item">
                  <a className ="nav-link" href >Contact</a>
                </li>
                <li className = "nav-item">
                  <a className ="nav-link" href >Our Works</a>
                </li>
              </ul>
            <button className="btn btn-get-started">Login</button>

            </div>
            
            </div>
           </nav>
           
           </div>
          </div>
           </div>
         
       </header>
       </>
   )
}
