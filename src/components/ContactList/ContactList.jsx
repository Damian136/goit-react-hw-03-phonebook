import styles from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.contactItem}>
          <span className={styles.contactName}>{contact.name}</span>
          <span className={styles.contactNumber}>{contact.number}</span>
          <button className={styles.deleteButton} onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;