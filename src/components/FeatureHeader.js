import React from 'react';
import FeatureSelect from './FeatureSelect';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function FeatureHeader(props) {
    console.log(props)
    return (
        <div className='feature-header'>
            <FeatureSelect label="Usage Frequency" options={options} selectedValue = {props.usageFrequency} />
            <FeatureSelect label="Visibility" options={options} selectedValue = {props.visibility}  />
            <FeatureSelect label="Complexity" options={options} selectedValue = {props.complexity}  />
            <FeatureSelect label="Geography" options={options} selectedValue = {props.geography}  />
            <FeatureSelect label="Turn over" options={options} selectedValue = {props.turnOver} />
        </div>
    )
}