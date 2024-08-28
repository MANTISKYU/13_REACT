import {NavLink} from 'react-router-dom'
function Navbar () {

    const activeStyle = {
        backgroundColor: 'green',
    }


    return (

        <div>

        <ul>

            <li> <NavLink to={"/"} style={({isActive}) => isActive? activeStyle: undefined}>Home</NavLink></li>
            <li><NavLink to={"/menu"}  style={({isActive}) => isActive? activeStyle: undefined}>메뉴</NavLink></li>
            <li><NavLink to={"/login"}  style={({isActive}) => isActive? activeStyle: undefined}>로그인</NavLink></li>
        </ul>

        </div>

    )
}

export default Navbar;