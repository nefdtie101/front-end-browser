import React from 'react' ;
import SearchAll from "../SearchAll";
import renderer from 'react-test-renderer'

// This will test if the page is rendered properly
test( 'renders correctly',()=>{
    const input = renderer
        .create(
           <SearchAll/>
        )
        .toJSON();
    expect(input).toMatchSnapshot();
});