import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectTranslation, makeSelectLoading, makeSelectError } from 'containers/App/selectors'
import H2 from 'components/H2'
import TranslatedText from 'components/TranslatedText'
import CenteredSection from './CenteredSection'
import Form from './Form'
import Input from './Input'
import Section from './Section'
import { loadTranslation } from '../App/actions'
import { increment, decrement, changeText } from './actions'
import { makeSelectCount, makeSelectText } from './selectors'

export class HomePage extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool
    ]),
    translation: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]),
    onSubmitForm: PropTypes.func,
    text: PropTypes.string,
    onChangeText: PropTypes.func
  }

  // When initial state text is not null, submit the form to load translation
  componentDidMount = () => {
    if (this.props.text && this.props.text.trim().length > 0) {
      this.props.onSubmitForm()
    }
  }

  render () {
    const { loading, error, translation } = this.props
    const translationListProps = {
      loading,
      error,
      translation
    }

    return (
      <article>
        <Helmet
          title='Home Page'
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' }
          ]}
        />
        <div>
          <CenteredSection>
            <H2>Start your project right away!</H2>
            <p>A highly scalable, offline-first foundation based on the popular react-boilerplate.</p>
          </CenteredSection>
          <Section>
            <H2>Try me!</H2>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor='text'>
                Enter some text to see it translated into Yoda-Speak
                <Input
                  id='text'
                  type='text'
                  placeholder='You can use this boilerplate to get started right away!'
                  value={this.props.text}
                  onChange={this.props.onChangeText}
                />
              </label>
            </Form>
            <TranslatedText {...translationListProps} />
          </Section>
        </div>
        <div>
          <h1>Counter Test!</h1>
          Current counter value: {this.props.count}
          <div><button onClick={this.props.onIncrement}>Increment</button></div>
          <div><button onClick={this.props.onDecrement}>Decrement</button></div>
        </div>
      </article>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  translation: makeSelectTranslation(),
  text: makeSelectText(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  count: makeSelectCount()
})

export function mapDispatchToProps (dispatch) {
  return {
    onChangeText: (evt) => dispatch(changeText(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(loadTranslation())
    },
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
