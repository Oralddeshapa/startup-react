import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch } from 'react-redux'

export default function IdeaListCategories() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const dispatch = useDispatch()

  const onChange = (e) => {
    console.log('123')
  }

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton
       value="ID"
        onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'id' })}}>
        ID
      </ToggleButton>
      <ToggleButton value="Author"
        onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'author' })}}>
        Author
      </ToggleButton>
      <ToggleButton value="Title"
       onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'title' })}}>
        Title
      </ToggleButton>
      <ToggleButton value="Problem"
       onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'problem' })}}>
        Problem
      </ToggleButton>
      <ToggleButton value="Region"
       onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'region' })}}>
        Region
      </ToggleButton>
      <ToggleButton value="Field"
       onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'field' })}}>
        Field
      </ToggleButton>
      <ToggleButton value="Rating"
       onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'rating' })}}>
        Rating
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
