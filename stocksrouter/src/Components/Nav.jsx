import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav'>
        <Link to="/">
            <div>Home Page</div>
        </Link>
        <Link to="/directory">
            <div>All Stocks</div>
        </Link>
    </div>
  )
}
