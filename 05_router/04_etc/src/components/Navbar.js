import {NavLink} from 'react-router-dom'
function Navbar () {

    return (

            <div>

            <ul>

            <li><NavLink to={"/login"}>Login</NavLink></li>
            <li><NavLink to={"/main"}>Main</NavLink></li>
            <li><NavLink to={"/mypage"}> MyPage</NavLink></li>
            <li><NavLink to={"/"}>home</NavLink></li>


            </ul>


            </div>


    )




}
export default Navbar;