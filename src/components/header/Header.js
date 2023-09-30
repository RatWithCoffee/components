import { ArrowSvg, AuthorSvg, TimeSvg } from '../svg';
import { BranchesButton } from './capsules/BranchesButton';
import { CommitsButton } from './capsules/CommitsButton';
import { ParentCommit } from './capsules/ParentCommit';
import React, { useState } from 'react'

export const Header = ({ title, author, time, branches, commits, parents, ...props }) => {
    const [branch, setBranch] = useState(branches[0]);
    const [commit, setCommit] = useState(commits[0]);


    const handleSelectBranch = (value) => () => {
        setBranch(value);
    }

    const handleSelectCommit = (value) => () => {
        setCommit(value);
    }

    return (<div className='header'>
        <div className='header__top'>
            <div className='header__commit-msg'>{title}</div>
            <div className='header__commit-author'>
                <div className='icon-type'>
                    <AuthorSvg />
                </div>
                <span>{author}</span>
            </div>
            <div className='header__commit-time'>
                <div className='icon-type'>
                    <TimeSvg />
                </div>
                <div>{time}</div>
            </div>
        </div>

        <div className='header__bottom'>
            <BranchesButton branch={branch} handleSelectBranch={handleSelectBranch} />
            {parents.map((e) =>
                <ParentCommit commit={e} />
            )}
            <div className='icon-arrow'>
                <ArrowSvg />
            </div>
            <CommitsButton commit={commit} handleSelectCommit={handleSelectCommit} />
        </div>
    </div>);
}