# basic-react-project

## Hooks
- useState

- useEffect

``` javascript
useEffect(() => {
    // 컴포넌트가 마운트 된 이후,
    // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
    // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
    // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
    ...

    return () => {
        // 컴포넌트가 마운트 해제되기 전에 실행됨
        ...
    }
}, [의존성 변수1, 의존성 변수2, ...]);
```

- useMemo
- useCallback
- useRef

## Hook의 규칙
1. Hook은 무조건 `최상위 레벨`에서만 호출해야 한다.
> **잘못된 Hook 사용법**  
> name이 '' 일 경우 useEffect()가 호출 안됨 => 그렇기 때문에 꼭 최상위 레벨에서 호출해야함
``` javascript
function MyComponent(props) {
    const [name, setName] = useState('Inje');

    if (name !== '') {
        useEffect(() => {
            ...
        });
    }
    ...
}
```
2. `리액트 함수 컴포넌트에서만` Hook을 호출해야 한다.