import React from 'react'
import { HeaderTop } from './HeaderTop';
import { HeaderBottom } from './HeaderBottom';

export const Header = ({ branches, commits, parents,  }) => {
    return (<div>
        <HeaderTop/>
        <HeaderBottom/>
    </div>);
}