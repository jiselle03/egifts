import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Store from '../../../api/store';
import Utils from '../../../global/utils';

import { Card, Grid } from '../../Grid';
import { Title } from '../../Typography';

const FoodDrinksPage = () => {
    const { filterStores } = Utils;
    const [stores, setStores] = useState([]);

    useEffect(() => {
        Store.all().then(stores => setStores(filterStores(stores, "Food & Drinks")));
    }, []);

    return (
        <>
            <Title as="h3">Food & Drinks</Title>

            <Grid>
                {stores.map(store => (
                    <Card key={store.id}>
                        <Link key={store.id} to={`/stores/${store.id}`}>
                            {store.name}
                        </Link>
                    </Card>
                ))}
            </Grid>
        </>
    );
};

export default FoodDrinksPage;
