import Axios from '../utils/http.config';

export class AssessmentService {
  static submit(assessment) {
    console.log(`Submitting assessment:`, assessment);
    return Axios.post(`/assessment/submit`, assessment)
      .then(response => {
        console.log(`Submit response:`, response);
        return response.data;
      })
      .catch(err => {
        console.error(`Submit error:`, err);
        throw new Error(`${err.response?.statusText ||
          `Error`} - ${err.response?.data?.message || `An error occurred`}`);
      });
  }

  static getList() {
    console.log(`Fetching assessments`);
    return Axios.get(`/assessment/list`)
      .then(response => {
        console.log(`List response:`, response);
        return response.data.data;
      })
      .catch(err => {
        console.error(`Get list error:`, err);
        throw new Error(`${err.response?.statusText ||
          `Error`} - ${err.response?.data?.message || `An error occurred`}`);
      });
  }

  static delete(assessmentId) {
    console.log(`Deleting assessment:`, assessmentId);
    return Axios.patch(`/assessment/${assessmentId}/delete`)
      .then(response => {
        console.log(`Delete response:`, response);
        return response.data;
      })
      .catch(err => {
        console.error(`Delete error:`, err);
        throw new Error(`${err.response?.statusText ||
          `Error`} - ${err.response?.data?.message || `An error occurred`}`);
      });
  }
}
