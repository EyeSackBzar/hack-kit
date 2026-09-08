function App() {
  return (
    <div>
      <h1>Hack Kit</h1>
    </div>
  )
}

function Example() {
  const name = "Isaac"
  const isLogged = true
  return (
    <>
    <h1 className="title">Hello, {name}</h1>
    <p>{1 + 1}</p>
    <p>{name.toUpperCase()}</p>
    <br />
    <img src="/vite.svg" alt="logo"/>
    <button onClick={()=> alert('hi')} tabIndex={0}>Click</button>
    <div style={{backgroundColor: 'lightblue', fontSize:20}}>boxed</div>
    </>
  )
}

export default Example