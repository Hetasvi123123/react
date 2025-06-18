import React from 'react'

const App = () => {
  return (
    <>
      <nav className='bg-amber-950 flex justify-between align-middle py-5 px-2'>
        <h1 className='text-white'>Hello</h1>
        <ul className='flex justify-between align-middle'>
          <li className='mx-4 text-white'>Home</li>
          <li className='mx-4 text-white'>Home</li>
          <li className='mx-4 text-white'>Home</li>
          <li className='mx-4 text-white'>Home</li>
          <li className='mx-4 text-white'>Home</li>

        </ul>
      </nav>

      <main className='bg-white flex justify-between'>
        <div className="info w-1/3">o
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem beatae, aliquam iusto velit adipisci. Impedit repudiandae ullam possimus laborum quod eos adipisci laboriosam debitis. Facilis eius minima veniam eum!</p>
        </div>
        <div className="items flex items-center">
          <button>Click</button>
        </div>
      </main>
    </>
  )
}

export default App