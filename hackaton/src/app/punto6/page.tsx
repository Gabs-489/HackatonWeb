"use client"; 

import HeaderPunto6 from '@/components/header_paragraphs';
import Image from 'next/image';
import { useState } from 'react';

export default function punto6() {

    const [words, setWords] = useState(0)
    const [characters, setCharacters] =  useState(0)
    const [sentences, setSentences] = useState(0)
    const [paragraphs, setParagraphs] = useState(0)
    const [description, setDescription] = useState("")

    const ActualizarDatos = (des: String ){
        setDescription(des);
        

    }



    return (
        <main className="relative min-h-screen flex items-center justify-center">
            <HeaderPunto6>

            </HeaderPunto6>
        <Image
            src="/Image/Fondo.jpg"
            alt="Fondo"
            fill
            className="object-cover z-0"
            style={{ objectFit: "cover" }}
            priority
        />
        <div className="relative z-10">
            
        </div>

        <div>
            <form action="">
                <textarea onChange={actual} placeholder='Paste ypur text here'/>
            </form>
        </div>
        </main>
    );
}