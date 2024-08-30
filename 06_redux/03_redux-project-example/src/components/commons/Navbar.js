import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <ul>
                <li><NavLink to='/'> 메인으로</NavLink></li>
                <li><NavLink to='pokemon'> 포켓몬 목록으로</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar;