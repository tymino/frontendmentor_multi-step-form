import { createStore } from 'vuex';

import blockYourInfo from '@/store/blockYourInfo';
import blockSelectPlan from '@/store/blockSelectPlan';

const store = createStore({
  state: () => ({
    // formData: {
    //   user: {
    //     name: '',
    //     email: '',
    //     phone: '',
    //   },
    //   plan: {
    //     name: '',
    //     type: '',
    //   },
    //   addons: [],
    // },
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
    setCurrentStep(state) {
      console.log('setCurrentStep');
      state.currentStep === state.steps.length
        ? (state.currentStep = 1)
        : state.currentStep++;

      state.steps = state.steps.map((step) => ({
        ...step,
        isActive: step.id === state.currentStep ? true : false,
      }));
    },
  },
  modules: {
    blockYourInfo,
    blockSelectPlan,
  },
});

export default store;
