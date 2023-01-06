import { createStore } from 'vuex';

import blockYourInfo from '@/store/blockYourInfo';
import blockSelectPlan from '@/store/blockSelectPlan';
import blockPickAddons from '@/store/blockPickAddons';

const store = createStore({
  state: () => ({
    // formData: {
    steps: [
      { id: 1, subtitle: 'step', title: 'your info', isActive: false },
      { id: 2, subtitle: 'step', title: 'select plan', isActive: false },
      { id: 3, subtitle: 'step', title: 'add-ons', isActive: true },
      { id: 4, subtitle: 'step', title: 'summary', isActive: false },
    ],
  }),
  getters: {
    currentStep(state) {
      return state.steps.find((step) => step.isActive === true).id;
    },
    getCostPlan:
      (state) =>
      (value, isBonus = false) => {
        const currency = isBonus ? '+$' : '$';
        const month = '/mo';
        const year = '/yr';

        return state.blockSelectPlan.toggle.isChecked
          ? currency + value * 10 + year
          : currency + value + month;
      },
  },
  mutations: {
    setNextStep(state) {
      let currentStepValue = state.steps.find(
        (step) => step.isActive === true
      ).id;
      const nextStepValue =
        currentStepValue === state.steps.length ? 1 : ++currentStepValue;

      state.steps = state.steps.map((step) => ({
        ...step,
        isActive: step.id === nextStepValue,
      }));
    },
  },
  modules: {
    blockYourInfo,
    blockSelectPlan,
    blockPickAddons,
  },
});

export default store;
