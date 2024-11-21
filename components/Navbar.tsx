import React from 'react'
import HomeIcon from './Icons/HomeIcon'
import GridIcon from './Icons/GridIcon'
import BulbIcon from './Icons/BulbIcon'
import BookmarkIcon from './Icons/BookmarkIcon'
import JarIcon from './Icons/JarIcon'
import LeafIcon from './Icons/LeafIcon'
import OpenBookIcon from './Icons/OpenBookIcon'
import Link from 'next/link'
import LoveHandsIcon from './Icons/LoveHandsIcon'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="font-inter w-[100px] rounded-2xl h-[92vh]">
      <div className='flex px-3 py-7 gap-7 h-full flex-col items-center justify-between bg-white rounded-xl'>
        <div>
          <Image height={73} width={73} src="https://res.cloudinary.com/dfwmhlhyo/image/upload/v1732172076/lgo_spckqu.png" alt="" />
        </div>
        <div className='flex flex-col gap-4'>
          {
            navbarItems?.map(item => (
              <Link href={item.href} key={item.title} className='flex items-center justify-center bg-[#E8F0F5] h-12 w-12 rounded-full'>
                <item.icon />
              </Link>
            ))
          }

        </div>
        <div className='bg-[#1FA45B] w-16 h-16 rounded-xl flex items-center justify-center'>
          <LoveHandsIcon />
        </div>
      </div>
    </div>
  )
}

export default Navbar


const navbarItems = [
  {
    icon: HomeIcon,
    title: "Home",
    href: "#"
  },
  {
    icon: GridIcon,
    title: "Dashboard",
    href: "#"
  },
  {
    icon: BulbIcon,
    title: "Discover",
    href: "#"
  },
  {
    icon: BookmarkIcon,
    title: "Bookmark",
    href: "#"
  },
  {
    icon: JarIcon,
    title: "New",
    href: "#"
  },
  {
    icon: LeafIcon,
    title: "Upcoming",
    href: "#"
  },
  {
    icon: OpenBookIcon,
    title: "Book",
    href: "#"
  }
]