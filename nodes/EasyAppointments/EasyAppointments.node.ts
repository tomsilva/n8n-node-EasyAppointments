import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	EasyAppointmentsApi,
} from '../../credentials/EasyAppointmentsApi.credentials';

export class EasyAppointments implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Easy!Appointments',
		name: 'easyAppointments',
		icon: 'file:easyappointments.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Easy!Appointments API',
		defaults: {
			name: 'Easy!Appointments',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'easyAppointmentsApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'Appointment',
						value: 'appointment',
					},
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Provider',
						value: 'provider',
					},
					{
						name: 'Service',
						value: 'service',
					},
					{
						name: 'Service Category',
						value: 'serviceCategory',
					},
					{
						name: 'Availability',
						value: 'availability',
					},
					{
						name: 'Unavailability',
						value: 'unavailability',
					},
				],
				default: 'appointment',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				displayOptions: {
					show: {
						resource: [
							'appointment',
							'customer',
							'provider',
							'service',
							'serviceCategory',
							'availability',
							'unavailability',
						],
					},
				},
				options: [
					{
						name: 'Create',
						value: 'create',
						action: 'Create a resource',
						routing: {
							request: {
								method: 'POST',
								url: '={{$parameter["resource"]}}s',
							},
						},
					},
					{
						name: 'Delete',
						value: 'delete',
						action: 'Delete a resource',
						routing: {
							request: {
								method: 'DELETE',
								url: '={{$parameter["resource"]}}s/{{$parameter["id"]}}',
							},
						},
					},
					{
						name: 'Get',
						value: 'get',
						action: 'Get a resource',
						routing: {
							request: {
								method: 'GET',
								url: '={{$parameter["resource"]}}s/{{$parameter["id"]}}',
							},
						},
					},
					{
						name: 'Get All',
						value: 'getAll',
						action: 'Get all resources',
						routing: {
							request: {
								method: 'GET',
								url: '={{$parameter["resource"]}}s',
							},
						},
					},
					{
						name: 'Update',
						value: 'update',
						action: 'Update a resource',
						routing: {
							request: {
								method: 'PUT',
								url: '={{$parameter["resource"]}}s/{{$parameter["id"]}}',
							},
						},
					},
				],
				default: 'get',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				displayOptions: {
					show: {
						resource: [
							'appointment',
							'customer',
							'provider',
							'service',
							'serviceCategory',
							'availability',
							'unavailability',
						],
						operation: [
							'delete',
							'get',
							'update',
						],
					},
				},
				default: '',
			},
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						operation: [
							'create',
							'update',
						],
						resource: [
							'appointment',
							'customer',
							'provider',
							'service',
							'serviceCategory',
							'availability',
							'unavailability',
						],
					},
				},
				options: [
					// Appointment fields
					{
						displayName: 'Start',
						name: 'start',
						type: 'dateTime',
						displayOptions: {
							show: {
								resource: ['appointment'],
							},
						},
					},
					{
						displayName: 'End',
						name: 'end',
						type: 'dateTime',
						displayOptions: {
							show: {
								resource: ['appointment'],
							},
						},
					},
					{
						displayName: 'Location',
						name: 'location',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['appointment'],
							},
						},
					},
					{
						displayName: 'Notes',
						name: 'notes',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['appointment'],
							},
						},
					},
					{
						displayName: 'Customer ID',
						name: 'customerId',
						type: 'number',
						displayOptions: {
							show: {
								resource: ['appointment'],
							},
						},
					},
					{
						displayName: 'Provider ID',
						name: 'providerId',
						type: 'number',
						displayOptions: {
							show: {
								resource: ['appointment'],
							},
						},
					},
					{
						displayName: 'Service ID',
						name: 'serviceId',
						type: 'number',
						displayOptions: {
							show: {
								resource: ['appointment'],
							},
						},
					},
					// Customer fields
					{
						displayName: 'First Name',
						name: 'firstName',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['customer'],
							},
						},
					},
					{
						displayName: 'Last Name',
						name: 'lastName',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['customer'],
							},
						},
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['customer'],
							},
						},
					},
					{
						displayName: 'Phone',
						name: 'phone',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['customer'],
							},
						},
					},
					// Provider fields
					{
						displayName: 'First Name',
						name: 'firstName',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['provider'],
							},
						},
					},
					{
						displayName: 'Last Name',
						name: 'lastName',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['provider'],
							},
						},
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['provider'],
							},
						},
					},
					{
						displayName: 'Phone',
						name: 'phone',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['provider'],
							},
						},
					},
					// Service fields
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['service'],
							},
						},
					},
					{
						displayName: 'Duration',
						name: 'duration',
						type: 'number',
						displayOptions: {
							show: {
								resource: ['service'],
							},
						},
					},
					{
						displayName: 'Price',
						name: 'price',
						type: 'number',
						displayOptions: {
							show: {
								resource: ['service'],
							},
						},
					},
					{
						displayName: 'Currency',
						name: 'currency',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['service'],
							},
						},
					},
					// Service Category fields
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['serviceCategory'],
							},
						},
					},
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						displayOptions: {
							show: {
								resource: ['serviceCategory'],
							},
						},
					},
				],
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		for (let i = 0; i < items.length; i++) {
			const credentials = await this.getCredentials('easyAppointmentsApi') as EasyAppointmentsApi;
			const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

			let responseData;
			const endpoint = `${credentials.apiUrl}${resource}s`;

			const options: IDataObject = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			if (credentials.authentication === 'bearerToken') {
				options.headers.Authorization = `Bearer ${credentials.apiKey}`;
			} else {
				const auth = Buffer.from(`${credentials.username}:${credentials.password}`).toString('base64');
				options.headers.Authorization = `Basic ${auth}`;
			}

			try {
				if (operation === 'create') {
					options.method = 'POST';
					options.body = JSON.stringify(additionalFields);
					responseData = await this.helpers.httpRequest(options);
				} else if (operation === 'delete') {
					const id = this.getNodeParameter('id', i) as string;
					options.method = 'DELETE';
					await this.helpers.httpRequest({
						...options,
						url: `${endpoint}/${id}`,
					});
					responseData = { success: true };
				} else if (operation === 'get') {
					const id = this.getNodeParameter('id', i) as string;
					options.method = 'GET';
					responseData = await this.helpers.httpRequest({
						...options,
						url: `${endpoint}/${id}`,
					});
				} else if (operation === 'getAll') {
					options.method = 'GET';
					responseData = await this.helpers.httpRequest(options);
				} else if (operation === 'update') {
					const id = this.getNodeParameter('id', i) as string;
					options.method = 'PUT';
					options.body = JSON.stringify(additionalFields);
					responseData = await this.helpers.httpRequest({
						...options,
						url: `${endpoint}/${id}`,
					});
				}

				returnData.push({
					json: responseData,
				});
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: {
							error: error.message,
						},
					});
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
} 