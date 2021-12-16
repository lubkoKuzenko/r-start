import React from 'react';
import { MapsEnums } from '../map.enums';
import { Field, Formik } from 'formik';

const radios: { type: MapsEnums }[] = [{ type: MapsEnums.levi9_offices }, { type: MapsEnums.get_coordinates }];

const MapRadios: React.FC<{ selectedValue: MapsEnums; callback: (a: MapsEnums) => void }> = ({
  selectedValue,
  callback
}) => {
  return (
    <>
      <Formik initialValues={{ map: selectedValue }} onSubmit={() => {}}>
        {({ setFieldValue, values }) => (
          <form className="box">
            <div role="group">
              {radios.map(({ type }) => (
                <label key={type} className="radio">
                  <Field
                    onChange={() => {
                      callback(type);
                      setFieldValue('map', type);
                    }}
                    checked={values.map === type}
                    type="radio"
                    name="map"
                    className="radio ml-2 mr-2"
                    id="map"
                  />
                  {type}
                </label>
              ))}
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default MapRadios;
