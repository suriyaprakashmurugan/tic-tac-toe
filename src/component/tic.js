import React, {useState, useEffect} from 'react'
import pattern from './val';

export default function Tic() {
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
    const [player,setPlayer] = useState('x');
    const [lidx, setLidx] = useState('-1')

    const changePlayer = (idx) => {
        if(board[idx] !== '') return;
        setLidx(idx);
        setBoard(()=>{
        return board.map((val,i)=>{
            if(i === idx)return player;
            return val;
        })
    
    })
    setPlayer(player === 'x'? 'o':'x')
}

    const reset = () => {
        setBoard(['', '', '', '', '', '', '', '', '']);
        setPlayer('x');
        setLidx('-1');
    }

    const checkwin = () => {
        if(lidx < 0) return;
        const checkArray = pattern[lidx];
        const prePlayer = player === "x" ? 'o':'x';
        checkArray.forEach(arr => {
            if(board[arr[0]] === prePlayer &&
                 board[arr[1]] === prePlayer &&
                  board[arr[2]] === prePlayer){
            alert(`${prePlayer} won the match`);
            reset();
                  }
        })
    }

    useEffect(()=>{
        checkwin();
    },[board]);

  return (
    <>
        <p>Current Player is: {player}</p>
    <div className='box'>
        {board.map(
          (sq, i) => <div className='board-tails' onClick={()=>changePlayer(i)}>{sq}</div> 
        )}
        </div>
        <button className='btn' onClick={reset}>Reset</button>
    </>
  )
    }
