import React from 'react'

const NavBar = ({filterItem, navList}) => {
  return (
    <>
    <nav className='navbar'>
      <div className="btn-group">
        {
          navList.map((curElem) => {
            return (
              <>
               <button className='btn-group__item' onClick={() => filterItem(curElem)}>{curElem}</button>
              </>
            )
          })
        }
      </div>

    </nav></>
  )
}

export default NavBar