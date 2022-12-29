const validateName = (value) => {
  const regex = new RegExp(`^[a-z]+\\s{1}[a-z]+$`, 'i');
  return regex.test(value);
};

const validateEmail = (value) => {
  const regex = new RegExp(`^\\w+@\\w+.\\w{2,5}$`);
  return regex.test(value);
};

const validatePhoneNumber = (value) => {
  const regex = new RegExp(`^\\w+@\\w+.\\w{2,5}$`);
  return regex.test(value);
};

const blockYourInfo = {
  state: () => ({
    header: {
      title: 'Personal info',
      subtitle: 'Please provide your name, email address and phone number.',
    },
    inputs: {
      name: {
        id: 0,
        name: 'name',
        placeholder: 'e.g. Stephen King',
        value: '',
        validate: validateName,
        error: false,
        errorText: 'This field is required',
      },
      'email address': {
        id: 1,
        name: 'email address',
        placeholder: 'e.g. stephenking@lorem.com',
        value: '',
        validate: validateEmail,
        error: false,
        errorText: 'This field is required',
      },
      'phone number': {
        id: 2,
        name: 'phone number',
        placeholder: 'e.g. +1 234 567 890',
        value: '',
        validate: validatePhoneNumber,
        error: false,
        errorText: 'This field is required',
      },
    },
  }),
  getters: {},
  mutations: {
    updateInput(state, inputData) {
      const { inputName, value } = inputData;
      const targetInput = state.inputs[inputName];

      targetInput.error = !targetInput.validate(value);
      targetInput.value = value;
    },
  },
};

export default blockYourInfo;
