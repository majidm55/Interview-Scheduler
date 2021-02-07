import React from 'react';
import DayListItem from './DayListItem';

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  }
];

export default function DayList(props) {
  const dayData = days ? days.map((days, index) => {
    return <DayListItem
    key={index} 
    name={days.name} 
    spots={days.spots} 
    selected={days.name === props.day}
    setDay={props.setDay}  />
  }) : "There is no day"
  return (
    <ul>
      {dayData}
    </ul>
  )
}