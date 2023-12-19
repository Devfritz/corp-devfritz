import Link from 'next/link'


const Header = () => {
    return (
        <nav className='z-10 w-full flex items-center absolute text-white mt-6 font-bold'>
            <div className="mr-auto ml-4">
                <Link href="/" className='font-bold text-xl'>Home</Link>
            </div>

            <div className='flex justify-around gap-3 px-4'>
                <Link href="/performance">Performance</Link>
                <Link href="/reliability">Reliability</Link>
                <Link href="/scale">scale</Link>
            </div>

        </nav>
    )
}

export default Header