import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import phonebookOperations from "../../redux/phonebook/phonebook-operations.js";
import phonebookSelectors from "../../redux/phonebook/phonebook-selectors.js";

const PhonebookList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getContacts);
  const filter = useSelector(phonebookSelectors.getFilter)

  const getVisibleContacts = (allContacts, filter) => {
    const normalizedContactNames = filter.toString().toLowerCase();
    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedContactNames)
    );
  };

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  const onRemove = (id) => {
    dispatch(phonebookOperations.deleteContact(id));
  };

  return (
    <ul>
      {getVisibleContacts(contacts, filter).map((contact) => (
        <li key={contact.id}>
          <p>
            📱 {contact.name}: {contact.number}
          </p>
          <button
            className="btnRemove"
            onClick={() => {
              onRemove(contact.id);
            }}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};


export default PhonebookList;
