import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pagination from 'react-js-pagination';
import { PageHeader, Panel } from 'react-bootstrap';
import { getQuestions } from '../store/actions/Questions';

class MainContainer extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  renderQuestions = () => {
    const { questions } = this.props;
    return (
      questions.question ?
        <Panel id="collapsible-panel-example-2" defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              {questions.questions}
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <span>{questions.option1}</span>
              <span>{questions.option2}</span>
              <span>{questions.option3}</span>
              <span>{questions.option4}</span>
            </Panel.Body>
            <Panel.Footer>
              <span>Answer: </span>
              <span>{questions.answer}</span>
            </Panel.Footer>
          </Panel.Collapse>
        </Panel> : null
    );
  }
  render() {
    return (
      <div className="main-container">
        <PageHeader className="page-heading">
          <small>Subtext for header</small>
        </PageHeader>
        <div>

          <div className="justlearn-pagination text-center">
            <Pagination
              activePage={1}
              itemsCountPerPage={10}
              onChange={this.handlePageChange}
              pageRangeDisplayed={5}
              totalItemsCount={450}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions.questions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuestions: bindActionCreators(getQuestions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);