import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
/* import { categories as mockCategories } from '../../../api/db.json' */


function useCategoriesData() {
    const [ categories, setCategories ] = useState([]); /* como ya estoy haciendo el  fetch vamos a iniciar el useState como un array vacío, a la espera de que lo actualizemos */
    const [ loading, setLoading ] = useState(false);

    useEffect(function () {
        setLoading(true);
        fetch('https://petgram-server-luis-garcia.vercel.app/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response)
                setLoading(false);
            })

    }, [])

    return { categories, loading }

}


const ListOfCategoriesComponent = () => {

    /* const [categories, setCategories] = useState(mockCategories); */
    const {categories, loading} = useCategoriesData();

    const [showFixed, setshowFixed] = useState(false);

    useEffect(function () {
        const onScroll = e => {
            const newShowFilxed = window.scrollY > 200;
            showFixed !== newShowFilxed && setshowFixed(newShowFilxed);
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])



    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                loading 
                ? <Item key={'loading'}><Category /></Item>
                : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`}/></Item>)
            }
        </List>
    )

    return (
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>

    )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent);