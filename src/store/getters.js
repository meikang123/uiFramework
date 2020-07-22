const getters = {
  sidebar: (state) => state.app.sidebar,
  size: (state) => state.app.size,
  device: (state) => state.app.device,
  visitedViews: (state) => state.tagsView.visitedViews,
  cachedViews: (state) => state.tagsView.cachedViews,
  dict: (state) => state.dict,
  routes: (state) => state.user.routes,
  token: (state) => state.user.token,
  roles: (state) => state.user.roles,
  userInfo: (state) => state.user.info,
};
export default getters;
