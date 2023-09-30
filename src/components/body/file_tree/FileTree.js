import { FileTreeInner } from "./fileTreeInner";


export const FileTree = () => {
    return (
        <div className='file-tree'>
            <div className='top-line'></div>
            <div className='file-tree__inner'>
                <FileTreeInner/>
            </div>
        </div>
    );
}