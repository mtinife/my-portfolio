import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="#">
                        <a>home</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>about</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
} 

export default Nav