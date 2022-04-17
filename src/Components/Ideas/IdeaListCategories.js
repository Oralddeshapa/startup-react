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
    if (localStorage.getItem(name) === "true") {
      return true
    }
    else if (localStorage.getItem(name) === "false") {
      return false
    }
    else
      return null
  }

  function is_active(name) {
    return ((storage(name) != null) ? storage(name) : true)
  }

  const dispatch = useDispatch()

  return (
    <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting">
      <ToggleButton value="id" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'id' })}}
      selected={ is_active('id') }>
        ID
      </ToggleButton>
      <ToggleButton value="author" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'author' })}}
      selected={ is_active('author') }>
        Author
      </ToggleButton>
      <ToggleButton value="title" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'title' })}}
      selected={ is_active('title') }>
        Title
      </ToggleButton>
      <ToggleButton value="problem" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'problem' })}}
      selected={ is_active('problem') }>
        Problem
      </ToggleButton>
      <ToggleButton value="region" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'region' })}}
      selected={ is_active('region') }>
        Region
      </ToggleButton>
      <ToggleButton value="field" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'field' })}}
      selected={ is_active('field') }>
        Field
      </ToggleButton>
      <ToggleButton value="rating" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'rating' })}}
      selected={ is_active('rating') }>
        Rating
      </ToggleButton>
      <ToggleButton value="views" aria-label="bold"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'views' })}}
      selected={ is_active('views') }>
        Views
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
