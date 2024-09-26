import React from 'react'
import CartWidget from '../cartwidget/CartWidget'

const navbar = () => {

  return (
    <>
        <nav className='bg-blue-500 p-4'>
            <div className='flex items-center justify-between'>
                {/*Logo*/}
                <div className='text-white text-2xl font-bold'>F1 Store</div>

                {/*Menú*/}
                <ul className='hidden md:flex space-x-4'>
                    <li><a href="#" className='text-white'>Home</a></li>
                    <li><a href="#" className='text-white'>Productos</a></li>
                    <li><a href="#" className='text-white'>Contacto</a></li>
                    <li><a href="#" className='text-white'><CartWidget /></a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default navbar