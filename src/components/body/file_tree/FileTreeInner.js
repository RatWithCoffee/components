import React from 'react'
import { DevDropdown } from '../UI/DevDropdown'
import { NavLink } from 'react-router-dom';
import { DirSvg, FileSvg, BinSvg } from '../../svg'

const icon = {
    "dir": <DirSvg />,
    "file": <FileSvg />,
    "bin": <BinSvg />,
}

export const FileTreeInner = ({ node, uniq }) => {
    const { type, child, name } = node;
    uniq = `${uniq}/${name}`;

    return (
        <div>
            {type === "dir" ?
                <div uniq={uniq} className="dir">
                    <div className='dir__title'>
                        <span>{icon[type]}</span>
                        <span>{name}</span>
                    </div>
                    {child.map(e => <FileTreeInner node={e} uniq={uniq} />)}
                </div> :
                <>
                    <div className='icon-type'>{icon[type]}</div>
                    <NavLink to={`file/${name}`}>{name}</NavLink>
                </>
            }
        </div>
    )

}