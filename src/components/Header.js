import React, { useEffect, useState } from 'react'

const Header = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setCount(prevValue => prevValue + 1)
    }, 1000)
  }, [])
return <h1>Powersites Header Count: {count}</h1>
}

export default Header