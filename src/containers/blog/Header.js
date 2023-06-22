import React, { useState, useEffect } from 'react';
import NavLinks from '.NavLinks';
import { graphcms, QUERY_SLUG_CATEGORIES  } from '../../Graphql/Queries';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        graphcms.request(QUERY_SLUG_CATEGORIES)
        .then(res => setCategories(res.categories))
    }, [])

return (
    <header>
        <NavLinks categories={categories} />
    </header>
)

}

export default Header;