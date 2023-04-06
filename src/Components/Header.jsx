import React, { useEffect, useState } from 'react';
import "./Header.scss";
import {AiTwotoneHome, AiOutlineUser, AiOutlineCopyright} from "react-icons/ai";
import {BsBook, BsFillPencilFill, BsBalloonHeart} from "react-icons/bs";
import {MdAutoGraph} from "react-icons/md";
import {DiPhotoshop} from "react-icons/di"
const Header = () => {
    const [header,setHeader] = useState();
    const stickyNav = () => {
        const offset = window.scrollY;
        if(offset > 200){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", stickyNav)
    },[])
  return (
    <>
    <header className={`${header ? "header header-sticky" :"header"}`}>
        <ul className='header-ul mainContainer'>
            <li className='header-ul__li'>
                <AiTwotoneHome size={25}/>
                Home
            </li>
            <li className='header-ul__li'>
                <AiOutlineUser size={25}/>
                User Photos
            </li>
            <li className='header-ul__li'>
                <BsBook size={25}/>
                Documentation
            </li>
            <li className='header-ul__li'>
                <BsFillPencilFill size={25}/>
                Change Log
            </li>
            <li className='header-ul__li'>
                <MdAutoGraph size={25}/>
                Stats $ Graphs
            </li>
            <li className='header-ul__li'>
                <BsBalloonHeart size={25}/>
                Donate
            </li>
            <li className='header-ul__li'>
                <AiOutlineCopyright size={25}/>
                Copyright Notice
            </li>
            <li className='header-ul__li'>
                <DiPhotoshop size={25}/>
                PhotoShop Extension
            </li>
        </ul>
    </header>
    </>
  )
}

export default Header