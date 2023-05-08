import './index.css'

const Repositoryitem = props => {
  const {element} = props
  const {name, starsCount, issueCount, avatarUrl, forksCount} = element
  return (
    <li className="list">
      <img className="avatar" src={avatarUrl} alt="img" />
      <div className="cardcontent">
        <p className="name">{name}</p>
        <p className="p1">
          <img
            className="itemimg"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          />
          {starsCount} stars
        </p>
        <p className="p1">
          {' '}
          <img
            className="itemimg"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          />
          {forksCount} forks
        </p>
        <p className="p1">
          {' '}
          <img
            className="itemimg"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          />
          {issueCount} issues
        </p>
      </div>
    </li>
  )
}

export default Repositoryitem
