import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import SearchForm from './searchForm'


const Dashboard = ({}) => {
   
   

    return (
       <Fragment>
          <h1>
              <SearchForm/>
          </h1>
       </Fragment>
    )
}


export default (Dashboard)
