import { describe, expect, it } from 'vitest';
import { buildFHIRRepresentation, checkCoverageRequirement, patient, payer, service, submitAuthorization, validateDocumentation } from './services';
import { PriorAuthorizationRequest } from './types';
const request:PriorAuthorizationRequest={id:'PA-TEST',patient,payer,service,status:'READY_TO_SUBMIT',outcome:'Approved',docs:{indication:'pain',symptoms:'8 months',treatment:'PT',exam:'tenderness',imaging:'x-ray'}};
describe('PriorAuth Connect mock services',()=>{
 it('returns a required coverage result',()=>expect(checkCoverageRequirement().required).toBe(true));
 it('validates complete and incomplete documentation',()=>{expect(validateDocumentation(request.docs)).toBe(true);expect(validateDocumentation({...request.docs,exam:''})).toBe(false)});
 it('generates a simplified FHIR representation',()=>{const f=buildFHIRRepresentation(request);expect(f.resourceType).toBe('ServiceRequest');expect((f.subject as {display:string}).display).toBe('Maya Thompson')});
 it('submits and returns an approved decision',async()=>{const d=await submitAuthorization('Approved');expect(d.status).toBe('APPROVED');expect(d.authorizationId).toBe('PA-SIM-10001')});
});
