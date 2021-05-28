import { useState } from "react";
import phonebookOperations from "../../redux/phonebook/phonebook-operations";
import phonebookSelectors from "../../redux/phonebook/phonebook-selectors";
import { useSelector, useDispatch } from "react-redux";

const PhonebookForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(phonebookSelectors.getContacts);

  const handleChangeName = (e) => {
    setName(e.currentTarget.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleCheckUniqueContact(name)) {
      return;
    }
    onSubmit();
    reset();
  };

  const handleCheckUniqueContact = (name) => {
    const check = contacts.find((contact) => {
      return contact.name === name;
    });
    if (check) {
      alert("Contact is already exist");
      return check;
    }
  };

  const onSubmit = () => {
    dispatch(phonebookOperations.addContact({ name, number }));
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={"form"} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChangeNumber}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default PhonebookForm;
