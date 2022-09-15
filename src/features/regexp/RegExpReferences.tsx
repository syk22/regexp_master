// import React, { useState } from 'react';

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

export function RegExpReferences() {
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.ref_contents}>
        <h3>きほん</h3>
        <dl>
          <dt>.</dt>
          <dd>すべての文字（改行以外）</dd>
          {/* <dt>\X</dt>
          <dd>メタ文字Xをエスケープ</dd> */}
          <dt>[abc]</dt>
          <dd>カッコ内の文字(a,b,c)のうちのどれか一文字</dd>
          <dt>[^abc]</dt>
          <dd>カッコ内の文字(a,b,c)以外の一文字</dd>
          <dt>[a-z]</dt>
          <dd>アルファベット小文字 a,b,c,d,...z のどれか一文字</dd>
          {/* <dt>[A-Z]</dt>
          <dd>アルファベット大文字 A,B,C,D,...Z のどれか一文字</dd> */}
          <dt>[0-9]</dt>
          <dd>数字 0,1,2,...9 のどれか一文字</dd>
          <dt>^</dt>
          <dd>テキスト開始位置</dd>
          <dt>$</dt>
          <dd>テキスト終了位置</dd>
        </dl>
        <h3>きほんのエスケープシーケンス</h3>
        <dl>
          <dt>\n</dt>
          <dd>改行コード（Line Feed）</dd>
          <dt>\r</dt>
          <dd>改行コード（Carriage Return）</dd>
          <dt>\f</dt>
          <dd>改ページ</dd>
          <dt>\R</dt>
          <dd>すべての改行コード（「\n|\r|\n\r」と同義）</dd>
          <dt>\t</dt>
          <dd>タブ</dd>
        </dl>
      </div>
      {/* <div className={styles.row}>
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
      </div> */}
    </div>
  );
}
