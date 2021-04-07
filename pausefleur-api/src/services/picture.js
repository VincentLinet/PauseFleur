import fetch from "isomorphic-unfetch";

const ACCESS = "y79lQUCrRnn3yMBMbZnzdNIlr_hB3kXPjHr_n0f6rFI";
const SECRET = "jpyPrhSav0E6lM8Ek-vNb-VFACOVnsrguVMQ5RUMCw4";
// const TARGET = "https://api.unsplash.com/photos/random?query=";
const TARGET = "https://api.unsplash.com/collections/62862929/photos?orientation=landscape";
// const LIMIT = "count=1";
// const ORIENTATION = "orientation=landscape";
// const KEYWORD = "zen nature";
// const LINK = `${TARGET}${KEYWORD}&${LIMIT}&${ORIENTATION}`;
const DEFAULT =
  "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2125&q=80";

export const getPicture = async () => {
  const data = await fetch(`${TARGET}&page=${Math.floor(Math.random() * 3) + 1}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Client-ID ${ACCESS}`
    }
  });

  if (data.ok === false) return Promise.reject(new Error("error"));
  const info = await data.json();
  const picture = info[Math.floor(Math.random() * Math.floor(info.length))];
  console.log(picture);
  const { urls, user, color } = picture;
  return info ? { picture: urls.full, credit: user.name, link: user.links.html, color } : DEFAULT;
};
