export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const visibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
