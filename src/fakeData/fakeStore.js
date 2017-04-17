import texts from './apl-texts.json';

const fakeStore = {
    currentLanguage: texts.languageIsoCode,
    showForm: false,
    steps: 6,
    stepsLeft: 6,
    goingBack: false,
    breadcrumbs: [],
    answersHistory: [],
    labels: texts.labels,
    answers: texts.answers,
    questions: texts.questions,
    tree: texts.tree,
    currentNode: texts.tree,
    requestStatus: 'unsent' // || sent || success || error
};

export default fakeStore;
