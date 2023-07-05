import { model } from '@modern-js/runtime/model';

export interface UserType {
  id?: string;
  name?: string;
  avatar?: string;
  title?: string;
  permission?: any;
}

export const UserModel = model('user').define({
  state: {
    user: {
      avatar: '',
      name: '',
    },
  },
  actions: {
    add(state, user) {
      state.user = user;
    },
  },
});
