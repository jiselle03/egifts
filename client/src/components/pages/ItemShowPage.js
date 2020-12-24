import React, { useState, useEffect } from 'react';

import Item from '../../api/item';

import { Text } from '../Typography';

const ItemShowPage = props => {
    const [item, setItem] = useState({});

    useEffect(() => {
        Item.one(props.match.params.store_id, props.match.params.id).then(item => setItem(item));
    }, [props.match.params.store_id, props.match.params.id]);

    return (
        <Text>{item.name}</Text>
    );
};

export default ItemShowPage;
