import * as React from 'react';
import { useDispatch } from 'react-redux'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function IdeaListCategories() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  function storage(name) {
    console.log(localStorage.getItem(name) === "true")
    return (localStorage.getItem(name) === "true")
  }

  const dispatch = useDispatch()

  return (
    <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting">
      <ToggleButton value="id" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'id' })}}
      selected={ storage('id') ? true : false}>
        ID
      </ToggleButton>
      <ToggleButton value="author" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'author' })}}
      selected={ storage('id') ? true : false}>
        Author
      </ToggleButton>
      <ToggleButton value="title" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'title' })}}
      selected={ storage('id') ? true : false}>
        Title
      </ToggleButton>
      <ToggleButton value="problem" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'problem' })}}
      selected={ storage('id') ? true : false}>
        Problem
      </ToggleButton>
      <ToggleButton value="region" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'region' })}}
      selected={ storage('id') ? true : false}>
        Region
      </ToggleButton>
      <ToggleButton value="field" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'field' })}}
      selected={ storage('id') ? true : false}>
        Field
      </ToggleButton>
      <ToggleButton value="rating" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'rating' })}}
      selected={ storage('id') ? true : false}>
        Rating
      </ToggleButton>
      <ToggleButton value="views" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'views' })}}
      selected={ storage('id') ? true : false}>
        Views
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
