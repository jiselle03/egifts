import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Store from '../../api/store';

import { Text } from '../Typography';
import { Grid, Card } from '../Grid';
import Button from '../Button';

const StoreShowPage = props => {
    const [store, setStore] = useState({});
    const [cart, setCart] = useState([]);

    const addToCart = (event, item) => {
        event.preventDefault();

        if (item.quantity) {
            item.quantity += 1;
        } else {
            item.quantity = 1;
            setCart([...cart, item]);
        };
    };

    useEffect(() => {
        Store.one(props.match.params.id).then(store => setStore(store));
    }, [props.match.params.id]);

    return (
        <>
            <Text>{store.name}</Text>
            <Grid>
                {store && store.items && store.items.map(item => 
                    <Card key={item.id}>
                        <Link to={`/stores/${store.id}/items/${item.id}`}>
                            <Text>{item.name}</Text>
                            <Text>{item.description}</Text>
                            <Text>${item.price}</Text>
                        </Link>
                        <Button primary onClick={event => addToCart(event, item)}>Add to Cart</Button>
                    </Card>
                )}
            </Grid>
        </>
    );
};

export default StoreShowPage;
