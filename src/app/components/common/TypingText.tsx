import { span } from "framer-motion/client";
import { useEffect, useState } from "react";

interface TypingTextProps{
    words: string [];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
} 

export default function TypingText({
    words,
    typingSpeed = 70,
    deletingSpeed = 40,
    pauseTime = 1800,

}: TypingTextProps){

    const [wordIndex, setWordIndex] = useState(0);
    const [text,setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(()=>{
        const currentWord = words[wordIndex];

        const timeout = setTimeout(
            ()=>{
                if(!isDeleting){
                    const nextText = currentWord.slice(
                        0,
                        text.length + 1
                    );

                    setText(nextText);

                    if(nextText === currentWord){
                        setIsDeleting(true);
                    }
                }else{
                    const nextText = currentWord.slice(
                        0,
                        text.length - 1
                    );

                    setText(nextText);

                    if(nextText === ""){
                        setIsDeleting(false);
                        setWordIndex(
                            (previous)=>
                            (previous + 1) % words.length
                        );
                    }
                }
            },
            isDeleting
            ? deletingSpeed
            : text === currentWord
            ? pauseTime
            : typingSpeed
        );
        return () => clearTimeout(timeout);
    }, [
        text,
        isDeleting,
        wordIndex,
        words,
        typingSpeed,
        deletingSpeed,
        pauseTime,
    ]);
    return (
        <span>
            {text}
            <span className=" ml-1 inline-block h-7 w-px animate-pulse bg-blue-400 align-middle" />
        </span>
    )
}

