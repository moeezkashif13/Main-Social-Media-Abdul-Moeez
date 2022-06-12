import chroma from 'chroma-js';

import { colourOptions } from '../components/listOfHobbies';
import Select, { StylesConfig } from 'react-select';

import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();


const colourStyles = {
  control: (styles) => {


    return {
        ...styles, backgroundColor: 'white'
    }

  },
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {

    
    const color = chroma(data.color);

    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.2).css()
        : undefined,
 
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            // ? data.color
            ?'red'
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
    backgroundColor: color.alpha(0.3).css(),


    };
  },
  multiValueLabel: (styles, { data }) => {

    const color = chroma(data.color);


    return{
      ...styles,
      color: color.saturate(100).css(),
  
    }


  },
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

export default function SelectComp(){

    return  <Select
    closeMenuOnSelect={false}

    isMulti
    options={colourOptions}
    styles={colourStyles}

    components={animatedComponents}


  />
}