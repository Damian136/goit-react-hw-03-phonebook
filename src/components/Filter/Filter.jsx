import styles from '../Filter/Filter.module.css';

const Filter=({value, onChange})=> {
    const handleChange=(event)=> {
        onChange(event.target.value);
    };

    return (
        <div className={styles.filter}>
            <label className={styles.label}>
            Find cotact by name:
            <input
             type="text"
             value={value}
             onChange={handleChange}
             className={styles.input}
             pattern="^[^[a-zA-Za]+(([' \-][a-zA-Za])?[a-zA-Za]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required
           />
     </label>
 </div>);
};

export default Filter;