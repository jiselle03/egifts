import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Store from '../../api/store';

import Card from '../grid/Card';
import Grid from '../grid/Grid';

const WelcomePage = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        Store.all().then(stores => setStores(stores));
        console.log(stores)
    }, []);

    return (
        <Grid>
            {stores.map(store => (
                <Card>
                    <Link key={store.id} to={`/stores/${store.id}`}>
                        {store.name}
                    </Link>
                </Card>
            ))}
        </Grid>
    );
};

export default WelcomePage;
