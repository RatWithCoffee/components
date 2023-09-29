import React from 'react'
import { DevDropdown } from '../UI/DevDropdown'
import { NavLink } from 'react-router-dom';
import { DevIcon } from '../UI/DevIcon';

const icon = {
    "dir": "folder_open",
    "file": "draft",
    "bin": "exposure_zero",
}

export const CommitFilesTree = ({ node, uniq }) => {
    const { type, child, name } = node;
    uniq = `${uniq}/${name}`;

    return (
        <div className="file-row">
            {type === "dir" ?
                <DevDropdown uniq={uniq} name={<div className="accardion__name"><DevIcon>{icon[type]}</DevIcon>{name}</div>}>
                    {child.map(e => <CommitFilesTree node={e} uniq={uniq} />)}
                </DevDropdown> :
                <>
                    <DevIcon>{icon[type]}</DevIcon>
                    <NavLink to={`file/${name}`}>{name}</NavLink>
                </>
            }
        </div>
    )

}