const Phrase = ({quoteRandom}) => {

    console.log(quoteRandom)
    
  return (
    <p className="app__phrase">{quoteRandom.phrase}</p>
  )
}

export default Phrase