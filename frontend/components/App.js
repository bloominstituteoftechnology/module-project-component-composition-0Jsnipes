import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`




function App() {
  const [apod, setApod]=useState()


  useEffect(()=> {
    function fetchPhoto(){
      axios.get(url)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })

    }
     fetchPhoto()
   
  }, [])
  if (!apod)  return 'Fetching photo of the day...'
  return (
  
  <section>
   <Card 
    title = {apod.title}
    text = {apod.explanation}
    imageURL = {apod.url}
    date = {apod.date}
    />
  </section>
  )
}

export default App
