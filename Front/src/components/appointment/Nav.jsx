
const Nav = () => {

    const deleteIdStorage = () => {
        localStorage.removeItem('currentId');
    }

    return (
        <nav className="py-2 px-6 bg-blue-100 mb-6">
            <div className="w-5/6 flex justify-between mx-auto">
                <img src="img/logo.png" alt="" className="w-28" />
                <ul className="flex items-center">
                    <li className="p-3">
                        <a href="/add" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" >
                            <span className="block">Add</span>
                        </a>
                    </li>
                    <li className="p-3">
                    <a href="/read" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" >
                            <span className="block">Read</span>
                        </a>
                    </li>
                    <li className="p-3">
                    <a href="/" onClick={deleteIdStorage} className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200x rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                            <span className="block">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;