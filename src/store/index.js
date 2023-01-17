import { createStore } from 'vuex';

import blockYourInfo from '@/store/blockYourInfo';
import blockSelectPlan from '@/store/blockSelectPlan';
import blockPickAddons from '@/store/blockPickAddons';
import blockSummary from '@/store/blockSummary';

const store = createStore({
  state: () => ({
    // formData: {
    steps: [
      { id: 1, subtitle: 'step', title: 'your info', isActive: true },
      { id: 2, subtitle: 'step', title: 'select plan', isActive: false },
      { id: 3, subtitle: 'step', title: 'add-ons', isActive: false },
      { id: 4, subtitle: 'step', title: 'summary', isActive: false },
    ],
    currentStep: 4,
    isTheEnd: false,
  }),
  getters: {
    getSubscriptionDuration(state, getters) {
      return getters.getStateToggle;
    },
    getTotalInfo(state, getters) {
      console.log(getters.getSubscriptionDuration);
      return {
        plan: getters.getCurrentPlan,
      };
    },
  },
  mutations: {
    updateSteps(state, stepNumber) {
      if (stepNumber > state.steps.length || stepNumber < 1) {
        stepNumber = 1;
      }

      if (state.currentStep === 1) {
        const hasError = state.blockYourInfo.hasError;

        if (hasError) {
          this.commit('checkErrorsOfInputs');
          return;
        }
      }

      state.steps = state.steps.map((step) => ({
        ...step,
        isActive: step.id === stepNumber,
      }));

      state.currentStep = stepNumber;
    },
    setPrevStep(state) {
      this.commit('updateSteps', state.currentStep - 1);
    },
    setNextStep(state) {
      this.commit('updateSteps', state.currentStep + 1);
    },
    setStep(state, stepNumber) {
      this.commit('updateSteps', stepNumber);
    },
    setConfirm(state) {
      state.isTheEnd = true;
    },
  },
  modules: {
    blockYourInfo,
    blockSelectPlan,
    blockPickAddons,
    blockSummary,
  },
});

export default store;
