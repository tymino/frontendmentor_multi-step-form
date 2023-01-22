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
          monthly: 1,
          yearly: 10,
        },
      },
      {
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        isSelected: true,
        price: {
          monthly: 2,
          yearly: 20,
        },
      },
      {
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        isSelected: false,
        price: {
          monthly: 2,
          yearly: 20,
        },
      },
    ],
  }),
  getters: {
    getAddons(state, getters) {
      return state.checkboxes.reduce((acc, checkbox) => {
        if (checkbox.isSelected) {
          acc.push({
            name: checkbox.name,
            price: checkbox.price[getters.getStateToggle],
          });
        }

        return acc;
      }, []);
    },
  },
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
