import React from 'react'

export default class Story extends React.Component {
  markAsRead () {
    this.props.onMarkAsRead(this.props.story.id)
  }

  openUrl (url) {
    this.props.onUrlClick(url)
  }

  handleYurlOnClick (e) {
    e.preventDefault()
    this.openUrl(this.props.story.yurl)
  }

  handleByOnClick (e) {
    e.preventDefault()
    this.openUrl(this.props.story.by_url)
  }

  handleUrlClick (e) {
    e.preventDefault()
    this.markAsRead()
    this.openUrl(this.props.story.url)
  }

  render () {
    var story = this.props.story
    var storyState
    if (story.hasRead) {
      storyState = 'story read'
    } else {
      storyState = 'story'
    }
    return (
      <div className={storyState}>
        <div className='status-color clickable' onClick={this.markAsRead.bind(this)}></div>
        <span className='badge clickable' onClick={this.handleYurlOnClick.bind(this)}>{story.score}</span>
        <div className='media-body'>
          <span className='story-title clickable' onClick={this.handleUrlClick.bind(this)}>{story.title}</span>
          <span className='story-npm'>{story.host}</span>
          <p className='story-poster'>
            <span className='icon-comment clickable' onClick={this.handleYurlOnClick.bind(this)}>
              {story.descendants}
            </span> &ndash;&nbsp;
            <span className='clickable' onClick={this.handleByOnClick.bind(this)}>
              {story.by}
            </span> &ndash;&nbsp;
            <span className='clickable' onClick={this.handleYurlOnClick.bind(this)}>
              {story.timeAgo}
            </span>
          </p>
        </div>
      </div>
    )
  }
}

Story.propTypes = {
  onUrlClick: React.PropTypes.func.isRequired,
  onMarkAsRead: React.PropTypes.func.isRequired,
  story: React.PropTypes.object.isRequired
}
