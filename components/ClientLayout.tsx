import React from 'react'
import Navbar from './Navbar'
import TopNav from './TopNav'

const ClientLayout = ({ children }) => {
    return (
        <div className='p-10 min-w-[1840px] min-h-screen'>
            <div className='flex items-start gap-[30px]'>
                <Navbar />
                <TopNav />
            </div>
            {children}
        </div>
    )
}

export default ClientLayout