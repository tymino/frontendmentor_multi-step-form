const blockSummary = {
  state: () => ({
    header: {
      title: 'Finishing up',
      subtitle: 'Double-check everything looks OK before confirming.',
    },
  }),
  getters: {
    getTotalInfo() {
      return { value: 'test1' };
    },
  },
  mutations: {
    returnStepTwo() {
      this.commit('setStep', 2);
    },
  },
};

export default blockSummary;
