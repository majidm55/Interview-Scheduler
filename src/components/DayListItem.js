import React from 'react';
import classNames from 'classnames';
import 'components/DayListItem.scss';

export default function DayListItem(props) {

  const dayListClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': !props.spots
  })
  function formatSpots (spots) {
    if (spots > 1) {
      return spots + " spots remaining";
    } else if (!spots) {
      return spots = "no spots remaining";
    } else if(spots = 1) {
      return spots = "1 spot remaining"
    }
  }
  return (
    <li className={dayListClass} onClick={(() => props.setDay(props.name))}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  )
}