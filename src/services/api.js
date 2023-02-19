import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/v1';
const appId = '63f21a132305e97855e45d04';

export const getListChatAPI = async () => {
	const resp = await axios.get(`${BASE_URL}/post/60d21af267d0d8992e610b8d/comment?limit=10`, {
		headers: {
			'app-id': appId,
			'Content-type': 'application/json',
		},
	});
	return resp.data;
};
