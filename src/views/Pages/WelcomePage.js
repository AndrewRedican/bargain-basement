import React from 'react'
import { Navbar } from 'shards-react'

export const WelcomePage = () => (
  <Navbar theme='primary' className='welcome-page-container'>
    <div className='github-container'>
      <a
        className='link-to-repo'
        href='https://andrewredican.github.io/bargain-basement/'
        target='_blank'
      >
        <h1 className='project-header'>bargain-basement</h1>
      </a>
      <h2 className='project-descriptor'>
        Bargain Basement - Frontend Web Application
      </h2>
    </div>
  </Navbar>
)
