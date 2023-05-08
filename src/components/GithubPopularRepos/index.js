import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Repositoryitem from '../RepositoryItem'
import Languageitem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const statusmark = {
  initial: 'initial',
  progress: 'progress',
  success: 'success',
}

class GithubPopularRepos extends Component {
  state = {active: 'ALL', status: statusmark.initial, repoitem: []}

  componentDidMount() {
    this.getdetails()
  }

  getdetails = async () => {
    const {active} = this.state
    this.setState(object => ({status: statusmark.progress}))
    const url = `https://apis.ccbp.in/popular-repos?language=${active}`
    const respsonse = await fetch(url)
    const responsedata = await respsonse.json()
    const updateddata = responsedata.popular_repos.map(item => ({
      avatarUrl: item.avatar_url,
      forksCount: item.forks_count,
      id: item.id,
      issuesCount: item.issues_count,
      name: item.name,
      starsCount: item.stars_count,
    }))
    console.log(updateddata)
    if (respsonse.ok === true) {
      this.setState(object => ({
        repoitem: updateddata,
        status: statusmark.success,
      }))
    }
  }

  activebutton = id => {
    this.setState({active: id}, this.getdetails)
  }

  getLoader = () => (
    <div>
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {repoitem, status, active} = this.state
    console.log(status === statusmark.progress)
    return (
      <div className="maincontainer">
        <h1>Popular</h1>
        <div>
          <div>
            {languageFiltersData.map(object => (
              <Languageitem
                key={object.id}
                activebutton={this.activebutton}
                active={active}
                element={object}
              />
            ))}
          </div>
        </div>

        <div className="unordermaincontainer">
          {status === 'progress' ? (
            this.getLoader()
          ) : (
            <ul className="unorder">
              {repoitem.map(object => (
                <Repositoryitem key={object.id} element={object} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
