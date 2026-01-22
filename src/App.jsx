// importing components to the main app
import './tw-styles.css'
import TitleBar from './components/TitleBar'
import MapDisplay from './components/MapDisplay'
import PlaqueModal from './components/PlaqueModal'

function App() { // function that returns an html fragment

  return (
  <div className="mx-auto max-w-screen-xl bg-gray-50 min-h-screen">
    <TitleBar title="Recommended Reads"/>
    <TitleBar title="Second heading"/>
    <MapDisplay longitude={18.423} latitude={-33.92} zoom ={10} />
    <PlaqueModal />
  </div>
)
}

export default App
