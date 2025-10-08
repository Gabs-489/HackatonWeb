'use client';

import { useState } from 'react';

export default function TicTacToePage() {
  const [board, setBoard] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');

  const handleCellClick = (index: number) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
     
      <div className="text-center mb-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-black mb-4 py-2 px-4 inline-block">
          Reto 3 
        </h1>
      </div>

      <div className="text-center mb-8 max-w-md">
        <p className="text-lg text-gray-800">
          Se deben intercalar el O y la X, no es necesario revisar si ya se ganó
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-1/3 w-1 h-full bg-blue-600 transform -translate-x-0.5"></div>
        <div className="absolute top-0 left-2/3 w-1 h-full bg-blue-600 transform -translate-x-0.5"></div>
        
        <div className="absolute top-1/3 left-0 w-full h-1 bg-blue-600 transform -translate-y-0.5"></div>
        <div className="absolute top-2/3 left-0 w-full h-1 bg-blue-600 transform -translate-y-0.5"></div>
        
        <div className="grid grid-cols-3 gap-0">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleCellClick(index)}
              className="w-24 h-24 flex items-center justify-center text-4xl font-bold hover:bg-gray-200 hover:bg-opacity-30"
            >
              {cell === 'X' ? (
                <span className="text-blue-600">X</span>
              ) : cell === 'O' ? (
                <span className="text-black">O</span>
              ) : ''}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}