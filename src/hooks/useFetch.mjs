export async function useFetch(method = 'GET', body, endpoint) {
	let url = 'http://localhost:3000/Todos';

	if (method === 'DELETE' || method === 'PUT') {
		url += `/${endpoint}`;
	}

	const response = await fetch(url, {
		method: method,
		body: body && JSON.stringify(body),
	});

	const data = await response.json();

	return data;
}
