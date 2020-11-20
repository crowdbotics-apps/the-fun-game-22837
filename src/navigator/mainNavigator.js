import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList176378Navigator from '../features/ArticleList176378/navigator';
import ArticleList176377Navigator from '../features/ArticleList176377/navigator';
import BlankScreen0176376Navigator from '../features/BlankScreen0176376/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList176378: { screen: ArticleList176378Navigator },
ArticleList176377: { screen: ArticleList176377Navigator },
BlankScreen0176376: { screen: BlankScreen0176376Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
