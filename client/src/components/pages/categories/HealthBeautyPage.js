import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Store from '../../../api/store';
import Utils from '../../../global/utils';

import { Card, Grid } from '../../Grid';

const HealthBeautyPage = () => {
    const { filterStores } = Utils;
    const [stores, setStores] = useState([]);

    useEffect(() => {
        Store.all().then(stores => setStores(filterStores(stores, "Health & Beauty")));
    }, []);

    return (
        <Grid>
            {stores.map(store => (
                <Card key={store.id}>
                    <Link key={store.id} to={`/stores/${store.id}`}>
                        {store.name}
                    </Link>
                </Card>
            ))}
        </Grid>
    );
};

export default HealthBeautyPage;
