import React, { useState } from 'react'
import Buttons from './components/Buttons'
import AIcard from './components/cards/AIcard'

const App = () => {
   const [index, setIndex] = useState(0)
  const data = [{
    name:"ARTIFICIAL INTELLIGENCE",
    heading:"Build tomorrow’s AI <br/> landscape today",
    pera : "From work to play to education, AI impacts our lives in so many ways. It <br/> applies machine learning to personalize our social experiences. It enhances <br/> education, healthcare, transportation, agriculture and finance. And that’s <br/> just scratching the surface.",
    button:"View AI jobs"
  },
  {
    name:"METAVERSE AND WEARABLES",
    heading:"Metaverse and Wearables:<br/> reshaping our reality",
    pera : "The Reality Labs team builds new ways for people to connect and share <br/> experiences through the metaverse and with innovative wearable devices. <br/> From exploring interactive 3D worlds via a Meta Quest headset to <br/> capturing moments and connecting with people with our next-generation <br/> Ray-Ban AI glasses, we’re reimagining what’s real and what’s out of this <br/> world.",
    button:"View Metaverse and Wearables jobs"
  },
  {
    name:"SOFTWARE ENGINEERING",
    heading:"Build the future of tech across multiple modalities",
    pera : "Meta continues to develop market-leading models across systems that <br/> move the future of tech forward. On any one of our engineering teams, you. <br/> Fcan build innovative features and functionality that bring our technologies <br/> to life.",
    button:"View Software Enineering jobs"
  },
  {
    name:"SOFTWARE ENGINEERING",
    heading:"Build the future of tech across multiple modalities",
    pera : "Meta continues to develop market-leading models across systems that <br/> move the future of tech forward. On any one of our engineering teams, you. <br/> Fcan build innovative features and functionality that bring our technologies <br/> to life.",
    button:"View Software Enineering jobs"
  }
]
  return (
    <div>
      <Buttons setIndex={setIndex}/>
      <div className="flex justify-center items-center h-[80vh]">
        <AIcard data={data[index]} index ={index}  />
      </div>
    </div>
  )
}

export default App