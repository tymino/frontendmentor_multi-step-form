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
    currentStep: 1,
    isTheEnd: false,
  }),
  getters: {
    priceWrap(state, getters) {
      const monthly = 'mo';
      const yearly = 'yr';
      const price = getters.getStateToggle === 'monthly' ? monthly : yearly;

      return (value) => `$${value}/${price}`;
    },
    getSubscriptionDuration(state, getters) {
      return getters.getStateToggle;
    },
    getTotalInfo(state, getters) {
      const plan = getters.getCurrentPlan;
      const addons = getters.getAddons;

      const priceAddons = getters.getAddons.reduce(
        (acc, cur) => acc + cur.price,
        0
      );

      const total = {
        plan,
        addons,
        total: {
          perValue: getters.getStateToggle.slice(0, -2),
          price: plan.price + priceAddons,
        },
      };

      return total;
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
