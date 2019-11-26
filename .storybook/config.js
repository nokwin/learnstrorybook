import React from 'react';
import {addDecorator, configure} from '@storybook/react';
import {GlobalStyle} from "../src/shared/global";

addDecorator(story => (
    <>
        <GlobalStyle/>
        {story()}
    </>
));

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
