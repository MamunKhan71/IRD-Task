import React from 'react'
import Navbar from './Navbar'

const ClientLayout = ({ children }) => {
    return (
        <div className='p-10 min-w-[1840px]'>
            <Navbar />
            {children}
            Footer
        </div>
    )
}

export default ClientLayout