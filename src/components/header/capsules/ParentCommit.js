import React from 'react'

export const ParentCommit = ({ commit, ...props }) => {
    return (
        <div>
            <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" d="M13 10.7812C12.138 10.7812 11.3114 10.4355 10.7019 9.82019C10.0924 9.20484 9.75 8.37024 9.75 7.5C9.75 6.62976 10.0924 5.79516 10.7019 5.17981C11.3114 4.56445 12.138 4.21875 13 4.21875C13.862 4.21875 14.6886 4.56445 15.2981 5.17981C15.9076 5.79516 16.25 6.62976 16.25 7.5C16.25 8.37024 15.9076 9.20484 15.2981 9.82019C14.6886 10.4355 13.862 10.7812 13 10.7812ZM6.63 8.8125C7.23125 11.8066 9.85563 14.0625 13 14.0625C16.1444 14.0625 18.7688 11.8066 19.37 8.8125H24.7C25.4191 8.8125 26 8.22598 26 7.5C26 6.77402 25.4191 6.1875 24.7 6.1875H19.37C18.7688 3.19336 16.1444 0.9375 13 0.9375C9.85563 0.9375 7.23125 3.19336 6.63 6.1875H1.3C0.580938 6.1875 0 6.77402 0 7.5C0 8.22598 0.580938 8.8125 1.3 8.8125H6.63Z" fill="white" />
            </svg>
            <span>{commit}</span>
        </div>
    )
}