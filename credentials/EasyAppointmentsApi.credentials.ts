import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class EasyAppointmentsApi implements ICredentialType {
	name = 'easyAppointmentsApi';
	displayName = 'Easy!Appointments API';
	documentationUrl = 'https://easyappointments.org/docs.html';
	properties: INodeProperties[] = [
		{
			displayName: 'API URL',
			name: 'apiUrl',
			type: 'string',
			default: 'https://demo.easyappointments.org/index.php/api/v1/',
			description: 'The URL of your Easy!Appointments instance',
			required: true,
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'options',
			options: [
				{
					name: 'Bearer Token',
					value: 'bearerToken',
				},
				{
					name: 'Basic Auth',
					value: 'basicAuth',
				},
			],
			default: 'bearerToken',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			displayOptions: {
				show: {
					authentication: [
						'bearerToken',
					],
				},
			},
			default: '',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			displayOptions: {
				show: {
					authentication: [
						'basicAuth',
					],
				},
			},
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			displayOptions: {
				show: {
					authentication: [
						'basicAuth',
					],
				},
			},
			default: '',
		},
	];
} 