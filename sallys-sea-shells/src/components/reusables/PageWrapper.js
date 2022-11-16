
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'

export default function PageWrapper(props) {

  return (
    <div className="flex-col container">
        <Header user={props.user} setUser={props.setUser} />
        {props.children}
    </div>
  )
}
