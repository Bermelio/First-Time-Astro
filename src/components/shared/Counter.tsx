import { createSignal } from "solid-js"

export const Counter = () => {

  const [ counter, setCounter ] = createSignal(10);


  return(
    <>
      <div class="flex-row justify-center">
        <h3 class="text-4xl">Counter</h3>
        <h5 class="text-4xl">Value: {counter()}</h5>
        <button
        onclick={() => setCounter(prev => ++prev)} 
        class="p-3 bg-black-soul text-white-soul rounded m-5 text-2xl w-auto">+1</button>
        <button 
        onclick={() => setCounter(prev => --prev)} 
        class="p-3 bg-black-soul text-white-soul rounded m-5 text-2xl w-auto">-1</button>
      </div>
    </>
  )
}