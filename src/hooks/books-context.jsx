import { createContext } from 'react'

export const BookContext = createContext()

const Provider = ({ children }) => {
  // const bookList = [
  //   {
  //     id: '1',
  //     title: 'new offers',
  //     data: [
  //       {
  //         id: '1',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '2',
  //         title: 'animal farm',
  //         writer: 'george orwell',
  //       },
  //       {
  //         id: '3',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '4',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '5',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '6',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '7',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '8',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //     ]
  //   },
  //   {
  //     id: '2',
  //     title: 'romance',
  //     data: [
  //       {
  //         id: '9',
  //         title: 'romance',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '2',
  //         title: 'animal farm',
  //         writer: 'george orwell',
  //       },
  //       {
  //         id: '3',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '4',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '5',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '6',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '7',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '8',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //     ]
  //   },
  //   {
  //     id: '3',
  //     title: 'fiction',
  //     data: [
  //       {
  //         id: '10',
  //         title: 'fiction',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '2',
  //         title: 'animal farm',
  //         writer: 'george orwell',
  //       },
  //       {
  //         id: '3',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '4',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '5',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '6',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '7',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '8',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //     ]
  //   },
  //   {
  //     id: '4',
  //     title: 'adventure',
  //     data: [
  //       {
  //         id: '11',
  //         title: 'adventure',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '2',
  //         title: 'animal farm',
  //         writer: 'george orwell',
  //       },
  //       {
  //         id: '3',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '4',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '5',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '6',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '7',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '8',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //     ]
  //   },
  //   {
  //     id: '5',
  //     title: 'crime',
  //     data: [
  //       {
  //         id: '12',
  //         title: 'crime',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '2',
  //         title: 'animal farm',
  //         writer: 'george orwell',
  //       },
  //       {
  //         id: '3',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '4',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '5',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '6',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '7',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //       {
  //         id: '8',
  //         title: 'no longer human',
  //         writer: 'osamu dazai',
  //       },
  //     ]
  //   },
  // ]

  const types = ['new-release', 'romance', 'fiction', 'adventure', 'crime']

  const bookList = [
    {
      id: '9',
      title: 'romance',
      writer: 'osamu dazai',
      type: ['romance']
    },
    {
      id: '10',
      title: 'fiction',
      writer: 'osamu dazai',
      type: ['fiction']
    },
    {
      id: '11',
      title: 'adventure-fiction',
      writer: 'osamu dazai',
      type: ['adventure', 'fiction'],
    },
    {
      id: '12',
      title: 'crime',
      writer: 'osamu dazai',
      type: ['crime'],
    },
    {
      id: '1',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime']
    },
    {
      id: '2',
      title: 'animal farm',
      writer: 'george orwell',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime']
    },
    {
      id: '3',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime']
    },
    {
      id: '4',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime']
    },
    {
      id: '5',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime']
    },
    {
      id: '6',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime']
    },
    {
      id: '7',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime']
    },
    {
      id: '8',
      title: 'no longer human',
      writer: 'osamu dazai',
      type: ['romance', 'new-release', 'fiction', 'adventure', 'crime']
    },
   
  ]
  const valuesToShare = {
    bookList,
    types
  }

  return (
    <BookContext.Provider value={valuesToShare}>
      {children}
    </BookContext.Provider>
  )
}

export default Provider