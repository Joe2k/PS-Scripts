const fetch = require('node-fetch');
const axios = require('axios');

fetch('http://psd.bits-pilani.ac.in/Login.aspx', {
	headers: {
		accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
		'accept-language': 'en-US,en;q=0.9',
		'cache-control': 'max-age=0',
		'content-type': 'application/x-www-form-urlencoded',
		'upgrade-insecure-requests': '1',
	},
	referrer: 'http://psd.bits-pilani.ac.in/Login.aspx',
	body: '__EVENTTARGET=&__EVENTARGUMENT=&__VIEWSTATE=%2FwEPDwULLTE1NjMxNjMxNzFkZCo3T3kAnddTDFryr26qaofiTp5p&__VIEWSTATEGENERATOR=C2EE9ABB&__EVENTVALIDATION=%2FwEdAAYNcEy%2FuvEwBm4by%2BoKLWkjSvD5Cbpu3w0ab2H9f5rbFEPTPkdPWl%2B8YN2NtDCtxifN%2BDvxnwFeFeJ9MIBWR693w%2BqCzNvQHKCQwl8%2BYzOKE62xJNKuHibH70Ul6qoa4F8sDaR1uxEyo1xbP9xcXI4vvNcYtQ%3D%3D&TxtEmail=f20180460%40hyderabad.bits-pilani.ac.in&txtPass=R78L533D&Button1=Login&txtEmailId=',
	method: 'POST',
	mode: 'cors',
	credentials: 'same-origin',
}).then((resp) => {
	console.log(resp.headers);
});
