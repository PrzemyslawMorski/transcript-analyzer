import {Component, OnInit} from '@angular/core';
import {AgentModel} from '../models/agentModel';
import {CallModel} from '../models/callModel';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {AgentsService} from '../services/agents.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  selectedAgentControl: FormControl = new FormControl(undefined);
  selectedCallControl: FormControl = new FormControl(undefined);
  matchingSensitivityControl: FormControl = new FormControl(0.38);

  agents: AgentModel[] = [];

  calls: CallModel[] = [
    {
      call_start_time: new Date(2020, 7, 20),
      agent: [
        {agent_id: '1', channel_no: 1}
      ],
      call_id: '1',
      calltype_id: 'my type',
      customer: [
        {full_name: 'Luke Skywalker', channel_no: 1}
      ],
      duration: 123123123,
      gs_file_url: ''
    }
  ];


  realCall = new MatTableDataSource();
  realCallDisplayedColumns = ['time', 'speaker', 'sentence'];

  expectedCall = new MatTableDataSource();

  constructor(private readonly agentsService: AgentsService) {
    agentsService.getAgents().subscribe(agents => {
      this.agents = agents;
    });
  }

  ngOnInit(): void {
  }
}
