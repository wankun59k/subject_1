import React, { useState, useEffect } from 'react';
import StartButton from './components/StartButton';
import AddButton from './components/AddButton';
import SubtractButton from './components/SubtractButton';

const CountdownTimer = () => {
    const TimerViewStyle = {
        fontFamily: "Overpass revert-layer",
        fontSize: "40px",
        textAlign: 'center' 
    }

    // 依存変数のセッタ、ゲッタ定義
    const [countdown, setCountdown] = useState(120000); 
    const [startButtonClicked, startCountdown] = useState(false);
    // その他定数定義
    const interval = 10;

    // 発火関数
    const handleStartButtonEvent = () => {
        startCountdown(true);
    };

    const handleAddButtonEvent = () => {
        setCountdown(countdown + 1);
    };

    const handleSubtractButtonEvent = () => {
        setCountdown(countdown - 1);
    };

    // イベント
    useEffect(() => {
        if (startButtonClicked){
            if (countdown <= 0) {
                return; // カウントダウンが0以下になったら終了
            }
            const timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 10); // 10ミリ秒ごとにカウントダウンを更新
            }, interval);
          
            return () => {
                clearInterval(timer); // コンポーネントがアンマウントされたときにタイマーをクリアする
            };
        }
    }, [countdown, startButtonClicked]);// countdown変数を監視する。

    
    // ミリ秒を表示形式に変換する関数
    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        const centiseconds = Math.floor((milliseconds % 1000) / 1).toString().padStart(3, '0');
        return `${minutes} minutes ${seconds}.${centiseconds}seconds `;
    };

    // 戻り値
    return (
    <div class="main-text">
        <div>
            <p><StartButton  onEvent={handleStartButtonEvent} /></p>
            <p><AddButton  onEvent={handleAddButtonEvent} /></p>
            <p><SubtractButton  onEvent={handleSubtractButtonEvent} /></p>
        </div>
        <div class="document_01" style={TimerViewStyle}>{formatTime(countdown)}</div>
    </div>
    );
};

export default CountdownTimer;
