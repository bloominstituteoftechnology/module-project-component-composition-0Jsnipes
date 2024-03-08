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
   /* setApod(
       {
       
          "date": "2024-03-08",
          "explanation": "The Tarantula Nebula, also known as 30 Doradus, is more than a thousand light-years in diameter, a giant star forming region within nearby satellite galaxy the Large Magellanic Cloud. About 180 thousand light-years away, it's the largest, most violent star forming region known in the whole Local Group of galaxies. The cosmic arachnid sprawls across this magnificent view, an assembly of image data from large space- and ground-based telescopes. Within the Tarantula (NGC 2070), intense radiation, s...",
          "hdurl": "https://apod.nasa.gov/apod/image/2403/Tarantula-HST-ESO-Webb-LL.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "The Tarantula Zone",
          "url": "https://apod.nasa.gov/apod/image/2403/Tarantula-HST-ESO-Webb-SS1024.jpg"
  }) */
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
