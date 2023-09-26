import { headerLogo } from '../assets/assets/images'
import { hamburger } from '../assets/assets/icons'
import { navLinks } from '../constants'
const Nav = () => {
    return (
        <header className='padding-x p-8  z-10 w-full fixed bg-white'>
            <nav className='flex justify-between items-center max-container'>
                <a href=''>
                    <img src={headerLogo} alt='logo' width={130} height={29} />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {
                                    navLinks.map((item) => {
                            return (
                                <li key={item.label}>
                                    <a href={item.href}
                                        className='font-montserrat leading-normal text-lg text-slate-gray'>
                                        {item.label}
                                    </a>
                                </li>

                            )

                        })
                    }
                </ul>
                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt='hamburger' width={25} height={25}/>
                </div>
            </nav>
        </header>
    )
}

export default Nav