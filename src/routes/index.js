import React from 'react'
import { Redirect } from 'react-router-dom'
import Home from '../application/Home'
import Recommend from '../application/Recommend'
import Ranks from '../application/Ranks'
import Singers from '../application/Singers';
export default [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => (
          <Redirect to={"/recommend"}/>
        )
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/ranks',
        component: Ranks
      },
      {
        path: '/singers',
        component: Singers
      }
    ]
  },
]