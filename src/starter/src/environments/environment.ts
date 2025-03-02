export const environment = {
	production: true,
	apiEndpoint: 'https://localhost:7023', 
	auth0Config:{
		tenantDomain: '<auth0-tenant-domain>',
		clientId: '<auth0-client-id>',
		audience: '<auth0-audience>',
		callbackRedirectUri: '/<callback-redirect-uri>',
	},
	msalConfig: {
	  auth: {
		 clientId: '<your-app-registration-client-id>',
		 authority: 'https://login.microsoftonline.com/<your-tenant-id>',
	  },
	},
	apiConfig: {
	  scopes: ['user.read'],
	  uri: 'https://graph.microsoft.com/v1.0/me',
	}
 };