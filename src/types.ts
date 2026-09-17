export type Status = 'DRAFT'|'REQUIREMENTS_FOUND'|'DOCUMENTATION_PENDING'|'READY_TO_SUBMIT'|'SUBMITTED'|'PENDING'|'ADDITIONAL_INFORMATION_REQUIRED'|'APPROVED'|'DENIED';
export type Patient = { id:string; name:string; dob:string; memberId:string; payerId:string };
export type Payer = { id:string; name:string };
export type Service = { id:string; name:string; diagnosis:string };
export type CoverageRequirement = { required:boolean; explanation:string; documents:string[] };
export type PriorAuthorizationRequest = { id:string; patient:Patient; payer:Payer; service:Service; status:Status; authorizationId?:string; outcome:'Approved'|'Additional Information Required'|'Denied'; docs:Record<string,string>; fhir?:Record<string,unknown>; submittedAt?:string; decisionAt?:string };
export type PayerDecision = { status:Status; authorizationId?:string; decision:string };
export type AuditEvent = { timestamp:string; event:string; actor:string; description:string };
