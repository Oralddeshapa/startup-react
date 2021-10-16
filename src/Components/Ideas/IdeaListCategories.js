import * as React from 'react';
import { useDispatch } from 'react-redux'

export default function IdeaListCategories() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const dispatch = useDispatch()

  return (
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'id' })}}>ID</button>
      <button type="button" class="btn btn-secondary"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'author' })}}>Author</button>
      <button type="button" class="btn btn-secondary"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'title' })}}>Title</button>
      <button type="button" class="btn btn-secondary"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'problem' })}}>Problem</button>
      <button type="button" class="btn btn-secondary"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'region' })}}>Region</button>
      <button type="button" class="btn btn-secondary"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'field' })}}>Field</button>
      <button type="button" class="btn btn-secondary"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'rating' })}}>Rating</button>
      <button type="button" class="btn btn-secondary"
      onClick={() => {dispatch({ type: 'SWAP_STATE', payload: 'views' })}}>Views</button>
    </div>
  );
}
