import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

export default function IdeaList() {

  const { id, token } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_API_URL}/ideas/${id}/subscribe`, {
      id: id,
      token: token
    })
     .then(res => {
       history.push(`/ideas/${id}`)
     })
     .catch(error => {
       history.push(`/log_in`)
     })
  },[])

  return (
     <div></div>
  )
}
