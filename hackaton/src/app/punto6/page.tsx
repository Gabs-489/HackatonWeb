"use client"; 

import HeaderPunto6 from '@/components/header_paragraphs';
import Image from 'next/image';
import { useState } from 'react';

export default function punto6() {

    const [words, setWords] = useState(0)
    const [characters, setCharacters] =  useState(0)
    const [sentences, setSentences] = useState(0)
    const [paragraphs, setParagraphs] = useState(0)
    const [longestWord, setLongestWord] = useState("-")
    const [description, setDescription] = useState("")

    const ActualizarDatos = (des: string ) => {
        setDescription(des);

        setCharacters(des.length);

        const wordArray = des.trim().split(/\s+/).filter((w) => w.length > 0);
        setWords(wordArray.length);

        const sentenceArray = des
        .split(/[.!?]+/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
        setSentences(sentenceArray.length);

        const paragraphArray = des
        .split(/\n+/)
        .map((p) => p.trim())
        .filter((p) => p.length > 0);
        setParagraphs(paragraphArray.length);

        let longest = "-";
        if (wordArray.length > 0) {
        longest = wordArray.reduce((a, b) => (a.length >= b.length ? a : b));
        }
        setLongestWord(longest);

    };



    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center bg-black-500">



        <div className="relative w-[70rem] z-10 flex flex-wrap justify-between gap-4 p-2 rounded-lg shadow-md relative z-10 flex p-10 bg-black text-white gap-3">
            <div className=' flex flex-col items-center p-4 rounded-lg shadow w-40 flex-col items-center justify-center'>
                <h4> Words </h4>
                <p>{words}</p>
            </div>

            <div className='flex flex-col items-center p-4 rounded-lg shadow w-40 flex-col items-center justify-center'>
                <h4> Characters </h4>
                <p>{characters}</p>
            </div>

            <div className='flex flex-col items-center p-4 rounded-lg shadow w-40 flex-col items-center justify-center'>
                <h4> Sentences </h4>
                <p>{sentences}</p>
            </div>

            <div className='flex flex-col items-center p-4 rounded-lg shadow w-40 flex-col items-center justify-center'>
                <h4> Paragraphs </h4>
                <p>{paragraphs}</p>
            </div>

            
        </div>

        <div className='p-5'></div>

        <div className="w-[70rem] relative z-10 flex p-5 bg-black text-white rounded-lg">
            <form action="">
                <textarea onChange={(e)=>{ActualizarDatos(e.target.value)}} placeholder='Paste your text here'
                    className='w-[65rem] h-45 p-4 resize-none'/>
            </form>
        </div>

        <div className='p-5'></div>

        <div className="w-[70rem] relative z-10 flex p-10 bg-black text-white rounded-lg gap-2">
            <h4> Longest World: </h4>
            <p>{longestWord}</p>
        </div>
                    
        </main>
    );
}