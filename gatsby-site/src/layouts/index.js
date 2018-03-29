import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      script={[
        {src:"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"},
        {src:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"},
      ]}
      link={[
        { href: "//cdn.quilljs.com/1.2.6/quill.snow.css", rel:"stylesheet" },
        { href: "//cdn.quilljs.com/1.2.6/quill.bubble.css", rel: "stylesheet" },
        { href: "//cdn.quilljs.com/1.2.6/quill.core.css", rel: "stylesheet" },
        { rel:"stylesheet", href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
