import { motion } from 'framer-motion'
import {useState} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import { headerConstants } from '../constants/Index'
import { BiMenuAltLeft } from 'react-icons/bi'
import styles from '../styles'
import { Menu } from './Menu'
import { navVariants } from '../utils/motion'

export const Header = ({toggleTheme, mood}) => {
    const [menu, setMenu] = useState(false)

  return (
      <motion.div
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.xPaddings} header-head `}
      >
          <div className='glassItem dark:bg-[#060612db] bg-[#ffffffdb]'></div>
          <div className={`flex justify-between z-1001 h-full w-full items-center header-inner ${styles.xPaddings}`} >
            <div className='flex font-extrabold'><div className='text-[#b11000] dark:text-[#2196f3] '>Hype</div><div className='text-[#2196f3] dark:text-[#ff6151]'>Tv.</div></div>
            <div className='lg:flex justify-between items-center gap-3 hidden'>
                {
                    headerConstants.otherLinks.map((link, i) => (
                        <Link className=' bg-[#252d9432] dark:bg-gray-700 rounded-[10px] p-3' to={link.path} key={i}>{link.linkName}</Link>
                    ))
                }
                <button className='p-3 bg-[#252d9432] dark:bg-gray-700 rounded-[10px]' onClick={()=>toggleTheme(!mood)}>Toggle</button>
            </div>
            <button onClick={()=>setMenu(!menu)} className='sm:block lg:hidden'>
                <BiMenuAltLeft size={24}/>
            </button>
            {
                menu && <Menu toggleTheme={toggleTheme} mood={mood} toggleMenu={setMenu} contentArray={headerConstants.otherLinks} />
            }
          </div>
      </motion.div>
  )
}
