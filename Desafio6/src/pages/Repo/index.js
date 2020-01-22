import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

export default class Repo extends Component {
    // eslint-disable-next-line react/state-in-constructor
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('star').full_name,
    });

    render() {
        const { navigation } = this.props;
        const { html_url } = navigation.getParam('star');

        return (
            <>
                <WebView source={{ uri: html_url }} style={{ flex: 1 }} />
            </>
        );
    }
}

Repo.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        getParam: PropTypes.func,
    }).isRequired,
};
