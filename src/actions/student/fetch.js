import ApiClient from '../../api/client'

export const FETCHED_STUDENT = 'FETCHED_STUDENT'

const api = new ApiClient()

export default (id) => {
  return dispatch => {

    api.get('students/'+id)
      .then(res => {return dispatch({ type: FETCHED_STUDENT, payload: res.body });})

  }
}
