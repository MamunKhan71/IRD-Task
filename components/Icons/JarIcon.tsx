import React from 'react'

const JarIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={21}
            viewBox="0 0 20 21"
            fill="none"
        >
            <g clipPath="url(#clip0_1_1262)">
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
                        d="M13.333 6.333l-.019-.98A2.493 2.493 0 0012.5.5h-5a2.494 2.494 0 00-.833 4.847v.986A4.172 4.172 0 002.5 10.5v5.833A4.172 4.172 0 006.667 20.5h6.666a4.172 4.172 0 004.167-4.167V10.5a4.172 4.172 0 00-4.167-4.167zM7.5 2.167h5a.833.833 0 010 1.666h-5a.833.833 0 110-1.666zm8.333 14.166a2.5 2.5 0 01-2.5 2.5H6.667a2.5 2.5 0 01-2.5-2.5V10.5a2.5 2.5 0 012.5-2.5H7.5a.833.833 0 00.833-.833V5.5h3.311l.023 1.678A.833.833 0 0012.5 8h.833a2.5 2.5 0 012.5 2.5v5.833zM13.333 13a.834.834 0 01-.833.833h-1.667V15.5a.834.834 0 01-1.666 0v-1.667H7.5a.834.834 0 010-1.666h1.667V10.5a.833.833 0 111.666 0v1.667H12.5a.833.833 0 01.833.833z"
                        fill="#868686"
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_1_1262">
                    <path fill="#fff" transform="translate(0 .5)" d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default JarIcon