import { useDispatch } from 'react-redux'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import React from 'react';
import './Arrow.css';

export default function Arrows({ field }) {
  const dispatch = useDispatch()
  return (
    <div class="Arrows" style = {{cursor: "pointer"}}>
      <div class="arrow"
        onClick={() => {dispatch({ type: 'SORT_UP_IDEAS', payload: field })}}>
      <ArrowDropUpIcon/></div>
      <div style={{'height': "12px", 'margin-bottom' : '-50%', cursor: "pointer"}}
      onClick={() => {dispatch({ type: 'SORT_DOWN_IDEAS', payload: field })}}>
      <ArrowDropDownIcon style={{'margin-bottom' : '-50%'}}/></div>
    </div>
  )
}
