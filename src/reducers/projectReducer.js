import {
  GETALL_REQUEST,
  GETALL_SUCCESS,
  GETALL_FAILURE,
  GETPROJECT_REQUEST,
  GETPROJECT_SUCCESS,
  GETPROJECT_FAILURE,
  CREATEPROJECT_REQUEST,
  CREATEPROJECT_SUCCESS,
  CREATEPROJECT_FAILURE,
  UPDATEPROJECT_REQUEST,
  UPDATEPROJECT_SUCCESS,
  UPDATEPROJECT_FAILURE,
  DELETEPROJECT_REQUEST,
  DELETEPROJECT_SUCCESS,
  DELETEPROJECT_FAILURE,
  TARGET_PROJECT,
} from '../actions/projectActions';

// INITIAL PROJECT STATE

const initialProjectState = {
  projects: [],
  project: {},
  loading: false,
  status: '',
  error: null,
  projectId: 0,
  projectTitle: '',
  projectDescription: '',
  projectStatus: '',
};

// PROJECT REDUCER

const projectReducer = (state = initialProjectState, action) => {
  switch (action.type) {
    // GET ALL PROJECTS BY USER
    case GETALL_REQUEST:
      return {
        ...state,
        loading: true,
        status: 'Pending...',
      };
    case GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload,
        status: 'Success',
      };
    case GETALL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        status: 'Failed',
      };
      // GET PROJECT BY ID
    case GETPROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        status: 'Pending...',
      };
    case GETPROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        project: action.payload,
        status: 'Success',
      };
    case GETPROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        status: 'Failed',
      };
      // CREATE PROJECT
    case CREATEPROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        status: 'Pending...',
      };
    case CREATEPROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        status: 'Success',
      };
    case CREATEPROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        status: 'Failed',
      };
      // UPDATE PROJECT BY ID
    case UPDATEPROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        status: 'Pending...',
      };
    case UPDATEPROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        status: 'Success',
      };
    case UPDATEPROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        status: 'Failed',
      };
      // DELETE PROJECT BY ID
    case DELETEPROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        status: 'Pending...',
      };
    case DELETEPROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        status: 'Success',
      };
    case DELETEPROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        status: 'Failed',
      };
      // TARGET PROJECT
    case TARGET_PROJECT:
      return {
        ...state,
        projectId: action.projectId,
        projectTitle: action.projectTitle,
        projectDescription: action.projectDescription,
        projectStatus: action.projectStatus,
      };
    default:
      return state;
  }
};

export default projectReducer;
