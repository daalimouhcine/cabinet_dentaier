
import Nav from '../Nav';

const Read = () => {
    return (
        <div className="">
            <Nav />

            <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr
                        className="
                        text-md
                        font-semibold
                        tracking-wide
                        text-left text-gray-900
                        bg-gray-100
                        uppercase
                        border-b border-gray-600
                        "
                    >
                        <th id="disflex" className="px-4 py-3">Description</th>
                        <th id="disflex" className="px-4 py-3">Date</th>
                        <th id="disflex" className="px-4 py-3">Time</th>
                        <th id="disflex" className="px-4 py-3">Action</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    <tr v-for="rdv in list"  className="text-gray-700">
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div>
                            <p className="font-semibold text-black"></p>
                            </div>
                        </div>
                        </td>
                        <td className="px-4 py-3 text-md font-semibold border">
                        
                        </td>

                        <td className="px-4 py-3 text-sm border"></td>
                        <td className="px-4 py-3 text-sm border">
                        <button className="text-[#FF0000]" >Delete</button>
                        &nbsp;
                        <button className="text-[#088F8F]">Edit</button>
                        </td>

                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Read;