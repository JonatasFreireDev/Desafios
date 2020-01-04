import React, { Component } from 'react';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import { MdClose, MdChevronRight } from 'react-icons/md';

import { Link } from 'react-router-dom';

import Container from '../../components/Container';

import { Form, SubimitButton, List } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    inputForm: {
      message: 'Nome do repositório',
      error: false,
    },
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const isRep = repositories.find(
      repositorie => repositorie.name === newRepo
    );

    try {
      if (isRep) {
        throw new Error('Repositório duplicado');
      }

      if (!newRepo) {
        throw new Error('Insira um repositório');
      }

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
        image: response.data.owner.avatar_url,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
        inputForm: {
          error: false,
          message: `${data.name} foi adicionado com sucesso`,
        },
      });
    } catch (error) {
      this.setState({
        newRepo: '',
        loading: false,
        inputForm: {
          error: true,
          message: error.message,
        },
      });
    }
  };

  handleDelete = repository => {
    const { repositories } = this.state;

    this.setState({
      repositories: repositories.filter(repo => repo !== repository),
      inputForm: {
        message: `${repository.name} foi deletado com sucesso`,
      },
    });
  };

  render() {
    const {
      newRepo,
      repositories,
      loading,
      inputForm: { message, error },
    } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder={message}
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubimitButton loading={loading}>
            {loading ? (
              <FaSpinner color="$FFF" size={14} />
            ) : (
              <FaPlus color="FFF" size={14} />
            )}
          </SubimitButton>
        </Form>
        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <div>
                <img src={repository.image} alt="" />
                <span>{repository.name}</span>
              </div>
              <div>
                <MdClose
                  className="delete"
                  onClick={() => this.handleDelete(repository)}
                />
                <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                  <MdChevronRight className="next" />
                </Link>
              </div>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
