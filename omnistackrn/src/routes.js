import {
	createSwitchNavigator,
	createAppContainer,
	createStackNavigator
} from "react-navigation";

import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import New from "./pages/New";

// createAppContainer Contem tudo relacionado a navegacao
const Routes = createAppContainer(
	createSwitchNavigator({
		Login,
		App: createStackNavigator({
			Timeline,
			New
		})
	})
);

export default Routes;
