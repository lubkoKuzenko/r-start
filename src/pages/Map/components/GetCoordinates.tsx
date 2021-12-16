import { Map, Overlay, View } from 'ol';
import { toStringHDMS } from 'ol/coordinate';
import { Tile as TileLayer } from 'ol/layer';
import { transform } from 'ol/proj';
import { OSM } from 'ol/source';
import React, { MutableRefObject } from 'react';

const styles = {
  map: {
    width: '100%',
    height: '80vh'
  },
  overlay: {
    width: '20px',
    height: '20px',
    backgroundColor: 'red',
    clipPath: 'polygon(50% 0, 87% 15%, 50% 100%, 17% 15%)'
  }
};

const center = transform([24.031504, 49.826647], 'EPSG:4326', 'EPSG:3857');

const layer = new TileLayer({
  source: new OSM()
});

const view = new View({
  center,
  zoom: 13
});

const map = new Map({
  view: view,
  layers: [layer]
});

const overlay = new Overlay({
  positioning: 'bottom-center'
});

const GetCoordinates = () => {
  const mapRef = React.useRef<HTMLElement>();
  const overlayRef = React.useRef<HTMLElement>();
  const [coordToShow, setCoordToShow] = React.useState('');

  map.on('click', function (event) {
    const coord = event.coordinate;
    const degrees = transform(coord, 'EPSG:3857', 'EPSG:4326');
    const hdms = toStringHDMS(degrees);

    setCoordToShow(hdms);
    overlay.setPosition(coord);
    map.addOverlay(overlay);
  });

  React.useEffect(() => {
    map.setTarget(mapRef.current);
    overlay.setElement(overlayRef.current);
    return () => map.setTarget(undefined);
  });

  return (
    <div>
      <p className="box">{coordToShow}</p>
      <div ref={overlayRef as MutableRefObject<HTMLDivElement>} style={styles.overlay}></div>
      <div className="box" style={styles.map} ref={mapRef as MutableRefObject<HTMLDivElement>}></div>
    </div>
  );
};

export default GetCoordinates;
