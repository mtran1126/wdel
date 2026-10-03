import './App.css'
import StationHeader from './StationHeader'
import StreamPlayer from './StreamPlayer'
import CoverageMap from './CoverageMap'

function App() {
  return (
    <>
      <StationHeader
        stationName="WDEL"
        location="Delaware County, PA"
        slogan="Delco's Greatest Hits!"
      />

      <StreamPlayer
        stationName="WDEL"
        streamUrl="https://playerservices.streamtheworld.com/api/livestreamredirect/KCMOFM.mp3"
      />

      <CoverageMap stationName="WDEL" />
    </>
  );
}

export default App;