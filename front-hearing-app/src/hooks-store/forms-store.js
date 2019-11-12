import { initStore } from './store';

const configureStore = () => {
    const actions = {
        // Add form to store
        ADD_FORM: (curState, newForms) => {            
            const updatedData = [...curState.dataForms, newForms];              
            return { dataForms: updatedData }
        }
    }
    initStore(actions, {dataForms: []});
};

export default configureStore;


// Appearance of the data form
// initStore(actions, {dataForms: [
//     {
//         id: 'home',
//         answer: 'Tak',
//     },
//     {
//         id: 'p1',
//         answer: 'Nie',
//     },
//     {
//         id: 'p2',
//         answer: 'Nie wiem',
//     },
//     {
//         id: 'p3',
//         answer: 'Tak',
//     }
// ]});