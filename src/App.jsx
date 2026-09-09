import Header from './components/Header'
import Card from './components/Card'
import { Children } from 'react'
import { useState } from 'react'

function Panel({children}) {
  return (
    <div className='panel'>{children}</div>
  )
}

function DeleteButton({onDelete}) {
  return <button onClick={onDelete}>Delete</button>
}


function App() {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div>
      <Card title={"title"} price={"a million"} inStock={"yes"}/>
    </div>
    <div>
      <Card />
    </div>
    <Panel>
      <h1>this is a panel</h1>
      <h2>this is also part of the panel</h2>
    </Panel>

    <DeleteButton onDelete={() => removeItem(item.id)} />
    </>
  )
}



function Example() {
  const name = "Isaac"
  const isLogged = true
  return (
    <>
    <h1 className="title">Hello, {name}</h1>
    <p>{1 + 1 + 3}</p>
    <p>{name.toUpperCase()}</p>
    <br />
    <img src="/vite.svg" alt="logo"/>
    <button onClick={()=> alert('hi')} tabIndex={0}>Click</button>
    <div style={{backgroundColor: 'lightblue', fontSize:20}}>boxed</div>
    </>
  )
}


function Counter() {
  let count = 0
  return <button onClick={() => count++}>{count}</button>
}

function handleClick(count, setCount){
  setCount(count => count + 1)
  setCount(count => count + 2)
  setCount(count => count + 3)
  
}

function ReactiveCounter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => handleClick(count, setCount)}>{count}</button>
}

function Cart() {
  const [cart,setCart] = useState([
    {id:'a1', name:'laptop',price:100},
    {id:'a2', name:'mouse',price:200}
  ])

  // function addItem(name,price) {
  //   const newItem = {id: crypto.randomUUID(), name, price}
  //   setCart([...cart, newItem])
  // }


  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  function addItem(e) {
    e.preventDefault()

    const newItem = {
      id: crypto.randomUUID(),
      name: name,
      price: Number(price) || 209
    }
    
    setCart([...cart, newItem])

    setName("")
    setPrice("")
  }


  function increasePrice(id) {
    setCart(cart.map(item =>
      item.id === id
      ? {...item, price: item.price + 100}
      : item
    ))
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
        <div></div>
        <input type='number' placeholder='price' defaultValue={'100'} value={price} onChange={(e) => setPrice(e.target.value)}/>
        <button type='submit'>
          Add item
        </button>
      </form>


      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>

          <button onClick={()=>increasePrice(item.id)}>
            Increase price
          </button>
        </div>
      ))}

      {/* <button onClick={() => addItem("keyboard",300)}>
        add a keyboard lol
      </button> */}
    </div>
  )

}



function stateTest() {
  return (
    <div>
      <div>
        <Counter />
      </div>
      <div>
        <ReactiveCounter />
      </div>
    </div>
  )
}

export default Cart