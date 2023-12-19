import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Phrase from './components/Phrase'
import getRandomFromArr from './utils/getRandomFromArr'
import phrases from './utils/phrases.json'
import arrPhotos from './utils/photos.json'

function App() {

 const initialPhrase= getRandomFromArr(phrases)
 const initialPhoto = getRandomFromArr(arrPhotos)

const [quoteRandom, setQuoteRandom] = useState(initialPhrase)
const [photoRandom, setPhotoRandom] = useState(initialPhoto)

const objStyle = {
  backgroundImage: `url(/fondo${photoRandom}.png)`
}

  return (
    <div className='app' style={objStyle}>
      <h1 className='app__title'>Galleta de la Fortuna</h1>

      <div className='app__card'>
      <Phrase quoteRandom={quoteRandom}/>
      <Button 
      setQuoteRandom={setQuoteRandom}
      setPhotoRandom={setPhotoRandom}
      />
      </div>
    </div>
        
  )
}

export default App
