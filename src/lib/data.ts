import { sevHigh, sevLesser, sevLow, sevMassive, sevNormal, strikeAction, type StrikeData } from "./strike"

export const trains: StrikeData = [
    {
        id: "557b97bb-1240-4b86-a4a4-7e4b0a655a75",
        title: "RMT",
        action: [
            {
                id: "e23fdd61-92ca-4dbc-9368-bd8413121b57",
                title: "National RMT Strikes",
                about: "Rail passengers are being warned of the near total shutdown of Britain's railways, with strikes on Friday and Saturday. Industrial action - part of a dispute over pay, job security and working conditions - is also planned over the festive period, including Christmas Eve. Passengers should check their train-operating company's website and only travel if absolutely necessary.",
                aboutAuthor: "BBC",
                aboutSource: "https://www.bbc.co.uk/news/business-61634959",
                location: "National",
                link: "https://www.nationalrail.co.uk/service_disruptions/industrialaction.aspx",
                linkArchive: "https://web.archive.org/web/20221214162302/https://www.nationalrail.co.uk/service_disruptions/industrialaction.aspx",
                times: [
                    strikeAction("2022-12-13", 2),
                    strikeAction("2022-12-16", 2),
                    strikeAction("2023-01-03", 2),
                    strikeAction("2023-01-06", 2),
                ],
                sev: sevHigh(),
                updated: new Date("2022-12-15T14:16:00")
            },
            {
                id: "879749a6-7b35-4e5a-815e-78361d9858f1",
                title: "National RMT Christmas Strike",
                about: "Fresh rail strikes have been announced for Christmas Eve with the walkout threatening to hit celebrations and travel over the festive weekend. The RMT represents staff at Network Rail, who maintain the railways and include signallers and maintenance workers. The union also represents workers at 14 train operating companies.",
                aboutAuthor: "BBC",
                aboutSource: "https://www.bbc.co.uk/news/business-63867226",
                location: "National",
                link: "https://www.bbc.co.uk/news/business-63867226",
                linkArchive: "https://web.archive.org/web/20221205232553/https://www.bbc.co.uk/news/business-63867226",
                times: [
                    strikeAction("2022-12-24", 4)
                ],
                sev: sevMassive(),
                updated: new Date("2022-12-15T14:16:00")
            },
            {
                id: "b06e9f7a-4a0f-4e66-a16b-e1e9215f5935",
                title: "Chiltern Christmas Strike",
                about: "Members of the RMT union will take part in strike action, only travel if absolutely essential throughout the whole period of industrial action. There will be no Chiltern Railways services operating north of Banbury and there will be no Chiltern Railways services on any route on Sunday 18th December.",
                aboutAuthor: "Chiltern Railways",
                aboutSource: "https://www.chilternrailways.co.uk/strike",
                location: "Chiltern",
                link: "https://www.chilternrailways.co.uk/strike",
                linkArchive: "https://web.archive.org/web/20221203123225/https://www.chilternrailways.co.uk/strike",
                times: [
                    strikeAction("2022-12-13", 28)
                ],
                sev: sevLesser(),
                updated: new Date("2022-12-15T14:16:00")
            },
            {
                id: "de7e2fe8-0c3a-4746-8951-1d2e5984821e",
                title: "National RMT Cleaner Strikes",
                about: "Over 1,000 contracted out cleaners working for the likes of Churchill, Atalian Servest and Mitie are eligible to take walkout. Rail companies who use contracted out cleaning providers such as Avanti West Coast, GWR, LNER and TransPennine Express will be affected by the action.",
                aboutAuthor: "RMT",
                aboutSource: "https://www.rmt.org.uk/news/railway-cleaners-name-strike-dates-in-pay-dispute/",
                location: "National",
                link: "https://www.rmt.org.uk/news/railway-cleaners-name-strike-dates-in-pay-dispute/",
                linkArchive: "https://web.archive.org/web/20221129165647/https://www.rmt.org.uk/news/railway-cleaners-name-strike-dates-in-pay-dispute/",
                times: [
                    strikeAction("2022-12-22", 2),
                    strikeAction("2022-12-31", 1)
                ],
                sev: sevLow(),
                updated: new Date("2022-12-15T19:09:00")
            }
        ]
    },
    {
        id: "712f8606-c951-4588-a770-c2b54057bf0b",
        title: "Unite",
        action: [
            {
                id: "27f14dad-5490-43eb-938f-14a4a42ebdbe",
                title: "East Midlands Christmas Strike",
                about: "Industrial action is taking place on several dates in December 2022 and January 2023, affecting East Midlands Railway. Additionally, UNITE the Union will take strike action on 23 and 24 December. It has recently also been announced that further RMT Union strike action will take place from 18:00 on 24 December until 06:00 on 27 December. On any strike days, East Midlands Railway are asking customers to only travel by rail if necessary. If you do decide to travel, please plan ahead and leave extra time for your journey.",
                aboutAuthor: "National Rail",
                aboutSource: "https://www.nationalrail.co.uk/service_disruptions/311900.aspx",
                location: "EMR",
                link: "https://www.nationalrail.co.uk/service_disruptions/311900.aspx",
                linkArchive: "https://web.archive.org/web/20221214174912/https://www.nationalrail.co.uk/service_disruptions/311900.aspx",
                times: [
                    strikeAction("2022-12-23", 2)
                ],
                sev: sevHigh(),
                maybe: "https://www.theguardian.com/uk-news/2022/dec/14/rail-strikes-showdown-talks-planned-as-country-comes-to-a-standstill",
                updated: new Date("2022-12-15T14:16:00")
            }
        ]
    },
    {
        id: "4a20f725-e09d-4b94-bcc1-5319826e3b43",
        title: "TSSA",
        action: [
            {
                id: "8330dde5-23da-4702-8e45-3e86a026d0b2",
                title: "CrossCountry Boxing Day Strike",
                about: "Members of the Transport Salaried Staffs Association (TSSA) at CrossCountry will strike on Boxing Day and 27 December. TSSA is demanding a guarantee of no compulsory redundancies, no unagreed changes to terms and conditions, and a pay increase which addresses the rising cost of living. The union said it believes the walkouts will severely affect services at CrossCountry, which covers large swathes of the country, from Penzance in Cornwall, to the Midlands, Wales, and northern England through to Scottish cities as far north as Aberdeen. The action replaces a strike at CrossCountry by TSSA on 17 December which has now been cancelled.",
                aboutSource: "https://www.nationalworld.com/news/uk/strike-uk-winter-updating-list-dates-royal-mail-rmt-nhs-3926988",
                aboutAuthor: "National World",
                location: "EMR",
                link: "https://www.nationalworld.com/news/uk/strike-uk-winter-updating-list-dates-royal-mail-rmt-nhs-3926988",
                linkArchive: "https://web.archive.org/web/20221209152049/https://www.nationalworld.com/news/uk/strike-uk-winter-updating-list-dates-royal-mail-rmt-nhs-3926988",
                times: [
                    strikeAction("2022-12-26", 1)
                ],
                sev: sevNormal(),
                updated: new Date("2022-12-15T22:41:00")
            }
        ]
    }
]

export const postal: StrikeData = [
    {
        id: "6001bd3a-cf78-43bc-9162-90f5e4f4415f",
        title: "CWU",
        action: [
            {
                id: "dc801cdb-9cdd-471d-9305-0de952a07029",
                title: "Royal Mail December Strike",
                about: "The CWU has formally notified Royal Mail they plan to call on their members who collect, sort and deliver parcels and letters to take national strike action on Wednesday 14 December, Thursday 15 December, Friday 23 December and Saturday 24 December 2022.",
                aboutAuthor: "Royal Mail",
                aboutSource: "https://www.royalmail.com/latest-news",
                aboutImage: "https://www.royalmail.com/sites/royalmail.com/files/styles/intro_desktop/public/2022-03/royal-mail-van-in-the-countryside-1440x360-v2.jpg?h=816a1af4&amp;itok=T4FnBGfn",
                location: "National",
                link: "https://www.royalmail.com/latest-news",
                linkArchive: "https://web.archive.org/web/20221214162401/https://www.royalmail.com/latest-news",
                times: [
                    strikeAction("2022-12-14", 2),
                ],
                sev: sevHigh(),
                updated: new Date("2022-12-15T19:38:00")
            },
            {
                id: "354dbb86-9f7b-4f1e-8b41-a753de27011b",
                title: "Royal Mail Christmas Strike",
                about: "The CWU has formally notified Royal Mail they plan to call on their members who collect, sort and deliver parcels and letters to take national strike action on Wednesday 14 December, Thursday 15 December, Friday 23 December and Saturday 24 December 2022.",
                aboutAuthor: "Royal Mail",
                aboutImage: "https://www.royalmail.com/sites/royalmail.com/files/styles/intro_desktop/public/2022-03/royal-mail-van-in-the-countryside-1440x360-v2.jpg?h=816a1af4&amp;itok=T4FnBGfn",
                aboutSource: "https://www.royalmail.com/latest-news",
                location: "National",
                link: "https://www.royalmail.com/latest-news",
                linkArchive: "https://web.archive.org/web/20221214162401/https://www.royalmail.com/latest-news",
                times: [
                    strikeAction("2022-12-23", 2)
                ],
                sev: sevMassive(),
                updated: new Date("2022-12-15T19:38:00")
            }
        ]
    }
]

export const medical: StrikeData = [
    {
        id: "1620a34a-d7d7-4dcc-9d83-40310c4828a4",
        title: "RCN",
        action: [
            {
                id: "6a0d52cf-93a5-47b5-a3c7-41a63fe0cfb4",
                title: "2022 National Nursing Strike",
                about: "For the first time in our history, our members in England, Wales and Northern Ireland will take part in strikes on Thursday 15 December and Tuesday 20 December 2022.",
                aboutAuthor: "RCN",
                aboutSource: "https://www.rcn.org.uk/Get-Involved/Campaign-with-us/Fair-Pay-for-Nursing/Strike-hub/Strike-locations",
                location: "National",
                link: "https://www.rcn.org.uk/news-and-events/news/uk-rcn-nhs-nursing-strikes-2022-first-day-151222",
                linkArchive: "https://web.archive.org/web/20221215194350/https://www.rcn.org.uk/news-and-events/news/uk-rcn-nhs-nursing-strikes-2022-first-day-151222",
                times: [
                    strikeAction("2022-12-15", 1),
                    strikeAction("2022-12-20", 1),
                ],
                sev: sevMassive(),
                updated: new Date("2022-12-15T19:46:00")
            }
        ]
    }
]

export const education: StrikeData = [
    {
        id: "624159bf-65ce-447e-a546-1fb1f5b542c7",
        title: "EIS",
        action: [
            {
                id: "45556d68-8d16-47d1-9dc1-9b294b3cb70f",
                title: "EIS Winter Strikes",
                about: "Teachers in Scotland will strike on a further 16 days in a dispute over pay, a union has confirmed. The Educational Institute of Scotland (EIS) said the consecutive days of action - split across every council in the country - would take place in January and February next year.",
                aboutAuthor: "BBC",
                aboutSource: "https://www.bbc.co.uk/news/uk-scotland-63759720",
                location: "Scotland",
                link: "https://www.bbc.co.uk/news/uk-scotland-63759720",
                linkArchive: "https://web.archive.org/web/20221215002714/https://www.bbc.co.uk/news/uk-scotland-63759720",
                times: [
                    strikeAction("2023-01-16", 16)
                ],
                sev: sevNormal(),
                updated: new Date("2022-12-15T19:57:00")
            }
        ]
    }
]

export const all: StrikeData[] = [trains, postal, medical, education];
