import styles from './ButtonCard.module.scss';

export interface ButtonCardProps {
  side?: 'Right' | 'Left';
  clickBtn: Function;
}

const ButtonCard = ({ side, clickBtn }: ButtonCardProps) => {
  const click = (side) => {
    console.log('Comp: ButtonCard, Func: click, Side: ', side);
    clickBtn(side);
  };
  return (
    <div
      onClick={() => click(side)}
      className={`${styles.button} ${
        side === 'Right' ? styles.right : styles.left
      }`}
    >
      <img src={`/static/images/home/btn${side}.png`} />
    </div>
  );
};

export default ButtonCard;
