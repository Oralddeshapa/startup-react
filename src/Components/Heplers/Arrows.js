import { useDispatch } from 'react-redux'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import React from 'react';
import './Arrows.css';

export default function Arrows({ field }) {
  return (
    <div class="Arrows">
      <div class="arrow"><ArrowDropUpIcon/></div>
      <div class="arrow"><ArrowDropDownIcon
      onClick={() => {dispatch({ type: 'SORT_IDEAS', payload: field })}}
      /></div>
    </div>
  )
}
