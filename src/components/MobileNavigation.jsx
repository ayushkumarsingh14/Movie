import React from 'react'
import { mobileIcon } from './MobileIcon'
import { NavLink } from 'react-router-dom'

function MobileNavigation() {
  return (
   <section className='fixed h-14 lg:hidden bg-black-600/70 backdrop-blur-2xl bottom-0 w-full z-40'>
      <div className='flex items-center justify-between h-full text-neutral-400'>
        {
            mobileIcon.map((nav, index)=> {
                return(
                   <NavLink
                      key={nav.label+"mobileIcon"}
                      to={nav.href}
                      className={({isActive})=>`px-3 h-full flex items-center flex-col ${isActive && "text-white"}`}
                    >
                        <div className='text-3xl'>
                            {nav.icon}
                        </div>
                        <p className='text-sm'>{nav.label}</p>
                   </NavLink>
                        
                )
            })
        }
      </div>
   </section>
  )
}

export default MobileNavigation