import React from 'react';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';
import { ListOfCategories } from '../components/ListOfCategories';
import { Layout } from '../components/Layout';

const HomePage = ( {id}) => {

    return (
        <Layout title='Petgram - tu app de fotos de mascotas' subtitle='con esto encuentras fotos de animales'>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={id} />
        </Layout>
    )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.id === props.id;
})