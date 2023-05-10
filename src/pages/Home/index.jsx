import {useRecoilState} from "recoil";
import {countState} from "../../stores/countState.js";

const Home = () => {

    const [count, setCount] = useRecoilState(countState);

    return (
        <div>
            <div>home page {count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    )
}

export default Home;