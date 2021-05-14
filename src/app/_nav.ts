export const APP_ROUTES = {
  first: 'first',
  second: 'second',
  third: 'third'
};

export const NAV_ITEMS: NavigationData[] = [
  {
    name: 'Первый компонент',
    url: APP_ROUTES.first
  },
  {
    name: 'Второй компонент',
    url: APP_ROUTES.second
  },
  {
    name: 'Третий компонент',
    url: APP_ROUTES.third
  }
];

export interface NavigationAttributes {
  [propName: string]: any;
}
export interface NavigationLabel {
  class?: string;
  variant: string;
}
export interface NavigationWrapper {
  attributes: NavigationAttributes;
  element: string;
}

export interface NavigationLinkProps {
  queryParams?: {
    [k: string]: any;
  };
  fragment?: string;
  queryParamsHandling?: 'merge' | 'preserve' | '';
  preserveFragment?: boolean;
  skipLocationChange?: boolean;
  replaceUrl?: boolean;
  state?: {
    [k: string]: any;
  };
  routerLinkActiveOptions?: {
    exact: boolean;
  };
  routerLinkActive?: string | string[];
}

export interface NavigationData {
  /**
   * name (showed in breadcrumb, buttons, other)
   */
  name?: string;
  /**
   * url - routerLink url
   */
  url?: string | any[];
  /**
   * href - outside system link
   */
  href?: string;
  /**
   * icon - placed near name
   */
  icon?: string;
  /**
   * title - additional page title
   */
  title?: boolean;
  /**
   * children - NavigationData[]
   */
  children?: NavigationData[];
  /**
   * variant - second class, used nav buttons
   */
  variant?: 'success' | 'danger' | 'info' ;
  /**
   * attributes - need for customization links.
   * target: '_blank'
   * rel: 'noopener'
   * disabled: true
   */
  attributes?: NavigationAttributes[];
  /**
   * divider - show diviver near link
   */
  divider?: boolean;
  /**
   * class - additional class
   */
  class?: string;
  label?: NavigationLabel;
  wrapper?: NavigationWrapper;
  linkProps?: NavigationLinkProps;
}