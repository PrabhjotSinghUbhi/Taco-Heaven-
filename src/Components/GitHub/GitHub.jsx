// import React, { useEffect, useState } from "react";
// import { useGitHubInfo } from "../../hook/useGitHubInfo";

import { useLoaderData } from "react-router";

function GitHub() {
  const userName = `PrabhjotSinghUbhi`;

  const data = useLoaderData();

  //   const [data, setData] = useState({});

  //   async function gitData() {
  //     let response = await fetch(`https://api.github.com/users/${userName}`);
  //     let resp = await response.json();
  //     setData(resp);
  //     return resp;
  //   }

  // const data = useGitHubInfo()

  return (
    <div className="flex mt-15 mb-23 flex-col items-center p-8 bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl max-w-sm mx-auto border border-white/30">
      <div className="relative mb-4">
        <a
          href={`https://github.com/${userName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 p-1">
            <img
              src={data.avatar_url}
              alt="GitHub avatar"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
            />
          </div>
        </a>
        <span className="absolute bottom-2 right-2 bg-white/80 text-blue-700 text-xs px-4 py-1 rounded-full shadow font-semibold border border-blue-200">
          <svg
            className="inline w-4 h-4 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M13 7a3 3 0 11-6 0 3 3 0 016 0zM2 15a6 6 0 1112 0H2z" />
          </svg>
          {data.followers}
        </span>
      </div>
      <div className="text-2xl text-center font-bold text-gray-800 tracking-tight">
        {data.name || "Prabhjot Singh Ubhi"}
      </div>
      <div className="text-center text-gray-500 text-sm mb-3">
        Building cool things, one repo at a time.
      </div>
      <div className="text-center mb-6 text-gray-700 font-medium">
        🚀 Love open source?
        <br />
        Explore my projects and join the journey!
      </div>
      <a
        href={`https://github.com/${data.login}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-200"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.99.01 1.99.13 2.92.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
        </svg>
        Follow @{data.login}
      </a>
    </div>
  );
}

export default GitHub;

// export const githubDataInfo = async () => {
//     const response = await fetch(`https://api.github.com/users/PrabhjotSinghUbhi`)
//     const data = await response.json()

//     return data
// }