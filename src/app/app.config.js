import { AppColors, AppSizes, AppStyles } from '../theme';

const AppConfig = {
  // App Details
  appName: 'arnsk',

  // URLs
  urls: {
    baseUrl: 'https://www.example.com',
    apiBaseUrl: 'htpps://www.example.com/api/1',
  },

  // API
  api: {
    conf: {
      // callBackUri: Config.LOGIN_CALLBACK_URL,
      // clientId: Config.API_CLIENT_ID,
    },
    endpoints: {
      login: '/login',
    },
  },

  // Navbar Props
  navbarProps: {
    hideNavBar: false,
    titleStyle: AppStyles.navbarTitle,
    navigationBarStyle: AppStyles.navbar,
    navBarButtonColor: AppStyles.navbarButton.tintColor,
    leftButtonIconStyle: AppStyles.navbarButton,
    rightButtonIconStyle: AppStyles.navbarButton,
    // renderRightButton: HeaderMenu,
    sceneStyle: {
      backgroundColor: AppColors.background,
      paddingTop: AppSizes.navbarHeight,
    },
  },
};

export default AppConfig;