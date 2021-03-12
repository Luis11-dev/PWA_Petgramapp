import React, { Fragment } from 'react';
import { Layout } from '../components/Layout';
import { FavsWithQuery } from '../container/GetFavorites';

export default () => (
    <Layout title='tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
        <FavsWithQuery />
    </Layout>
)