import React from 'react'
import Navbar from './Navbar'
import TopNav from './TopNav'

const ClientLayout = ({ children }) => {
    return (
        <div className='p-10 min-w-[1840px] flex gap-8'>
            <Navbar />
            <div className='space-y-8'>
                <TopNav />
                {children}
            </div>
            
        </div>
    )
}

export default ClientLayout