import React from 'react'
import { CommitSvg, DropSvg } from '../../svg'

export const CommitsButton = ({ commit, handleSelectBranch, ...props }) => {
    return (
        <div className="header_capsule.current">
            <div className='icon-type'>
                <CommitSvg />
            </div>
            <span>{commit}</span>
            <div className='icon-drop'>
                <DropSvg />
            </div>
        </div>
    )
}