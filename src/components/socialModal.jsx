import React from 'react'

function SocialModal(props) {
  return (
    <div>
        <div id='elem1' className=' modalBackground fixed bg-black bg-opacity-70 top-0 w-full h-full z-10 flex justify-center items-center '>
                <div className='modalContainer flex flex-column justify-center bg-main-black w-80 h-100 relative px-5 pb-5 rounded-xl md:h-3/5 '>
                    <div className="flex flex-col md:justify-center gap-y-2">
                        <div className="modalTitle flex justify-between items-center ">
                            <h4 className='text-white text-xl font-bold p-3'>Social Media</h4>
                            <button onClick={props.onClick} className='w-8 rounded duration-300 hover:rotate-180 hover:bg-gray-700 h-8 '><i class='bx bx-x text-gray-300'></i></button>
                        </div>
                        <div className="modalInfo mb-5">
                            <p className='text-gray-400'>Visit and follow us on our social networks, where we publish all the updates.
</p>
                        </div>
                        <div className="modalBody mt-5">
                            <ul>
                                <li className='flex flex-col text-white font-medium'>
                                    <a href="#" className='flex items-center gap-x-2 bg-main-rose w-10/12 m-2 md:m-3 text-start p-3 rounded-lg  hover:bg-white hover:text-main-black duration-300 '><i class='bx  bxl-discord-alt bx-flip-horizontal shadow-md' ></i> Discord </a>
                                    <a href="#" className='flex items-center gap-x-2 bg-main-rose w-10/12 m-2 md:m-3 text-start p-3 rounded-lg  hover:bg-white hover:text-main-black duration-300 '> <i class='bx bxl-youtube bg-white rounded bx-flip-horizontal shadow-md' ></i> Youtube <span class=" absolute right-20  text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-green-700 text-gray-300">New</span></a>
                                    <a href="#" className='flex items-center gap-x-2 bg-main-rose w-10/12 m-2  md:m-3 text-start p-3 rounded-lg  hover:bg-white hover:text-main-black'> <i class='bx bxl-twitter bx-flip-horizontal shadow-md' ></i> Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div className="modalFooter mt-10">
                            <a href='https://es.namemc.com/server/safepvp.us' target='_blank' className='text-gray-400 '> Vote us on NameMc to get nice rewards <i class='bx bx-link'></i></a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SocialModal