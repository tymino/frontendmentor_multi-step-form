const blockSelectPlan = {
  state: () => ({
    header: {
      title: 'Select your plan',
      subtitle: 'You have the option of monthly or yearly billing.',
    },
    options: [
      {
        name: 'arcade',
        isSelected: true,
        icon: 'icon-arcade.svg',
        price: 9,
      },
      {
        name: 'advanced',
        isSelected: false,
        icon: 'icon-advanced.svg',
        price: 12,
      },
      {
        name: 'pro',
        isSelected: false,
        icon: 'icon-pro.svg',
        price: 15,
      },
    ],
    toggle: {
      titleLeft: 'monthly',
      titleRight: 'yearly',
      isChecked: false,
    },
  }),
  getters: {},
  mutations: {
    setToggle(state) {
      state.toggle.isChecked = !state.toggle.isChecked;
    },
    setOption(state, name) {
      state.options = state.options.map((option) => ({
        ...option,
        isSelected: option.name === name,
      }));
    },
    // submitOptions(state) {
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
