// @ts-nocheck
import { env } from '$env/dynamic/private';

const headers = {
	Authorization: `Bearer ${env.GITHUB_TOKEN}`,
	Accept: 'application/vnd.github+json'
};

export async function load() {
	const myReposResp = await fetch('https://api.github.com/users/vsheo/repos?per_page=100', {
		headers
	});
	// array met data van al mn repos
	const myRepos = await myReposResp.json();

	// https://github.com/vsheo/proof-of-concept/blob/b4cabe896cba3240dad86f1b4dc123499dd5868e/server.js#L155-L174
	// op deze url staat hoeveel van welke taal ik heb gebruikt https://api.github.com/repos/vsheo/all-human-accessible-website/languages
	// deze url geeft een getal per taal terug, al deze getallen ga ik ophalen en optrellen

	// gebruik de repo namen om een array te maken van al mn programeer
	const fetchPromises = myRepos.map(async (repo) => {
		const languagesResp = await fetch(`https://api.github.com/repos/vsheo/${repo.name}/languages`, {
			headers
		});
		return await languagesResp.json();
	});

	const allLanguages = await Promise.all(fetchPromises);

	// tel alles bijelkaar op, en bewaar het in een array
	const allLanguagesCounted = {};
	allLanguages.forEach((language) => {
		for (const [lang, bytes] of Object.entries(language)) {
			allLanguagesCounted[lang] = (allLanguagesCounted[lang] || 0) + bytes;
		}
	});

	return {
		langData: allLanguagesCounted
	};
}
