const Utils = {
    filterStores(stores, category) {
        const filteredStores = stores.filter(store => store.category === category);
        return filteredStores;
    },
};

export default Utils;
