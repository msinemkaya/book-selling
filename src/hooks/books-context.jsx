import { createContext, useEffect, useState } from 'react'

export const BookContext = createContext()


const Provider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)

  const types = ['new-release', 'romance', 'fiction', 'adventure', 'crime']

  const bookList = [
    {
      id: '9',
      title: 'romance',
      writer: 'osamu dazai',
      type: ['romance'],
      offers: [
        {
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '2'
        },{
          user: 'hako',
          price: '3.00',
          condition: 'slightly damaged',
          edition: '1'
        },
      ]
    },
    {
      id: '10',
      title: 'fiction',
      writer: 'osamu dazai',
      type: ['fiction'],
      offers: [
        {
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '2'
        },{
          user: 'hako',
          price: '3.00',
          condition: 'slightly damaged',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },
      ]
    },
    {
      id: '11',
      title: 'adventure-fiction',
      writer: 'osamu dazai',
      type: ['adventure', 'fiction'],
      offers: [
        {
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '2'
        },{
          user: 'hako',
          price: '3.00',
          condition: 'slightly damaged',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },
      ]
    },
    {
      id: '12',
      title: 'crime',
      writer: 'osamu dazai',
      type: ['crime'],
      offers: [
        {
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '2'
        },{
          user: 'hako',
          price: '3.00',
          condition: 'slightly damaged',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },
      ]
    },
    {
      id: '1',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime'],
      offers: [
        {
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '2'
        },{
          user: 'hako',
          price: '3.00',
          condition: 'slightly damaged',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },
      ]
    },
    {
      id: '2',
      title: 'animal farm',
      writer: 'george orwell',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime'],
      offers: [
        {
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '2'
        },{
          user: 'hako',
          price: '3.00',
          condition: 'slightly damaged',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },
      ]
    },
    {
      id: '3',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime'],
      offers: [
        {
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '2'
        },{
          user: 'hako',
          price: '3.00',
          condition: 'slightly damaged',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },
      ]
    },
    {
      id: '4',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime'],
      offers: [
        {
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '2'
        },{
          user: 'hako',
          price: '3.00',
          condition: 'slightly damaged',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },
      ]
    },
    {
      id: '5',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime'],
      offers: [
        {
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '2'
        },{
          user: 'hako',
          price: '3.00',
          condition: 'slightly damaged',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },
      ]
    },
    {
      id: '6',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime'],
      offers: [
        {
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '2'
        },{
          user: 'hako',
          price: '3.00',
          condition: 'slightly damaged',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },
      ]
    },
    {
      id: '7',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime'],
      offers: [
        {
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '2'
        },{
          user: 'hako',
          price: '3.00',
          condition: 'slightly damaged',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },
      ]
    },
    {
      id: '8',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime'],
      offers: [
        {
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '2'
        },{
          user: 'hako',
          price: '3.00',
          condition: 'slightly damaged',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },{
          user: 'meliko',
          price: '2.99',
          condition: 'barely used',
          edition: '1'
        },
      ]
    },
    
  ]
  
  
  const handleSubmit = (e) => {
    setIsLogged(!isLogged)
  }
  
  const valuesToShare = {
    bookList,
    types,
    isLogged,
    handleSubmit,
  }

  return (
    <BookContext.Provider value={valuesToShare}>
      {children}
    </BookContext.Provider>
  )
}

export default Provider