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
  },
});

export default store;
