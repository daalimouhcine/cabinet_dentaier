

const Add = () => {
    const times = [];
    return (
        <div>
            <nav className="p-6 bg-blue-100 flex justify-between mb-6">
                <img src="img/logo.png" alt="" className="w-28" />
                <ul className="flex items-center">
                    <li className="p-3">
                        <a href="#_" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" >
                            <span class="block">Add</span>
                        </a>
                    </li>
                    <li className="p-3">
                    <a href="#_" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" >
                            <span class="block">Read</span>
                        </a>
                    </li>
                    <li className="p-3">
                    <a href="#_" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200x rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                            <span class="block">Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <section>
                <div>
                    <h3></h3>
                    <form action="">
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" name="" id="" />
                            <span></span>
                        </div>
                        {/* add checkbox inputs and style it like squares with there times */}
                        <div>
                            {
                                times.map(time => {
                                    return <input type="checkbox" name="" id="" />
                                })
                            }
                        </div>
                        <button type="submit"></button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Add;