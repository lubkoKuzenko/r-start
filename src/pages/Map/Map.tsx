import React from 'react';
import GetCoordinates from './components/GetCoordinates';
import Levi9Offices from './components/Levi9Offices';
import MapRadios from './components/MapRadios';
import { MapsEnums } from './map.enums';
// * dependency: ol (OpenLayer); Formik; Bulma;

function renderMap(map: MapsEnums) {
  const choosenMap = {
    [MapsEnums.levi9_offices]: <Levi9Offices />,
    [MapsEnums.get_coordinates]: <GetCoordinates />
  }[map];
  return <>{choosenMap}</>;
}

const Map: React.FC<unknown> = () => {
  const [selectedMap, setSelectedMap] = React.useState(MapsEnums.levi9_offices);
  return (
    <div className="pb-2">
      <div className="mb-1">
        <MapRadios selectedValue={selectedMap} callback={setSelectedMap} />
      </div>
      <div>{renderMap(selectedMap)}</div>
    </div>
  );
};
export default Map;
