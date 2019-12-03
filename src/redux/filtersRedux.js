/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const ADDING_TAG = createActionName('ADDING TAG');
export const REMOVING_TAG = createActionName('REMOVING TAG');
export const CHANGING_DURATION = createActionName('CHANGING DURATION');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const addTags = payload => ({ payload, type: ADDING_TAG });
export const removeTags = payload => ({ payload, type: REMOVING_TAG });
export const changeDuration = payload => ({ payload, type: CHANGING_DURATION });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case ADDING_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVING_TAG:
      return {
        ...statePart,
        tags: statePart.tags.filter(tag => tag != action.payload),
      };
    case CHANGING_DURATION:
      return {
        ...statePart,
        duration: action.payload,
      };
    default:
      return statePart;
  }
}
