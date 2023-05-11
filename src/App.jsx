import {Link, Route, Routes} from "react-router-dom";

import {Home, My} from "@/pages";

const App = () => {

    // Outlet을 사용한 중첩 라우팅

    return (
        <>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/My'>My</Link>
            </div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/My" element={<My/>}/>
            </Routes>
        </>
    )
}

export default App;
