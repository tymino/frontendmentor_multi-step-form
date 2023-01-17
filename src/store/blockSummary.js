const blockSummary = {
  state: () => ({
    header: {
      title: 'Finishing up',
      subtitle: 'Double-check everything looks OK before confirming.',
    },
  }),
  mutations: {
    returnStepTwo() {
      this.commit('setStep', 2);
    },
  },
};

export default blockSummary;
