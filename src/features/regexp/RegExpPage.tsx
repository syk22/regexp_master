// import React, { useRef } from 'react';
import React, { useState, useEffect } from 'react';

// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from './regexpSlice';
import styles from './RegExp.module.css';
// import { TextField } from '@mui/material';


export function RegExpPage() {

  const [regexpCommand, setNewCommand] = useState('');
  const [regexpTarget, setTargetSentence] = useState('');
  const [regexpResult, setResult] = useState('');

  useEffect(() => {
    // console.log(regexpCommand);
    // console.log(regexpTarget);
    
    if (regexpCommand !== '' && regexpTarget !== '') {
      try {
        let re: RegExp = RegExp(regexpCommand);
        let regArray: RegExpExecArray | null = re.exec(regexpTarget);
        if (regArray == null) {
          setResult('');
          return;
        }
        console.log(re);
        console.log(regArray);
        setResult(regArray[0]);
      } catch(e: unknown) {
        // console.log(e);
        return;
      }
    }

  },[regexpCommand, regexpTarget]);
  const handleChangeCommand = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCommand(e.target.value);
  };
  const handleChangeTarget = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTargetSentence(e.target.value);
  };
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.regex_contents}>
        <div>
          <div>
            <h2>検索対象文字列</h2>
            <div className={styles.fields}>
              <textarea
                id='target'
                name='target'
                rows={3}
                autoComplete='off'
                placeholder=''
                onChange={handleChangeTarget}
              >
              </textarea>
            </div>
          </div>
          <div>
            <h2>正規表現</h2>
            <div className={`${styles.fields} ${styles.fl_input}`}>
              <span className={`${styles.text_slash} ${styles.text_prefix}`}>/</span>
              {/* <span className={styles.text_color_default styles.text_decoration>/</span> */}
              <input
                id='command'
                name='command'
                autoComplete='off'
                placeholder=''
                onChange={handleChangeCommand}
              />
              <span className={`${styles.text_slash} ${styles.text_surfix}`}>/</span>
              <span></span>
            </div>
          </div>
          <div>
            <h2>結果</h2>
            <div className={styles.result}>
              <span className={styles.text_result}>{regexpResult}</span>
            </div>
          </div>
        </div>
      </div>
    {/*       
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    */}
    </div>
  );
}
