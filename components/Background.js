import backgroundStyle from '../styles/Background.module.css'
import Image from 'next/image'

const Background = ({ children }) => {
    return (
        <div className={backgroundStyle.bg}>
            <div className={backgroundStyle.bgImageBg}>
                <Image src="/bg-main.jpg" alt="An Abstract Background Image" width={1920} height={1080}/>
            </div>
            <div className={backgroundStyle.bgImageLogo}>
                <Image src="/logo-project.png" alt="My logo" width={248} height={1080}/>
            </div>
            <div className={backgroundStyle.bgOverlay}></div>
        </div>
    )
}

export default Background