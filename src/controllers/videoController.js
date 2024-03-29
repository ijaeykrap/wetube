let videos = [
  {
    title: "video #1",
    rating: 5,
    comments: 2,
    createdAt: "2minutes ago",
    views: 105,
    id: 1,
  },
  {
    title: "video #2",
    rating: 5,
    comments: 2,
    createdAt: "2days ago",
    views: 229384,
    id: 2,
  },
  {
    title: "video #3",
    rating: 5,
    comments: 2,
    createdAt: "3weeks ago",
    views: 103984929,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("edit", { pageTitle: `Editing:  ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title: title,
    rating: 0,
    comments: 0,
    createdAt: "Just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
