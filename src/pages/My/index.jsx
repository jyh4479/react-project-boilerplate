import {useRecoilValue} from "recoil";
import {countState} from "../../stores/countState.js";

const My = () => {

    const count = useRecoilValue(countState);

    return (<div>my page {count}</div>)
}

export default My;