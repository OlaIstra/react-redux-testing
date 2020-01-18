import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProjectBtn extends Component {
  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent()
    }
  }

  render() {
    let { title } = this.props || 'button'

    if (title === undefined) {
      title = 'button'
    }

    return (
      <div
        className="waves-effect waves-light btn"
        data-test="buttonComponent"
        onClick={() => this.submitEvent()}
      >
        {title}
      </div>
    )
  }
}

ProjectBtn.propTypes = {
  title: PropTypes.string,
  emitEvent: PropTypes.func,
}

export default ProjectBtn
