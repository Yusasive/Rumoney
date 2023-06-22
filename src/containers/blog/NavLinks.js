import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const NavLinks = ({categories}) => {
    const { pathname } = useLocation();

    console.log(categories)
  return (
    <nav>
        <ul className='menu-lists'>
         <Link to="/">
            <li className='list'>ALL</li>
         </Link>
         {
            categories?.map(category => (
                <Link key={category.slug} to={`/posts/${category.slug}`}>
                   <li className='list'>
                      {category.name}
                    </li> 
                </Link>
            ))
         }
        </ul>
      
    </nav>
  )
}

export default NavLinks;
