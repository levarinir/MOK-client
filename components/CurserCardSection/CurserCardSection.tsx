import styles from './CurserCardSection.module.scss';

const CurserCardSection = ({ width = '150px' }) => {
  return (
    <div className={styles.tabIsSelectedIndicator}>
      <div
        className={styles.tabIsSelectedIndicatorElipse}
        style={{ width: width }}
      ></div>
      <div className={styles.tabIsSelectedIndicatorTriangle}></div>
    </div>
  );
};

export default CurserCardSection;
