import React from 'react'
import { BranchSvg, DropSvg } from '../../svg'

export const BranchesButton = ({ branch, handleSelectBranch, ...props }) => {
    return (
        <div className='header_capsule'>
            <div className='icon-type'>
                <BranchSvg />
            </div>
            <span>{branch}</span>
            <div className='icon-drop'>
                <DropSvg />
            </div>
        </div>
    )
}