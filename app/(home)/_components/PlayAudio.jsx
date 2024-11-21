import PlayIcon from '@/components/Icons/PlayIcon';
import React, { useState, useRef } from 'react';
const PlayAudio = ({ content }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [previous, setPrevious] = useState({})
    const audioRef = useRef(null);
    const previousRef = useRef(null);


    const togglePlay = () => {
        console.log(isPlaying);
        previousRef.current = audioRef.current;
        if (!isPlaying) {
            previousRef.current.pause();
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };


    return (
        <div>
            {content.audio && (
                <audio ref={audioRef} src={content.audio}></audio>
            )}
            {content.audio && (
                <button onClick={() => togglePlay()}>
                    <PlayIcon />
                </button>
            )}
        </div>
    );
};

export default PlayAudio;