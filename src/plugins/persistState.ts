export const persistStatePlugin = ({ store }) => {
  // Rehydrate store state from localStorage
  const savedState = localStorage.getItem(store.$id);
  if (savedState) {
    store.$patch(JSON.parse(savedState));
  }

  // Watch for changes in the store and save them to localStorage
  store.$subscribe((_, state) => {
    localStorage.setItem(store.$id, JSON.stringify(state));
  });
};
