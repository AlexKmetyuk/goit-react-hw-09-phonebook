import PhonebookForm from "../components/Phonebook/PhonebookForm";
import PhonebookList from "../components/Phonebook/PhonebookList";
import Filter from "../components/Phonebook/Filter";

const PhonebookView = () => {
  return (
    <div className="app">
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <PhonebookList />{" "}
    </div>
  );
};

export default PhonebookView;
