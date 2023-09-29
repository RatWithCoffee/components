import React, { useState } from 'react'
import { BranchesButton } from './capsules/BranchesButton';
import { CommitsButton } from './capsules/CommitsButton';
import { ParentCommit } from './capsules/ParentCommit';

export const HeaderBottom = ({ branches, commits, parents, ...props }) => {
    const [branch, setBranch] = useState(branches[0]);
    const [commit, setCommit] = useState(commits[0]);


    const handleSelectBranch = (value) => () => {
        setBranch(value);
    }

    const handleSelectCommit = (value) => () => {
        setCommit(value);
    }

    return (<div>
        <BranchesButton branch={branch} handleSelectBranch={handleSelectBranch}/>
        {parents.map((e) =>
            <ParentCommit commit={e}/>
        )}
        <CommitsButton commit={commit} handleSelectCommit={handleSelectCommit}/>
        

    </div>);
}