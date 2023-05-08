import './index.css'

const Languageitem = props => {
  const {element, activebutton, active} = props
  const {id, language} = element

  return (
    <button
      onClick={() => activebutton(id)}
      className={`button ${active === id && 'highlightbutton'}`}
    >
      {language}
    </button>
  )
}

export default Languageitem
