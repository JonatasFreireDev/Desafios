import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import Container from '../../components/Container';
import Loader from '../../components/Loader';

import { Owner, IssueList, Button, DeuErro, ConfigIssue } from './styles';

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
    error: false,
    filter: [
      { state: 'all', name: 'Todos' },
      { state: 'open', name: 'Abertos' },
      { state: 'closed', name: 'Fechados' },
    ],
    stateIssue: 'all',
    pageIssue: 1,
  };

  async componentDidMount() {
    try {
      const { match } = this.props;
      const repoName = decodeURIComponent(match.params.repository);

      const [repository, issues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: 'all',
            per_page: 5,
          },
        }),
      ]);

      this.setState({
        repository: repository.data,
        issues: issues.data,
        loading: false,
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  changeStateIssue = async (stateIssue, navigation = 1) => {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: stateIssue,
          per_page: 5,
          page: navigation,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
      pageIssue: navigation,
      stateIssue,
    });
  };

  render() {
    const {
      repository,
      issues,
      loading,
      error,
      filter,
      stateIssue,
      pageIssue,
    } = this.state;

    if (loading) {
      return (
        <Loader>
          <FaSpinner />
        </Loader>
      );
    }

    if (error) {
      return (
        <DeuErro>
          <p>Provavelmente, o limite de requisições ja foi atingido</p>
          <p>Tente novamente após 1 hora</p>
          <Link to="/">Voltar aos repositórios</Link>
        </DeuErro>
      );
    }

    return (
      <Container>
        <Owner>
          <Link to="/"> Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <IssueList>
          <ConfigIssue>
            {filter.map(filt => (
              <Button
                onClick={() => this.changeStateIssue(`${filt.state}`)}
                className={stateIssue === filt.state ? 'active' : ''}
              >
                {filt.name}
              </Button>
            ))}
          </ConfigIssue>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
          <div className="pag">
            <Button
              onClick={() => {
                this.changeStateIssue(stateIssue, pageIssue - 1);
              }}
              disabled={pageIssue === 1}
            >
              Anterior
            </Button>
            <Button
              onClick={() => {
                this.changeStateIssue(stateIssue, pageIssue + 1);
              }}
            >
              Proximo
            </Button>
          </div>
        </IssueList>
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};
