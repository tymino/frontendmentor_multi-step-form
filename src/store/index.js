import { createStore } from 'vuex';

import blockYourInfo from '@/store/blockYourInfo';
import blockSelectPlan from '@/store/blockSelectPlan';
import blockPickAddons from '@/store/blockPickAddons';

const store = createStore({
  state: () => ({
    // formData: {
    steps: [
      { id: 1, subtitle: 'step', title: 'your info', isActive: true },
      { id: 2, subtitle: 'step', title: 'select plan', isActive: false },
      { id: 3, subtitle: 'step', title: 'add-ons', isActive: false },
      { id: 4, subtitle: 'step', title: 'summary', isActive: false },
    ],
    currentStep: 3,
    isTheEnd: false,
  }),
  getters: {
    getSubscriptionDuration(state) {
      const isToggleChecked = state.blockSelectPlan.toggle.isChecked;
      const monthly = 'monthly';
      const yearly = 'yearly';

      return isToggleChecked ? yearly : monthly;
    },
  },
  mutations: {
    setStep(state, direction) {
      const stepDirection = direction === 'next' ? 1 : -1;

      let newStepValue = state.currentStep + stepDirection;

      if (newStepValue > state.steps.length) {
        newStepValue = 1;
      } else if (newStepValue < 1) {
        newStepValue = state.steps.length;
      }

      state.steps = state.steps.map((step) => ({
        ...step,
        isActive: step.id === newStepValue,
      }));

      state.currentStep = newStepValue;
    },
  },
  modules: {
    blockYourInfo,
    blockSelectPlan,
    blockPickAddons,
  },
});

export default store;
