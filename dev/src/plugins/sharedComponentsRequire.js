import Vue from 'vue';

export default () => {
  const requireComponent = require.context(
    '@/components/Common',
    false,
    /[A-Z]\w+\.(vue)$/
  )

  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);

    const componentName = fileName.split('/')
      .pop()
      .replace(/\.\w+$/, '');

    Vue.component(
      componentName,
      componentConfig.default || componentConfig
    )
  });
}
