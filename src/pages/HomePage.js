import React from 'react'
import styles from '../styles'
import {fakeData} from '../constants/Index'
export const HomePage = () => {
  console.log(fakeData.length)
  return (
    <div className={`${styles.paddings}  ${styles.interWidth} pt-[100px] -z-10 flex flex-col items-center m-auto`}>

      <div className=' w-full rounded-md m-auto'>
        <img src={fakeData[7].imgUrl} alt="" className='rounded-md oject-contain w-full' />
        <div className='w-full h-1/2 bottom-0 rounded-b-md p-6 header-img '>
          <div>
            <div>{fakeData[7].name}</div>
            <div>{fakeData[7].company}</div>
          </div>
        </div>
      </div>
      <div className="">
        {
          fakeData.map((data, i) => (
            <div className='relative w-full' key={i}>
              
            </div>
          ))
       }
      </div>
    </div>
  )
}
