import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
    Container,
    Form,
    Input,
    SubmitButton,
    NoList,
    List,
    User,
    Avatar,
    Name,
    Bio,
    ProfileButton,
    ProfileButtonText,
    Center,
} from './styles';

export default class Main extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        newUser: '',
        inputForm: {
            message: 'Nome do repositório',
            error: false,
        },
        users: [],
        loading: false,
    };

    async componentDidMount() {
        const users = await AsyncStorage.getItem('users');
        if (users) {
            this.setState({ users: JSON.parse(users) });
        }
    }

    componentDidUpdate(_, prevState) {
        const { users } = this.state;
        if (prevState.users !== users) {
            AsyncStorage.setItem('users', JSON.stringify(users));
        }
    }

    handleAddUser = async () => {
        const { users, newUser } = this.state;

        this.setState({ loading: true });

        const isUser = users.find(user => user.login === newUser);

        try {
            if (isUser) {
                throw new Error('Usuário duplicado');
            }

            if (!newUser) {
                throw new Error('Insira um usuário!');
            }

            const resp = await api.get(`/users/${newUser}`).catch(err => {
                throw new Error('Erro na Requisição');
            });

            const data = {
                name: resp.data.name,
                login: resp.data.login,
                bio: resp.data.bio,
                avatar: resp.data.avatar_url,
            };

            this.setState({
                users: [...users, data],
                newUser: '',
                loading: false,
                inputForm: {
                    error: false,
                    message: `${data.login} foi adicionado com sucesso`,
                },
            });
        } catch (err) {
            this.setState({
                newUser: '',
                loading: false,
                inputForm: {
                    error: true,
                    message: err.message,
                },
            });
        }

        Keyboard.dismiss();
    };

    handleNavigate = user => {
        const { navigation } = this.props;
        navigation.navigate('User', { user });
    };

    deleteItemById = login => {
        const { users } = this.state;
        const filteredData = users.filter(user => user.login !== login);
        this.setState({ users: filteredData });
    };

    static navigationOptions = {
        title: 'Usuarios',
    };

    render() {
        const {
            users,
            newUser,
            inputForm: { message, error },
            loading,
        } = this.state;

        return (
            <Container>
                <Form>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder={message}
                        value={newUser}
                        onChangeText={text => this.setState({ newUser: text })}
                        returnKeyType="send"
                        error={error}
                        onSubmitEditing={this.handleAddUser}
                    />
                    <SubmitButton
                        loading={loading}
                        onPress={this.handleAddUser}
                    >
                        {loading ? (
                            <ActivityIndicator color="#FFF" />
                        ) : (
                            <Icon name="add" size={20} color="#FFF" />
                        )}
                    </SubmitButton>
                </Form>
                {!users[0] ? (
                    <Center>
                        <NoList>Adicione novos usuários a lista.</NoList>
                        <Icon name="mood" size={60} color="#7159c1" />
                    </Center>
                ) : (
                    <List
                        data={users}
                        keyExtractor={user => user.login}
                        renderItem={({ item }) => (
                            <User
                                stopLeftSwipe={300}
                                forceCloseToLeftThreshold={10}
                                disableLeftSwipe={true}
                                leftOpenValue={200}
                                onRowOpen={() =>
                                    this.deleteItemById(item.login)
                                }
                            >
                                <View />

                                <View
                                    style={{
                                        alignItems: 'center',
                                    }}
                                >
                                    <Avatar source={{ uri: item.avatar }} />
                                    <Name>{item.name}</Name>
                                    <Bio>{item.bio}</Bio>
                                    <ProfileButton
                                        onPress={() => {
                                            this.handleNavigate(item);
                                        }}
                                    >
                                        <ProfileButtonText>
                                            Ver Perfil
                                        </ProfileButtonText>
                                    </ProfileButton>
                                </View>
                            </User>
                        )}
                    />
                )}
            </Container>
        );
    }
}

Main.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
