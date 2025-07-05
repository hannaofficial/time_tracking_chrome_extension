Incomplete project My main gal was to create a extension that can track what  you see in browser so that the extension can tell ok you are consuming this type of information in this time everyday that is not good for you.By having this insight you can be aware of wasting time in browser. I created mostly all the backend logic I didn't just did the frontend part that was boring type and also I got interested in other project that was more valuable that's why i didn't work on this project.<br/>
Where i am in this project.<br/><br/>
This extension  can track the time in each web page and website you are visiting as well all the visible part of website that user can see can be be crawl(crawl data include title of the webpage, metadata and the visible part for the user) by this website except for youtube where you can only extract title and description.I thought to extract subtitle from each video but I didn't continue theerefore it is only a concept. I am telling because you can really know deep this project can be <br/><br/>
Next part is easy just to implement api key key of any ai model (i just try to use opensource model from hugging face for summary that is enough but for complex analysis you can use gemini model or other ) to give summary of the content we just crawl(crawl data are not fully clean you have to it ) from each website and then just frontend design all. that's all <br/><br/>
I even stop project because my main goal was to know how to crawl any website I really how the crawling works there fore I guess the interest goes to another interesting project.<br/>
But If some wanted to build this I think it is a really a great idea to make project on. You will learn how to build chrome extension, how to transfer data from chrome extension to local host, web crawling, implementation of ai, postgresql, using of prisma in next.js and so many thing about the environment of browser and next.js<br/><br/>
Important! what I was doing is I was transfering the data that I collected in browser and transfering it to next.js local server so that I could manupulate and see what we can do with and even heavy model couldn't be used in extension therefore I choose to use for data analysis. Final goal would also to transfer all the backend and frontend logic to chrome extension frontend and backend so that all the analysis is done in the chrome only.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
