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
        price: {
          monthly: '+$1/mo',
          yearly: '+$10/yr',
        },
      },
      {
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        isSelected: true,
        price: {
          monthly: '+$2/mo',
          yearly: '+$20/yr',
        },
      },
      {
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        isSelected: false,
        price: {
          monthly: '+$2/mo',
          yearly: '+$20/yr',
        },
      },
    ],
  }),
  mutations: {
    setCheckboxes(state, name) {
      state.checkboxes = state.checkboxes.map((checkbox) => {
        if (name === checkbox.name) {
          return {
            ...checkbox,
            isSelected: !checkbox.isSelected,
          };
        }

        return checkbox;
      });
    },
  },
};

export default blockPickAddons;
