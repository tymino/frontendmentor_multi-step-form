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
        price: {
          monthly: '$9/mo',
          yearly: '$90/yr',
        },
      },
      {
        name: 'advanced',
        isSelected: false,
        icon: 'icon-advanced.svg',
        price: {
          monthly: '$12/mo',
          yearly: '$120/yr',
        },
      },
      {
        name: 'pro',
        isSelected: false,
        icon: 'icon-pro.svg',
        price: {
          monthly: '$15/mo',
          yearly: '$150/yr',
        },
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
