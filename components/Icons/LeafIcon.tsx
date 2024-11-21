import React from 'react'

const LeafIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={21}
            viewBox="0 0 20 21"
            fill="none"
        >
            <g clipPath="url(#clip0_1_1268)">
                <mask
                    id="a"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={20}
                    height={21}
                >
                    <path d="M20 .5H0v20h20V.5z" fill="#fff" />
                </mask>
                <g mask="url(#a)">
                    <path
                        d="M20 13.834V18a2.5 2.5 0 01-2.5 2.5h-4.167a6.666 6.666 0 01-5.766-3.333 9.141 9.141 0 001.868-.207 4.99 4.99 0 003.898 1.874H17.5a.833.833 0 00.833-.834v-4.166a4.991 4.991 0 00-1.876-3.898c.134-.614.204-1.24.21-1.869A6.667 6.667 0 0120 13.834zm-5.02-5.291A7.498 7.498 0 006.958.52 7.848 7.848 0 000 8.246v4.2c0 2.11 1.256 3.055 2.5 3.055h4.75a7.85 7.85 0 007.73-6.958zm-3.355-4.667a5.848 5.848 0 011.693 4.55 6.136 6.136 0 01-6.068 5.408H2.5c-.773 0-.833-1.063-.833-1.389v-4.2a6.135 6.135 0 015.408-6.063 5.843 5.843 0 014.55 1.694z"
                        fill="#868686"
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_1_1268">
                    <path fill="#fff" transform="translate(0 .5)" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default LeafIcon