import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import Repo from './pages/Repo';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            User,
            Repo,
        },
        {
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFF',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
            },
        }
    )
);

export default Routes;
