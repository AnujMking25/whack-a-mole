import React from 'react'
import whock_a_hole from '../../asset/whack-a-mole.png'
import classess from './Screenpage.module.css'
const Screenpage = () => {
  return (
    <div className={classess.maindiv}>
      <img src={whock_a_hole} alt="whack_a_mole" />
    </div>
  )
}

export default Screenpage