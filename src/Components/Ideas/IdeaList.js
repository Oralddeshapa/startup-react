import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './IdeaList.css';
import { Table } from 'reactstrap';
import Rating from '@material-ui/lab/Rating'
import IdeaListCategories from './IdeaListCategories'
import { useSelector, useDispatch } from 'react-redux'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Arrows from '../Helpers/Arrows'
import Subs from './Subs'

export default function IdeaList() {

  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories)
  const ideas = useSelector((state) => state.ideas.ideas)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/ideas`,
    { params: {
        token: localStorage.getItem('token')
      }
    })
     .then(res => {
       dispatch({type: 'LOAD_IDEAS', payload: res.data})
     })
     .catch(error => {
       console.log(error)
     })
  },[])

  const handleViews = (e) => {
    console.log()
  }

  return (
    <div>
      <div class="ILC">
        <IdeaListCategories />
      </div>
      <div class="Table_container">
        <Table bordered hover>
          <thead>
            <tr>
              { categories.id ?
                <th>ID
                  <Arrows field='id'/>
                </th> : null }
              { categories.author ?
                <th>Author
                  <Arrows field='creator'/>
                </th> : null }
              { categories.title ?
                <th>Title
                  <Arrows field='title'/>
                </th> : null }
              { categories.problem ?
                <th>Problem
                  <Arrows field='problem'/>
                </th> : null }
              { categories.region ?
                <th>Region
                  <Arrows field='region'/>
                </th> : null }
              { categories.field ?
                <th>Field
                  <Arrows field='field'/>
                </th> : null }
              { categories.rating ?
                <th>Rating
                  <Arrows field='rating'/>
                </th> : null }
              { categories.views ?
                <th>Views
                  <Arrows field='views'/>
                </th> : null }
            </tr>
          </thead>
          <tbody>
            { ideas.map( idea =>
              <tr key={ idea.id }>
                { categories.id ? <th scope="row">{ idea.id }</th> : null }
                { categories.author ? <td>{ idea.creator }</td> : null }
                { categories.title ? <td>
                  <a href={'/ideas/' + idea.id}>
                    { idea.title }
                  </a>
                </td> : null }
                { categories.problem ? <td>{ idea.problem }</td> : null }
                { categories.region ? <td>{ idea.region }</td> : null }
                { categories.field ? <td>{ idea.field }</td> : null }
                { categories.rating ? <Rating name="disabled" disabled value={ idea.rating }/> : null }
                { categories.views ? (
                    localStorage.getItem('role') === 'creator' ? (
                    <td>
                      <Subs views={idea.views} subs={idea.subscribers} />
                    </td>
                    ) : (
                      <td>{idea.views}</td>
                    )
                  ) : null }
              </tr>
            ) }
          </tbody>
        </Table>
      </div>
    </div>
  )
}
