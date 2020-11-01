import {CallCustomerModel} from './callCustomerModel';
import {CallAgentModel} from './callAgentModel';

export interface CallModel {
  call_id: string;
  calltype_id: string;
  agent: CallAgentModel[];
  customer: CallCustomerModel[];
  call_start_time: Date;
  gs_file_url: string;
  duration: number;
}
