import React from 'react'
import Navbar from './Navbar'
import TopNav from './TopNav'

const ClientLayout = ({ children }) => {
    return (
        <div className='p-10 min-w-[1840px]'>
            <TopNav />
            <div className='flex items-start gap-[30px] w-full'>
                <Navbar />
                {/* <TopNav /> */}
                {children}
            </div>
        </div>
    )
}

export default ClientLayout