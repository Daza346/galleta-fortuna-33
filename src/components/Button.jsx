import React from "react"
import getRandomFromArr from "../utils/getRandomFromArr"
import phrases from "../utils/phrases.json"
import arrPhotos from '../utils/photos.json'


const Button = ({setQuoteRandom, setPhotoRandom}) => {

    const handleChangePhrase = () => {
      setQuoteRandom(getRandomFromArr(phrases))
      setPhotoRandom(getRandomFromArr(arrPhotos))
    }
  return (
    <button className ="app__btn" onClick={handleChangePhrase}>Ver otra frase</button>
  )
}

export default Button