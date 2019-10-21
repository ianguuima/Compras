import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Index from './pages/Index'

const Routes = createAppContainer(
    createSwitchNavigator({
        Index
    })
)

export default Routes;
