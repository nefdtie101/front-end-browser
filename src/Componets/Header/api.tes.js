import React from 'react' ;
import fetch from "isomorphic-fetch";
require ( 'isomorphic-fetch' );

// This will test if the api works
test('No error should be return',  () => {
    return fetch('http/all?name=Game').then(all => {
        expect(all).not.toBe('error');
    });
});