import React, { useState, useEffect } from 'react';

import Store from '../../api/store';

const StoreShowPage = props => {
    const [store, setStore] = useState({});

    useEffect(() => {
        Store.one(props.match.params.id).then(store => setStore(store));
    }, []);

    return (
        <>{store.name}</>
    );
};

export default StoreShowPage;
