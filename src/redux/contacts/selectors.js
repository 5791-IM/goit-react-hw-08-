// Selectors

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, filter) => {
//     console.log("Calculating visible contacts");
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
