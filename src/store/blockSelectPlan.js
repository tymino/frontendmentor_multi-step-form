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
    // submitSelects(state) {
    //   const inputs = state.inputs;

    //   for (const key in inputs) {
    //     if (inputs[key].error || inputs[key].value === '') {
    //       inputs[key].error = true;
    //       return;
    //     }
    //   }

    //   this.commit('setCurrentStep');
    // },
  },
};

export default blockSelectPlan;
