import {useState, useEffect} from 'react';
import {fetchProviders, fetchProvider} from "./api.js";

export function useProviders(region, lang) {

    const [providers, setProviders] = useState(undefined); 

    useEffect (() => {
        fetchProviders(region, lang).then((res) => {
            setProviders( res );
            console.log("providers fetched")
        });
    });

    return providers;
};

export function useProvider(user) {

    const [providers, setProviders] = useState(undefined); 

    useEffect (() => {
        fetchProvider(user).then((res) => {
            setProviders( res );
            console.log(`provider ${user} fetched`)
        });
    }, [user]);

    return providers;
};