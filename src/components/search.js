import React from 'react';
import { BsSearch } from 'react-icons/bs';

export const Search = () => {
  return (
    <div className='search-container'>
            <div className='search-input-container'>
                <input className='search-input-input' placeholder="Search"/>
                <div className='search-icon'><BsSearch/></div>
            </div>
    </div>
  )
}
