import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import userIcon from '../assets/user.png';
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from './MobileIcon';

function Header() {

    const location = useLocation();
    const space = location?.search?.slice(3)?.split("20%")?.join(" ")
    const[searchInput, setSearchInpout] = useState(space);
    const navigate = useNavigate();

    useEffect(() => {
        if(searchInput){
            navigate(`search?q=${searchInput}`)
        }
       
    },[searchInput]) 

    

    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <header className='fixed top-0 bg-black/50 h-16 w-full z-40'>
        <div className='container mx-auto px-4 h-full flex items-center'>
            <Link to={"/"}>
                <img src={logo} alt=""  width={170}/>
            </Link>
            <nav className='hidden lg:flex items-center gap-1 ml-5'>
                {
                    navigation.map((nav, index) => {
                        return(
                            <div key={nav.label}>
                                <NavLink  to={nav.href} className={({isActive}) =>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                                    {nav.label}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </nav>          
            <div className='ml-auto flex items-center gap-4'>
                <form className='flex items-center gap-2' onClick={handleSubmit}>
                    <input
                       type="text"
                       placeholder='Search here...'
                       className='bg-transparent px-4 outline-none border-none hidden lg:block'
                       onChange={(e)=> setSearchInpout(e.target.value)}
                       value={searchInput}
                     />
                    <button className='text-2xl text-white'>
                    <IoSearchOutline />
                    </button>
                </form>
                <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                    <img src={userIcon} alt="" />
                </div>
            </div>
        </div>    
    </header>
  )
}

export default Header