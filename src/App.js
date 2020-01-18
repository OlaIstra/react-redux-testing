import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from './actions'

import { Header } from './components/header/Header'
import Headline from './components/headline/Headline'
import ListItem from './components/listItem/ListItem'
import ProjectBtn from './components/button/Button'

import 'materialize-css'

const tempArr = [
  {
    fName: 'Joe',
    age: 24,
    onlineStatus: true,
  },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.fetch = this.fetch.bind(this)
  }

  fetch() {
    this.props.fetchPosts()
  }

  render() {
    const configBtn = {
      title: 'get posts',
      emitEvent: this.fetch,
    }

    const { posts } = this.props

    console.log(posts)
    return (
      <div className="App">
        <Header />

        <main>
          <Headline
            header="Posts"
            desc="Click button to see posts"
            tempArr={tempArr}
          />
          <ProjectBtn {...configBtn} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post
                const configListItem = {
                  title,
                  desc: body,
                }
                return <ListItem key={index} {...configListItem} />
              })}
            </div>
          )}
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { fetchPosts })(App)
