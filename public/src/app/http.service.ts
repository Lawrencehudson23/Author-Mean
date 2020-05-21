import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _httpClient: HttpClient) {}

  getAuthors() {
    return this._httpClient.get('/api/authors');
  }
  deleteAuthors(id) {
    return this._httpClient.delete('/api/authors/' + id);
  }
  createAuthor(author) {
    return this._httpClient.post('/api/authors', author);
  }
  getAuthorById(id) {
    return this._httpClient.get('/api/authors/' + id);
  }
  updateAuthor(id, newData) {
    return this._httpClient.put('/api/authors/' + id, newData);
  }
}
