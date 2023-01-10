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
  },
};

export default blockSelectPlan;
