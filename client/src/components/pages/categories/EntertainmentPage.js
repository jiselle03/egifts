import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Store from '../../../api/store';

import Card from '../../grid/Card';
import Grid from '../../grid/Grid';

const EntertainmentPage = () => {
    const [stores, setStores] = useState([]);

    const filterStores = async stores => {
        const filteredStores = await stores.filter(store => store.category === "Entertainment");
        setStores(filteredStores);
    };

    useEffect(() => {
        Store.all().then(stores => filterStores(stores));
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

export default EntertainmentPage;
