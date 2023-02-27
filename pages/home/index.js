import React, { Component,useEffect,useRef  } from "react";
import { connect } from "react-redux";
import Link from 'next/Link'
import { Container, Row } from 'react-bootstrap';
// import Slider,{ SliderlItem } from '../slider/index22'
import driveNowPlaceholder from "../../public/assets/images/car.jpg";
import Slider , { SliderlItem }  from "../slider/index";



const Home =()=>  {



	/******************* 
	@purpose : Rander HTML/ React Components
	@Author : INIC
	******************/


	
		return (
			<>
					<Slider xl={2} lg={2} md={3} sm={2}>
						<SliderlItem>
						<div  className="slider-box-img drive-car-dp" id={"drive_car_dp_"} >
   
						<img src={driveNowPlaceholder} alt="Car img" 
							className="img-fluid drive-car-dp"
						/>
						</div>
							<div className="slider-box-details">
								<h5 className='d-flex flex-column mb-0'>
								<span className="slider-cbn text-uppercase font-16 fw-regular text-black">Hello wold</span>
								<span className="slider-cbmn font-22 ff-hel-med fw-medium lh-1 text-black">Lorem</span>
								</h5>
								<div className='d-flex flex-column car-price'>
								<span className='font-24 text-right ff-hel-med discount-price'>$125</span>
								<small className='font-16'><del>$125</del> / day</small>
								

								
								</div>
							</div>
						</SliderlItem>
						<SliderlItem>
						<div  className="slider-box-img drive-car-dp" id={"drive_car_dp_"} >
   
						<img src={driveNowPlaceholder} alt="Car img" 
							className="img-fluid drive-car-dp"
						/>
						</div>
							<div className="slider-box-details">
								<h5 className='d-flex flex-column mb-0'>
								<span className="slider-cbn text-uppercase font-16 fw-regular text-black">Hello wold</span>
								<span className="slider-cbmn font-22 ff-hel-med fw-medium lh-1 text-black">Lorem</span>
								</h5>
								<div className='d-flex flex-column car-price'>
								<span className='font-24 text-right ff-hel-med discount-price'>$125</span>
								<small className='font-16'><del>$125</del> / day</small>
								

								
								</div>
							</div>
						</SliderlItem>
						<SliderlItem>
						<div  className="slider-box-img drive-car-dp" id={"drive_car_dp_"} >
   
						<img src={driveNowPlaceholder} alt="Car img" 
							className="img-fluid drive-car-dp"
						/>
						</div>
							<div className="slider-box-details">
								<h5 className='d-flex flex-column mb-0'>
								<span className="slider-cbn text-uppercase font-16 fw-regular text-black">Hello wold</span>
								<span className="slider-cbmn font-22 ff-hel-med fw-medium lh-1 text-black">Lorem</span>
								</h5>
								<div className='d-flex flex-column car-price'>
								<span className='font-24 text-right ff-hel-med discount-price'>$125</span>
								<small className='font-16'><del>$125</del> / day</small>
								

								
								</div>
							</div>
						</SliderlItem>
						<SliderlItem>
						<div  className="slider-box-img drive-car-dp" id={"drive_car_dp_"} >
   
						<img src={driveNowPlaceholder} alt="Car img" 
							className="img-fluid drive-car-dp"
						/>
						</div>
							<div className="slider-box-details">
								<h5 className='d-flex flex-column mb-0'>
								<span className="slider-cbn text-uppercase font-16 fw-regular text-black">Hello wold</span>
								<span className="slider-cbmn font-22 ff-hel-med fw-medium lh-1 text-black">Lorem</span>
								</h5>
								<div className='d-flex flex-column car-price'>
								<span className='font-24 text-right ff-hel-med discount-price'>$125</span>
								<small className='font-16'><del>$125</del> / day</small>
								

								
								</div>
							</div>
						</SliderlItem>
						<SliderlItem>
						<div  className="slider-box-img drive-car-dp" id={"drive_car_dp_"} >
   
						<img src={driveNowPlaceholder} alt="Car img" 
							className="img-fluid drive-car-dp"
						/>
						</div>
							<div className="slider-box-details">
								<h5 className='d-flex flex-column mb-0'>
								<span className="slider-cbn text-uppercase font-16 fw-regular text-black">Hello wold</span>
								<span className="slider-cbmn font-22 ff-hel-med fw-medium lh-1 text-black">Lorem</span>
								</h5>
								<div className='d-flex flex-column car-price'>
								<span className='font-24 text-right ff-hel-med discount-price'>$125</span>
								<small className='font-16'><del>$125</del> / day</small>
								

								
								</div>
							</div>
						</SliderlItem>
	
					</Slider>
			</>
		)

};
/********************
@purpose : Connect With Redux
@Parameter : {ui}
			@Author : INIC
			******************/
const mapStateToProps = ({ ui }) => ({});
export default connect(mapStateToProps)(Home);
