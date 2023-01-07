const blockPickAddons = {
  state: () => ({
    header: {
      title: 'Pick Add-ons',
      subtitle: 'Add-ons help enhance your gaming experience.',
    },
    checkboxes: [
      {
        name: 'Online service',
        description: 'Access to multiplayer games',
        isSelected: true,
        price: 1,
      },
      {
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        isSelected: true,
        price: 2,
      },
      {
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        isSelected: false,
        price: 2,
      },
    ],
  }),
  getters: {},
  mutations: {
    setCheckboxes(state, name) {
      console.log(state, name);
    },
    submitPickAddons() {
      this.commit('setNextStep');
    },
  },
};

export default blockPickAddons;
