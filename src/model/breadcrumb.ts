import { model } from '@modern-js/runtime/model';

export const BreadcrumbModel = model('breadcrumb').define({
  state: {
    hide: false,
  },
  actions: {
    add(state, hide: boolean) {
      state.hide = hide;
    },
  },
});
