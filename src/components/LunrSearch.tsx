import React, { ChangeEvent } from 'react'
import ReactDOM from 'react-dom'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const styles = {
  wrapper: css`
    display: inline-block;
    border-radius: 12px;
    overflow: hidden;
  `,
  input: css`
    padding: 0.25rem 1em;
    width: 100%;
    height: 40px;
    font-size: 0.9em;
  `,
  list: css`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 12px;
    display: block;
    list-style: none;
    margin: 0;
    padding: 1em;
    position: absolute;
    width: 16rem;
    margin-top: 0.5em;
    z-index: 2;
  `,
  item: css`
    border-bottom: 1px dotted #ccc;
    margin: 0;
  `,
  link: css`
    display: block;
    padding: 1em 0;
    font-size: 0.9em;
  `,
  footer: css`
    font-size: 0.75rem;
    margin: 0;
    padding: 1em;
    padding-top: 1.5em;
    text-align: center;
  `,
  hidden: css`
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  `
}

const search = (query: string): ReadonlyArray<SearchResult> => {
  const { index, store } = window.__LUNR__ && window.__LUNR__.en
  return query ? index.search(query).map(({ ref }) => store[ref]) : []
}

interface LunrSearchProps {
  readonly limit?: number
}

interface LunrSearchState {
  readonly query: string
  readonly results: ReadonlyArray<SearchResult>
  readonly isActive: boolean
}

export class LunrSearch extends React.Component<LunrSearchProps, LunrSearchState> {
  public readonly state: LunrSearchState = {
    query: '',
    results: [],
    isActive: false
  }

  readonly handleSearch = (event: ChangeEvent<{ readonly value: string }>) => {
    const query = event.target.value
    const results = search(query)
    this.setState(() => ({ results, query, isActive: true }))
  }

  readonly handleClickOutside = (ev: Event) => {
    const element = ReactDOM.findDOMNode(this)
    const isActive = !!this.state.query && !!element && element.contains(ev.target as Node)
    this.setState(() => ({ isActive }))
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true)
  }

  render() {
    const { limit } = this.props
    const count = this.state.results.length

    return (
      <div css={styles.wrapper}>
        <label>
          <span css={styles.hidden}>Search</span>
          <input
            type="search"
            css={styles.input}
            value={this.state.query}
            onChange={this.handleSearch}
          />
        </label>
        {this.state.isActive ? (
          <ul css={styles.list}>
            {this.state.results.slice(0, limit).map((result, index) => (
              <li key={index} css={styles.item}>
                <Link css={styles.link} to={result.path}>
                  {result.title}
                </Link>
              </li>
            ))}
            <li css={styles.footer}>
              Showing {limit ? `${Math.min(limit, count)} of` : null} {count}{' '}
              {count === 1 ? 'result' : 'results'}.
            </li>
          </ul>
        ) : null}
      </div>
    )
  }
}
