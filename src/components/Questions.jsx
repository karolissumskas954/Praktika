import React from 'react'
import { questionLT } from '../constants'

const Questions = () => {
  return (

    <>

      <div className="flex justify-center items-center bg-green-gradient rounded-[20px] h-[200%] max-md:hidden">
        <div className="w-1/2 text-left">
          <h1 className='p-4 font-poppins font-bold max-w-[80%] text-white text-[70px] ml-16 mt-10'>{questionLT[0].title}</h1>
          <p className='p-4 font-poppins font-regular text-white text-[40px] ml-16 mt-[-40px] mb-16'>{questionLT[1].title}</p>
        </div>
        <div className="w-1/2 text-center">
          <div className="flex justify-center items-center">
            <div className="w-1/2 text-right mx-1">

              <input type="text" placeholder="Vardas Pavardė" className="border border-gray-300 p-2 rounded-md w-[70%]" />
            </div>
            <div className="w-1/2 text-left mx-1">
              <input type="text" placeholder="El. Paštas" className="border border-gray-300 p-2 rounded-md w-[70%]" />
            </div>
          </div>
          <textarea className="my-5 mx-[15%] block w-[70%] px-4 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-blue focus:bg-white " rows="3" placeholder="Tekstas"></textarea>
          <p className='p-4 font-poppins font-regular underline text-white text-[20px] text-left mx-[13%] mt-[-25px]'>Siųsti</p>
        </div>
      </div>


      <div className="flex justify-center items-center bg-green-gradient rounded-[20px] h-[200%] max-sm:hidden min-[1060px]:hidden ">
        <div className="w-1/2 text-left">
          <h1 className='p-4 font-poppins font-bold max-w-[80%] text-white text-[50px] ml-12 mt-10'>{questionLT[0].title}</h1>
          <p className='p-4 font-poppins font-regular text-white text-[28px] ml-12 mt-[-40px] mb-16'>{questionLT[1].title}</p>
        </div>
        <div className="w-1/2 text-center">
          <div className="flex justify-center items-center">
            <div className="w-1/2 text-right mx-1">

              <input type="text" placeholder="Vardas Pavardė" className="border border-gray-300 p-2 rounded-md w-[70%]" />
            </div>
            <div className="w-1/2 text-left mx-1">
              <input type="text" placeholder="El. Paštas" className="border border-gray-300 p-2 rounded-md w-[70%]" />
            </div>
          </div>
          <textarea className="my-5 mx-[15%] block w-[70%] px-4 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-blue focus:bg-white " rows="3" placeholder="Tekstas"></textarea>
          <p className='p-4 font-poppins font-regular underline text-white text-[16px] text-left mx-[12%] mt-[-25px]'>Siųsti</p>
        </div>
      </div>



      <div className="flex flex-col justify-center items-center bg-green-gradient rounded-[28px] h-[200%] sm:hidden ">
        <h1 className='p-4 font-poppins font-bold text-white text-[30px]'>{questionLT[0].title}</h1>
        <p className='p-4 font-poppins font-regular text-white text-[18px] mt-[-30px]'>{questionLT[1].title}</p>
        {/* <div className="flex justify-center items-center">
          <div className="w-1/2 text-right mx-1 ">
            <input type="text" placeholder="Vardas Pavardė" className="border border-gray-300 p-2 rounded-md w-[95%]" />
          </div>
          <div className="w-1/2 text-left mx-1">
            <input type="text" placeholder="El. Paštas" className="border border-gray-300 p-2 rounded-md w-[95%]" />
          </div>
        </div> */}
        <div className='flex flex-col items-center mx-3 w-[85%]'>
          <input type="text" placeholder="Vardas Pavardė" className="my-2 border border-gray-300 p-2 rounded-md w-[95%]" />
          <input type="text" placeholder="El. Paštas" className="border border-gray-300 p-2 rounded-md w-[95%]" />


          <textarea className="my-2 block w-[95%]  px-2 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-blue focus:bg-white " rows="3" placeholder="Tekstas"></textarea>
          <p className='p-4 font-poppins font-regular underline text-white text-[16px] mx-[12%] mt-[-16px] mb-8'>Siųsti</p>
        </div>
      </div>

    </>

  )
}

export default Questions