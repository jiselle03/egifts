import React, { useState, useEffect } from 'react';

import Store from '../../api/store';

import { Text } from '../Typography';

const StoreShowPage = props => {
    const [store, setStore] = useState({});

    useEffect(() => {
        Store.one(props.match.params.id).then(store => setStore(store));
    }, []);

    return (
        <Text>{store.name}</Text>
    );
};

export default StoreShowPage;
