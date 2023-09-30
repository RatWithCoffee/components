import React from 'react'
import { CommitSvg } from '../../svg'

export const ParentCommit = ({ commit, ...props }) => {
    return (
        <div className="header__capsule parent">
            <div className='icon-type'>
                <CommitSvg />
            </div>
            <span>{commit}</span>
        </div>
    )
}
