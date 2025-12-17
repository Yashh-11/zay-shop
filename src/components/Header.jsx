import React from 'react'
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const Header = () => {
    return (
        <header>
            <div className="topbar">
                <div className="container">
                    <div className='row'>
                        <div className="top d-flex justify-between item-center">
                        <ul className='icon d-flex'>
                            <li className='d-flex item-center'><a href=""><IoMailSharp /></a><span>info@company.com </span></li>
                            <li className='d-flex item-center'><a href="" ><FaPhone /></a><span>010-020-0340</span></li>
                        </ul>
                        <ul className='social d-flex'>
                            <li className='d-flex item-center'><a href=""><FaFacebookF /></a></li>
                            <li className='d-flex item-center'><a href="" ><FaInstagram /></a></li>
                            <li className='d-flex item-center'><a href="" ><FaTwitter /></a></li>
                            <li className='d-flex item-center'><a href="" ><FaLinkedin /></a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='nav d-flex justify-between item-center'>
                        <span className='brand'>Zay</span>
                        <ul className='d-flex pages'>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Shop</a></li>
                            <li><a href="">Contact</a></li>

                        </ul>
                        <ul className='d-flex icon'>
                            <li className='badge-wrap'><a href=""><IoSearch /></a></li>
                            <li className='badge-wrap'><a href=""><FaCartArrowDown /></a><span className='badge'>7</span></li>
                            <li className='badge-wrap'><a href=""><FaUser /></a><span className='badge'>99+</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
