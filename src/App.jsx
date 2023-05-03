
import './App.css'
import Header from './components/header/header'
import PostContainer from './components/posts/postContainer'
import PostArticle from './components/posts/postArticle'

import ListUser from './components/users/listUser'
import ListProducts from './components/products/ListProducts'
 import CallToAction from './components/EventsDOM/EventsDom'

function App() {
  // 10 productos
  const productos = [
    {
      id:0,
      name:'Jabón',
      precio: '200',
      cantidad: 3
    },
    {
      id:1,
      name:'Pasta',
      precio: '100',
      cantidad: 5
    },
    {
      id:2,
      name:'Papel',
      precio: '400',
      cantidad: 1
    },
    {
      id:2,
      name:'Huevo',
      precio: '400',
      cantidad: 1
    }
  ]
  
  const usuarios = [
    {
      id: 1,
      name: "Chidume Nnamdi",
      age: 54,
    },
    {
      id: 2,
      name: "Karim",
      age: 24,
    },
    {
      id: 3,
      name: "Bruno",
      age: 45,
    },
    {
      id: 4,
      name: "Ola Brown",
      age: 24,
    }
  ]

  const  items =  [
    "Item 1",
    "Item 2"
  ]

  // props
  return (
    <>
     < CallToAction /> 
      {/* <ListProducts products={productos} /> */}
      {/* <ListUser users={usuarios} /> */}
      {/* <Header 
        theme="dark" 
        position="left"
        items={ items }
      /> */}
      {/* children */}
      {/* <PostContainer propfake="container__post" >
        <PostArticle title="El caballero de la ..." description="El caballero de la ... description" />
        <PostArticle title="El quijote" description="En algun lugar de la mancha ..." />
        <PostArticle title="Title 3" description="Title 3 desc" />
      </PostContainer> */}
    </>
  )

}

export default App

