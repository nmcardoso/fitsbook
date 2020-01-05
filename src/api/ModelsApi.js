import Api from './Api';

class ModelsApi extends Api {
  getModels() {
    return this.get('/models').then(res => res.json());
  }

  getModel(id) {
    return this.get(`/model/${id}`).then(res => res.json());
  }

  getHistory(id) {
    return this.get(`/history/${id}`).then(res => res.json());
  }

  stopTraining(id) {
    return this.post(`/training/${id}/stop`).then(res => res.status);
  }

  deleteModel(id) {
    return this.delete(`/model/${id}`).then(res => res.status);
  }

  updateDescription(id, description) {
    return this.post(`/model/${id}/description`, description).then(res => res.status);
  }
}

export default ModelsApi;