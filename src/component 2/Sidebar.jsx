import { useState } from "react";



function Sidebar() {

    const [isselect, setIsselect] = useState({
        Categories: false
    });



    const handleDropdownToggle = (link) => {
        setIsselect({ ...isselect, [link]: !isselect[link] });
    }

    return (
        <>

            <div className="pl-[200px]">
                <div className="w-[300px] h-[1000px] border border-blue-600 bg-gray-700">

                    <div>
                        <h1
                            onClick={() => handleDropdownToggle('Categories')}
                            // onMouseLeave={() => handleDropdownToggle('Categories')}
                            className="text-white hover:bg-blue-800 cursor-pointer h-fit"
                            href="categories"> Categories1


                            {
                                isselect.Categories && (
                                    <div className="absolute">
                                        <ul>

                                            <input type="checkbox" />
                                            <label>Shampo</label>
                                            <li>Cream</li>
                                            <li>Shop</li>
                                            <li>Gel</li>
                                        </ul>
                                    </div>

                                )}
                        </h1>
                    </div>

                    <div>
                        <h1
                            onClick={() => handleDropdownToggle('Categories')}
                            // onMouseLeave={() => handleDropdownToggle('Categories')}
                            className="text-white hover:bg-blue-800 cursor-pointer"
                            href="categories"> Categories
                        </h1>


                        {
                            isselect.Categories && (
                                <div className="">
                                    <ul>

                                        <input type="checkbox" />
                                        <label>Shampo</label>
                                        <li>Cream</li>
                                        <li>Shop</li>
                                        <li>Gel</li>
                                    </ul>
                                </div>

                            )}
                    </div>
                    <div>
                        <h1
                            onClick={() => handleDropdownToggle('Categories')}
                            // onMouseLeave={() => handleDropdownToggle('Categories')}
                            className="text-white hover:bg-blue-800 cursor-pointer"
                            href="categories"> Categories
                        </h1>


                        {
                            isselect.Categories && (
                                <div className="">
                                    <ul>

                                        <input type="checkbox" />
                                        <label>Shampo</label>
                                        <li>Cream</li>
                                        <li>Shop</li>
                                        <li>Gel</li>
                                    </ul>
                                </div>

                            )}
                    </div>
                    <div>
                        <h1
                            onClick={() => handleDropdownToggle('Categories')}
                            // onMouseLeave={() => handleDropdownToggle('Categories')}
                            className="text-white hover:bg-blue-800 cursor-pointer"
                            href="categories"> Categories
                        </h1>


                        {
                            isselect.Categories && (
                                <div className="">
                                    <ul>

                                        <input type="checkbox" />
                                        <label>Shampo</label>
                                        <li>Cream</li>
                                        <li>Shop</li>
                                        <li>Gel</li>
                                    </ul>
                                </div>

                            )}
                    </div>
                    <div>
                        <h1
                            onClick={() => handleDropdownToggle('Categories')}
                            // onMouseLeave={() => handleDropdownToggle('Categories')}
                            className="text-white hover:bg-blue-800 cursor-pointer"
                            href="categories"> Categories
                        </h1>


                        {
                            isselect.Categories && (
                                <div className="">
                                    <ul>

                                        <input type="checkbox" />
                                        <label>Shampo</label>
                                        <li>Cream</li>
                                        <li>Shop</li>
                                        <li>Gel</li>
                                    </ul>
                                </div>

                            )}
                    </div>
                    <div>
                        <h1
                            onClick={() => handleDropdownToggle('Categories')}
                            // onMouseLeave={() => handleDropdownToggle('Categories')}
                            className="text-white hover:bg-blue-800 cursor-pointer"
                            href="categories"> Categories
                        </h1>


                        {
                            isselect.Categories && (
                                <div className="">
                                    <ul>

                                        <input type="checkbox" />
                                        <label>Shampo</label>
                                        <li>Cream</li>
                                        <li>Shop</li>
                                        <li>Gel</li>
                                    </ul>
                                </div>

                            )}
                    </div>
                    <div>
                        <h1
                            onClick={() => handleDropdownToggle('Categories')}
                            // onMouseLeave={() => handleDropdownToggle('Categories')}
                            className="text-white hover:bg-blue-800 cursor-pointer"
                            href="categories"> Categories
                        </h1>


                        {
                            isselect.Categories && (
                                <div className="">
                                    <ul>

                                        <input type="checkbox" />
                                        <label>Shampo</label>
                                        <li>Cream</li>
                                        <li>Shop</li>
                                        <li>Gel</li>
                                    </ul>
                                </div>

                            )}
                    </div>



                </div>
            </div>
        </>
    )
}
export default Sidebar;