import { createNavigationContainerRef } from '@react-navigation/native';

// Create a navigation reference
export const navigationRef = createNavigationContainerRef();

// Navigation actions
export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function reset(routeName) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{ name: routeName }],
    });
  }
}

export function getCurrentRoute() {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute();
  }
  return null;
}

const NavigationService = {
  navigate,
  goBack,
  reset,
  getCurrentRoute,
};

export default NavigationService;
