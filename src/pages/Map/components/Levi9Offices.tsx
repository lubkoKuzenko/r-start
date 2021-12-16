import { Feature, Map, View } from 'ol';
import Circle from 'ol/geom/Circle';
import { Tile as TileLayer } from 'ol/layer';
import VectorLayer from 'ol/layer/Vector';
import { transform } from 'ol/proj';
import { OSM } from 'ol/source';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import React, { MutableRefObject } from 'react';
const styles = {
  map: {
    width: '100%',
    height: '80vh'
  },
  circle: new Style({
    renderer(coordinates, state) {
      const [[x, y], [x1, y1]] = coordinates as number[][];
      const ctx = state.context;
      const dx = x1 - x;
      const dy = y1 - y;
      const radius = Math.sqrt(dx * dx + dy * dy);

      const innerRadius = 0;
      const outerRadius = radius * 1.4;

      const gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
      gradient.addColorStop(0, 'rgba(255,0,0,0)');
      gradient.addColorStop(0.6, 'rgba(255,0,0,0.2)');
      gradient.addColorStop(1, 'rgba(255,0,0,0.8)');
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.strokeStyle = 'rgba(255,0,0,1)';
      ctx.stroke();
    }
  })
};

const layer = new TileLayer({
  source: new OSM()
});

const city = {
  lviv: transform([24.031504, 49.826647], 'EPSG:4326', 'EPSG:3857'),
  kyiv: transform([30.510722, 50.432639], 'EPSG:4326', 'EPSG:3857'),
  amster: transform([4.905777, 52.367884], 'EPSG:4326', 'EPSG:3857'),
  romania: transform([27.579334, 47.154739], 'EPSG:4326', 'EPSG:3857')
};

const view = new View({
  center: city.lviv,
  zoom: 13
});

const lvivCircle = new Feature({ geometry: new Circle(city.lviv, 60) });
const kyivCircle = new Feature({ geometry: new Circle(city.kyiv, 60) });
const amsterCircle = new Feature({ geometry: new Circle(city.amster, 60) });
const romaniaCircle = new Feature({ geometry: new Circle(city.romania, 60) });

lvivCircle.setStyle(styles.circle);
kyivCircle.setStyle(styles.circle);
amsterCircle.setStyle(styles.circle);
romaniaCircle.setStyle(styles.circle);

const map = new Map({
  layers: [
    layer,
    new VectorLayer({
      source: new VectorSource({
        features: [lvivCircle, kyivCircle, amsterCircle, romaniaCircle]
      })
    })
  ],
  view: view
});

function jumpTo(location: typeof city.lviv, done?: (a: boolean) => void) {
  const duration = 3000;
  const zoom = /* view.getZoom() || 0 */ 17;
  let parts = 2;
  let called = false;

  function callback(complete: boolean) {
    --parts;
    if (called) {
      return;
    }
    if (parts === 0 || !complete) {
      called = true;
      done && done(complete);
    }
  }
  view.animate(
    {
      center: location,
      duration
    },
    callback
  );
  view.animate(
    {
      zoom: zoom - 10,
      duration: duration / 3
    },
    {
      zoom,
      duration
    },
    callback
  );
}

function tourAroundOfficess() {
  const locations = [city.kyiv, city.lviv, city.amster, city.romania];
  let index = -1;
  function next(more: boolean) {
    if (more) {
      ++index;
      if (index < locations.length) {
        const delay = index === 0 ? 0 : 750;
        setTimeout(function () {
          jumpTo(locations[index], next);
        }, delay);
      }
    }
  }
  next(true);
}

function renderButtons() {
  const buttons = [
    {
      name: 'Lviv',
      city: city.lviv,
      variant: 'is-info'
    },
    {
      name: 'Kyiv',
      city: city.kyiv,
      variant: 'is-danger'
    },
    {
      name: 'Amster',
      city: city.amster,
      variant: 'is-success'
    },
    {
      name: 'Romania',
      city: city.romania,
      variant: 'is-warning'
    },
    {
      name: 'Tour around officess',
      callback: tourAroundOfficess,
      variant: 'is-link'
    }
  ];
  return (
    <div className="buttons box">
      {buttons.map(({ callback, name, variant, city }) => (
        <button
          key={name}
          onClick={() => {
            callback && callback();
            city && jumpTo(city);
          }}
          className={`button ${variant}`}>
          {name}
        </button>
      ))}
    </div>
  );
}

const Levi9Offices: React.FC<unknown> = () => {
  const mapRef = React.useRef<HTMLElement>();
  React.useEffect(() => {
    map.setTarget(mapRef.current);
    return () => map.setTarget(undefined);
  });

  return (
    <>
      {renderButtons()}
      <div className="box" style={styles.map} ref={mapRef as MutableRefObject<HTMLDivElement>}></div>
    </>
  );
};
export default Levi9Offices;
