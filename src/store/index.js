import { createStore } from 'vuex';

const store = createStore({
  state: () => ({
    currentStep: 1,
    steps: [
      { id: 1, subtitle: 'step', title: 'your info', isActive: true },
      { id: 2, subtitle: 'step', title: 'select plan', isActive: false },
      { id: 3, subtitle: 'step', title: 'add-ons', isActive: false },
      { id: 4, subtitle: 'step', title: 'summary', isActive: false },
    ],
    message: '',
    inputs: {
      name: {
        id: 0,
        name: 'name',
        placeholder: 'e.g. Stephen King',
        value: '',
        error: false,
        errorText: 'This field is required',
      },
      'email address': {
        id: 1,
        name: 'email address',
        placeholder: 'e.g. stephenking@lorem.com',
        value: '',
        error: false,
        errorText: 'This field is required',
      },
      'phone number': {
        id: 2,
        name: 'phone number',
        placeholder: 'e.g. +1 234 567 890',
        value: '',
        error: true,
        errorText: 'This field is required',
      },
    },
  }),
  getters: {},
  mutations: {
    setNextStep(state) {
      if (state.currentStep === state.steps.length) {
        state.currentStep = 1;
      } else {
        state.currentStep++;
      }

      state.steps = state.steps.map((step) => ({
        ...step,
        isActive: step.id === state.currentStep ? true : false,
      }));
    },
    updateInput(state, value) {
      console.log('vuex', value);
      state.message = value;
    },
  },
});

export default store;
