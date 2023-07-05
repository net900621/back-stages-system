import { model } from '@modern-js/runtime/model';

export interface MenuType {
  icon?: JSX.Element;
  name?: string;
  url?: string;
  child?: MenuType[];
}

export const MenuModel = model('menu').define({
  state: {
    items: [],
  },
  actions: {
    add(state, list) {
      state.items = list;
    },
  },
});
