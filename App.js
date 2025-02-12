import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import PokeList from "./src/screens/PokeList";
import PokeDetails from './src/screens/PokeDetails';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: PokeDetails,
    PokeList: PokeList,
    PokeDetails: PokeDetails,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Pokedex",
    },
  }
);

export default createAppContainer(navigator);
