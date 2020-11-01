import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AgentModel} from '../models/agentModel';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  agentsUrl = environment.backend + environment.agentsEndpoint;

  constructor(private readonly http: HttpClient) {
  }

  getAgents(): Observable<AgentModel[]> {
    return this.http.get<AgentModel[]>(this.agentsUrl);
  }

  // getCallsOfAnAgent(agentId: string): Observable<CallModel[]> {
  //   const url = this.agentsUrl + agentId;
  //   return this.http.get<HttpResponse<CallModel[]>>(url).pipe(map(response => {
  //     return response.body;
  //   }));
  // }
}
