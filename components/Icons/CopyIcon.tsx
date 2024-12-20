import React from 'react'
import { toast } from 'react-toastify'

const CopyIcon = ({ content }) => {
    return (
        <svg
            className='hover:cursor-pointer'
            onClick={() => <>
                {navigator.clipboard.writeText(`${content.dua_name_en}\n ${content.top_en}\n${content.clean_arabic ? content.clean_arabic : ""}\n${content.transliteration_en ? content.transliteration_en : ""}\n${content.translation_en ? content.translation_en : ""}\n`)}
                {toast.success("Copied")}
            </>}
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M8.00027 16.0011H6.00027C5.46984 16.0011 4.96113 15.7904 4.58606 15.4153C4.21099 15.0402 4.00027 14.5315 4.00027 14.0011V6.0011C4.00027 5.47067 4.21099 4.96196 4.58606 4.58688C4.96113 4.21181 5.46984 4.0011 6.00027 4.0011H14.0003C14.5307 4.0011 15.0394 4.21181 15.4145 4.58688C15.7896 4.96196 16.0003 5.47067 16.0003 6.0011V8.0011M10.0003 20.0011H18.0003C18.5307 20.0011 19.0394 19.7904 19.4145 19.4153C19.7896 19.0402 20.0003 18.5315 20.0003 18.0011V10.0011C20.0003 9.47067 19.7896 8.96196 19.4145 8.58688C19.0394 8.21181 18.5307 8.0011 18.0003 8.0011H10.0003C9.46984 8.0011 8.96113 8.21181 8.58606 8.58688C8.21099 8.96196 8.00027 9.47067 8.00027 10.0011V18.0011C8.00027 18.5315 8.21099 19.0402 8.58606 19.4153C8.96113 19.7904 9.46984 20.0011 10.0003 20.0011Z"
                stroke="#868686"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

    )
}

export default CopyIcon