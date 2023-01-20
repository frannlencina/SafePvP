import React from 'react'

import Logo from '../assets/imgs/logo-safe-min.png'

function ModesCard(props) {
    
  return (
    <div>
        <div id='elem1' className=' modalBackground fixed bg-black bg-opacity-70 top-0 w-full h-full z-10 flex justify-center items-center '>
                    <div className='modalContainer flex flex-column justify-center bg-main-black w-96 relative px-5 pb-5 rounded-xl '>
                        <div className="flex flex-col md:justify-center gap-y-2">
                            <div className="modalTitle flex justify-between items-center ">
                                <h4 className='text-main-rose text-xl font-bold p-3'>{props.nick}</h4>
                                <button onClick={props.onClick} className='w-8 rounded duration-300 hover:rotate-180 hover:bg-gray-700 h-8 '><i class='bx bx-x text-gray-300'></i></button>
                            </div>
                            <div className="modalInfo mb-5">
                                <p className='text-gray-200'>{props.description}</p>
                            </div>
                            <div className="modalFooter mt-10 ">
                                <a href='https://es.namemc.com/server/safepvp.us' target='_blank' className='text-gray-400'> Vote us on NameMc to get nice rewards <i class='bx bx-link'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default ModesCard