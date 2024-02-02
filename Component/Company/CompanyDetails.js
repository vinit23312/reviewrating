import React, { useEffect } from 'react'
import star from "../../assets/pr1.jpg";
import men from "../../assets/MaleImg.jpeg";
import listimage1 from "../../assets/CompanyImg2.avif";
import './CompanyDetails.css';
import Navbar_new from '../../navbar/Navbar_new';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyDetails } from '../../features/company/CompanySlice';


export default function ComanyDetails() {

  const dispatch= useDispatch();
  const param = useParams();
  const {id}= param;
  const companyData = useSelector((state)=> state.company);

  const { company_details, compDetails_msg} = companyData;
  const { companyDetails,comments} = company_details;

  // console.log(companyDetails);
  
  const { companyName,company_logo,city,founded,location}={
    ...companyDetails,
  }

  useEffect(()=>{
    dispatch(getCompanyDetails(id));
  },[]);

  return (
    <div className="companylist-container">
    <Navbar_new/>
        {/* <div className="company-navbar">
          <div className="company-navleft">
            <h1>Review&RATE</h1>
            <img className="navstar-image" src={star}></img>
          </div>
          <div className="company-navright">
            <h4 className="welcome5">Welcometest5</h4>
            <img className="navmen-image" src={men}></img>
            <button className="compannybutton">Logout</button>
          </div>
        </div> */}
       
        
        <div className="company-listR">
           
          <div className="company-list1R">
          <img className="list-imageR" src={`http://localhost:9000${company_logo}`}></img>
          <p>
          <br/>
            Company Name : {companyName}
            <br/>
           Founded : {founded}
            <button className="addreview-btnR"><Link to={`/AddNewreview/${id}`}>Add review</Link></button><br/>
            
           Location : {location}<br/>
           City : {city}

           
          </p>
          </div>
         <br/><br/>
          <hr className='RRR-h'/>
          {comments && 
          comments.map((value)=>(
          <div className="company-list2R">
          <div className="review-company1R">
          <img className="review-imageR" src={`http://localhost:9000${value.user_id.profilepic}`}></img>
          
          </div>
          
          <div className="review-company2R">
         <h2> Name:{value.user_id.name}</h2>
         <p>{value.createdAt.slice(0,10)}</p>
          <p>{value.review}</p>
         <p className='RRR-sta'>{value.rating}</p>
         </div>
          </div>
          ))}

        </div>
       
      </div>
  )
}
