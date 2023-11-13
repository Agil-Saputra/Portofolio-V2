export const getMessages = async (locale, namespace) => {
	const apiKey = process.env.NEXT_PUBLIC_I18NEXUS_API_KEY;
  
	const response = await fetch(
	  `https://api.i18nexus.com/project_resources/translations/${locale}/${namespace}?api_key=${apiKey}`
	);
  
	return response.json();
  };