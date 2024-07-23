import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate() {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 의존성 배열이 없는 useEffect: 컴포넌트가 마운트 된 직후 호출되며 이후 컴포턴트가 업데이트 될 때마다 호출
    useEffect(() => {
        console.log("==================");
        console.log("의존성 배열이 없는 훅 useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    // 의존성 배열이 있는 useEffect: 컴포턴트가 마운트 된 직후 호출되며 count 값이 변경될 때마다 호출
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`현재 count 값: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;