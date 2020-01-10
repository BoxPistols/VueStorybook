import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton2 from './MyButton2';

export default {
  title: 'Button2',
};

export const text = () => ({
  components: { MyButton2 },
  template: '<my-button2 @click="action">Hello Button</my-button2>',
  methods: { action: action('clicked') },
});

export const jsx = () => ({
  components: { MyButton2 },
  render(h) {
    return <my-button onClick={this.action}>With JSX</my-button>;
  },
  methods: { action: linkTo('clicked') },
});
