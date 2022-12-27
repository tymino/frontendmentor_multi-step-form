const blockSelectPlan = {
  state: () => ({
    header: {
      title: 'Select your plan',
      subtitle: 'You have the option of monthly or yearly billing.',
    },
    toggle: {
      titleLeft: 'monthly',
      titleRight: 'yearly',
      isChecked: false,
    },
  }),
  getters: {},
  mutations: {
    updateToggle(state) {
      state.toggle.isChecked = !state.toggle.isChecked;
    },
  },
};

export default blockSelectPlan;
