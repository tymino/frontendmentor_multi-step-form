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
          monthly: 9,
          yearly: 90,
        },
      },
      {
        name: 'advanced',
        isSelected: false,
        icon: 'icon-advanced.svg',
        price: {
          monthly: 12,
          yearly: 120,
        },
      },
      {
        name: 'pro',
        isSelected: false,
        icon: 'icon-pro.svg',
        price: {
          monthly: 15,
          yearly: 150,
        },
      },
    ],
    toggle: {
      titleLeft: 'monthly',
      titleRight: 'yearly',
      isChecked: false,
    },
  }),
  getters: {
    getStateToggle(state) {
      const isToggleChecked = state.toggle.isChecked;
      const monthly = state.toggle.titleLeft;
      const yearly = state.toggle.titleRight;

      return isToggleChecked ? yearly : monthly;
    },
    getCurrentPlan(state, getters) {
      const option = state.options.find(({ isSelected }) => isSelected);

      return {
        name: option.name,
        duration: getters.getStateToggle,
        price: option.price[getters.getStateToggle],
      };
    },
  },
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
