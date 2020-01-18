import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListItem extends Component {
  render() {
    const { title, desc } = this.props

    if (!title) {
      return null
    }

    return (
      <div className="row" data-test="listItemComponent">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title" data-test="titleComponent">
                {title}
              </span>
              <p data-test="descComponent">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
}

export default ListItem
