import React from 'react'

const NavTemplate = () => {
    const currentPath = window.location.pathname;
  return (
    <div className='bg-white w-full flex flex-col items-center py-24'>
        <div className='text-4xl font-bold py-8'>
             Find the perfect template
        </div>
        <div className='text-m'>
                <nav className="  w-full ">
            <div className="flex items-center justify-between">
                <ul className="flex gap-2 ">
                <li className={`py-2 px-4 text-[#2ec6d9] ${currentPath === '/all' ? 'border-b-2 border-[#2ec6d9]' : 'border-b-2 border-transparent'}`}>
                    <a href="/template/all">
                        All(42)
                    </a>
                </li>
                <li className={`py-2 px-4 text-[#2ec6d9] ${currentPath === '/food' ? 'border-b-2 border-[#2ec6d9]' : 'border-b-2 border-transparent'}`}>
                    <a href="/template/food">   Food & Drink(30)

</a>
                </li>
                <li className={`py-2 px-4 text-[#2ec6d9] ${currentPath === '/pod' ? 'border-b-2 border-[#2ec6d9]' : 'border-b-2 border-transparent'}`}>
                    <a href="/template/pod">POD(10)</a>
                </li>
                <li className={`py-2 px-4 text-[#2ec6d9] ${currentPath === '/orther' ? 'border-b-2 border-[#2ec6d9]' : 'border-b-2 border-transparent'}`}>
                    <a href="/template/other">OTHERS(2)</a>
                </li>
                </ul>
            </div>
            </nav>
            <hr />
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default NavTemplate