import React from 'react'

export const BranchesButton = ({ branch, handleSelectBranch, ...props }) => {
    return (
        <div>
            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.03571 4.0625C3.27725 4.0625 3.50889 3.96373 3.67969 3.78791C3.85048 3.6121 3.94643 3.37364 3.94643 3.125C3.94643 2.87636 3.85048 2.6379 3.67969 2.46209C3.50889 2.28627 3.27725 2.1875 3.03571 2.1875C2.79418 2.1875 2.56253 2.28627 2.39174 2.46209C2.22095 2.6379 2.125 2.87636 2.125 3.125C2.125 3.37364 2.22095 3.6121 2.39174 3.78791C2.56253 3.96373 2.79418 4.0625 3.03571 4.0625ZM6.07143 3.125C6.07143 4.40625 5.32388 5.50781 4.25 5.98828V9.41797C4.96339 8.99219 5.79442 8.75 6.67857 8.75H10.3214C11.6609 8.75 12.75 7.62891 12.75 6.25V5.98828C11.6761 5.50781 10.9286 4.40625 10.9286 3.125C10.9286 1.39844 12.2871 0 13.9643 0C15.6415 0 17 1.39844 17 3.125C17 4.40625 16.2525 5.50781 15.1786 5.98828V6.25C15.1786 9.01172 13.0042 11.25 10.3214 11.25H6.67857C5.33906 11.25 4.25 12.3711 4.25 13.75V14.0117C5.32388 14.4922 6.07143 15.5938 6.07143 16.875C6.07143 18.6016 4.71295 20 3.03571 20C1.35848 20 0 18.6016 0 16.875C0 15.5938 0.747545 14.4922 1.82143 14.0117V13.75V5.98828C0.747545 5.50781 0 4.40625 0 3.125C0 1.39844 1.35848 0 3.03571 0C4.71295 0 6.07143 1.39844 6.07143 3.125ZM14.875 3.125C14.875 2.87636 14.779 2.6379 14.6083 2.46209C14.4375 2.28627 14.2058 2.1875 13.9643 2.1875C13.7227 2.1875 13.4911 2.28627 13.3203 2.46209C13.1495 2.6379 13.0536 2.87636 13.0536 3.125C13.0536 3.37364 13.1495 3.6121 13.3203 3.78791C13.4911 3.96373 13.7227 4.0625 13.9643 4.0625C14.2058 4.0625 14.4375 3.96373 14.6083 3.78791C14.779 3.6121 14.875 3.37364 14.875 3.125ZM3.03571 17.8125C3.27725 17.8125 3.50889 17.7137 3.67969 17.5379C3.85048 17.3621 3.94643 17.1236 3.94643 16.875C3.94643 16.6264 3.85048 16.3879 3.67969 16.2121C3.50889 16.0363 3.27725 15.9375 3.03571 15.9375C2.79418 15.9375 2.56253 16.0363 2.39174 16.2121C2.22095 16.3879 2.125 16.6264 2.125 16.875C2.125 17.1236 2.22095 17.3621 2.39174 17.5379C2.56253 17.7137 2.79418 17.8125 3.03571 17.8125Z" fill="white" />
            </svg>
            <span>{branch}</span>
            <button type="button">
                {<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.29377 10.7062C6.6844 11.0969 7.31877 11.0969 7.7094 10.7062L12.7094 5.70624C13.1 5.31562 13.1 4.68124 12.7094 4.29062C12.3188 3.89999 11.6844 3.89999 11.2938 4.29062L7.00002 8.58437L2.70627 4.29374C2.31565 3.90312 1.68127 3.90312 1.29065 4.29374C0.900024 4.68437 0.900024 5.31874 1.29065 5.70937L6.29065 10.7094L6.29377 10.7062Z" fill="#9D9DAC" />
                </svg>}
            </button>
        </div>
    )
}