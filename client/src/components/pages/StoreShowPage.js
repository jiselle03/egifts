import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Store from '../../api/store';

import { Text } from '../Typography';
import { Grid, Card } from '../Grid';

const StoreShowPage = props => {
    const [store, setStore] = useState({});

    useEffect(() => {
        Store.one(props.match.params.id).then(store => setStore(store));
    }, [props.match.params.id]);

    return (
        <>
            <Text>{store.name}</Text>
            <Grid>
                {store && store.items && store.items.map(item => 
                    <Link to={`/stores/${store.id}/items/${item.id}`}>
                        <Card key={item.id}>
                            {item.name}
                        </Card>
                    </Link>
                )}
            </Grid>
        </>
    );
};

export default StoreShowPage;
