import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Store from '../../../api/store';
import Utils from '../../../global/utils';

import { Card, Grid } from '../../Grid';
import { Title } from '../../Typography';

const EntertainmentPage = () => {
    const { filterStores } = Utils;
    const [stores, setStores] = useState([]);

    useEffect(() => {
        Store.all().then(stores => setStores(filterStores(stores, "Entertainment")));
    }, []);

    return (
        <>
            <Title as="h3">Entertainment</Title>
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

export default EntertainmentPage;
