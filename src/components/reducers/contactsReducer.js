const initialState = {
	contacts: {
		title1: "Work with us",
		title2: "or just follow",
		social: [
				{
					name: "YouTube",
					link: "https://www.youtube.com/user/GuardsmanGroup/"
				},
				{
					name: "Facebook",
					link: "https://www.facebook.com/GuardsmanGroup"
				},
				{
					name: "Twitter",
					link: "https://twitter.com/guardsmangroup"
				},
				{
					name: "Google Plus",
					link: "http://gplus.to/guardsmangroup"
				}
			],
		childs: [
				{
					name: "Guardsman Alarms",
					address: "6 Carvalho Drive, Kingston 10",
					tel: "(876) 929-6847, (876) 929-3299, (876) 926-1938",
					fax: "(876) 968-3038"
				},
				{
					name: "Guardsman Armoured",
					address: "1-7 South Camp Road, Kingston, CSO",
					tel: "(876) 928-9005 – 7, (876) 928-4947-9",
					fax: "(876) 928-2063 – Operations, (876) 928-9003 – Administration"
				},
				{
					name: "Guardsman Limited",
					address: "2-6 Emmaville Crescent, Kingston CSO, Jamaica W.I.",
					tel: "(876) 928-2246, (876) 928-5285, (876) 928-2641",
					fax: "(876) 928-5936"
				},
				{
					name: "Marksman",
					address: "14-16 Balmoral Ave, Kingston 10, Jamaica W.I.",
					tel: "(876) 926-3600, (876) 926-0440, (876) 929-2228",
					fax: "(876) 929-6138"
				}
			],
		headquarters: [
			{
				name: "Kingston",
				address: "107 Old Hope Road Kingston 6 Jamaica W.I. Jamaica",
				email: "info@guardsmangroup.com",
				contacts: ["(876) 978-5760","(876) 927-6613","FAX (876) 927-7539"]
			},
			{
				name: "Montego Bay",
				address: "Lot 1219 Ironshore, Industrial Estate Montego Bay Ironshore Jamaica",
				email: "info@guardsmangroup.com",
				contacts: ["(876) 953-3400","(876) 953-2944","(876) 953-9709","(876) 953-3385"]
			},
			{
				name: "May Pen",
				address: "55a Manchester Avenue, Industrial Estate May Pen Clarendon Jamaica",
				email: "info@guardsmangroup.com",
				contacts: ["(876)986-2765", "(876)902-6762"]
			},
			{
				name: "Negril",
				address: "Monte Vista Nompriel Road Sheffield Jamaica",
				email: "info@guardsmangroup.com",
				contacts: ["(876) 957-9183","(876) 957-3924","(876) 957-9027"]
			},
			{
				name: "Mandeville",
				address: "84 Manchester Road Jamaica",
				email: "info@guardsmangroup.com",
				contacts: ["(876) 962-2369","(876) 962-0682"]
			}
		]
	}
}

export const contactsReducer = (state = initialState.contacts, action) => state;
