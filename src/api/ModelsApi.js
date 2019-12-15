import Api from './Api';

class ModelsApi extends Api {
  getModels() {
    return this.get('/models');
  }

  getModel(id) {
    return this.get(`/model/${id}`);
  }

  getHistory(id) {
    return this.get(`/history/${id}`);
  }
}

export default ModelsApi;