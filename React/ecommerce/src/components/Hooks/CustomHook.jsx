import useCounter from "./useCounter"

export default function CustomHook() {

    const { count, increment, Decrement } = useCounter();

    return (
        <>
            <h2>Custom Hook Component</h2>

            <h3>{count}</h3>

            <button onClick={increment}>
                incremnt
            </button>

            <button onClick={Decrement}>
                decremnt
            </button>
        </>
    )
}